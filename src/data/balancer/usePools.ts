import {
    BalancerPoolFragment,
    BalancerPoolSnapshotFragment,
    useGetPoolChartDataQuery,
    useGetPoolDataLazyQuery,
    useBalancerPoolSwapFeeSnapshotQuery,
    PoolSnapshot,
} from '../../apollo/generated/graphql-codegen-generated';
import { useActiveNetworkVersion } from 'state/application/hooks';
import { useDeltaTimestamps } from '../../utils/queries';
import { useBlocksFromTimestamps } from '../../hooks/useBlocksFromTimestamps';
import { useEffect } from 'react';
import { unixToDate } from '../../utils/date';
import { BalancerChartDataItem, PoolData } from './balancerTypes';

function getPoolValues(
    poolId: string,
    pools: BalancerPoolFragment[],
    poolSwapFeeSnapshots?: BalancerPoolSnapshotFragment[],
): { tvl: number; volume: number; swapCount: number; fees: number, feesEpoch: number , poolType: string | null | undefined} {
    const pool = pools.find((pool) => poolId === pool.id);
    let epochFees = 0;
    if (poolSwapFeeSnapshots) {
    const feeData = getEpochSwapFees(poolId, Math.floor(today.getTime() / 1000), Math.floor(prevThuDate.getTime() / 1000), poolSwapFeeSnapshots);
    epochFees = feeData.swapFee;
    }

    if (!pool) {
        return { tvl: 0, volume: 0, swapCount: 0, fees: 0 , feesEpoch: 0, poolType: ''};
    }

    return {
        tvl: parseFloat(pool.totalLiquidity),
        volume: parseFloat(pool.totalSwapVolume),
        fees: parseFloat(pool.totalSwapFee),
        feesEpoch: epochFees,
        swapCount: parseFloat(pool.swapsCount),
       poolType: pool.poolType,
    };
}

function getEpochSwapFees(
    poolId: string,
    startTimeStamp: number,
    endTimeStamp: number,
    poolSnapshots: BalancerPoolSnapshotFragment[],
) : {swapFee: number} {
    let snapshotFee = 0;
    let startFee  = 0;
    let endFee = 0;
    poolSnapshots.forEach((pool) => {
        if (pool.pool.id === poolId) {
            if (pool.timestamp === endTimeStamp) {
                endFee = Number(pool.swapFees);
            }
            if (pool.timestamp === startTimeStamp) {
                startFee = Number(pool.swapFees);
            }
        }
        
    })
    if (endFee === 0 || startFee === 0) {
        snapshotFee = 0;
    } else {
        snapshotFee = startFee - endFee;
    }
    return {swapFee: snapshotFee};
}


//Poolsnapshots are taken OO:OO UTC. Generate previous snapshot date and previous Thu. Used to calculate weekly sweep fee generators
const target = 3 // Wednesday
const prevThuDate = new Date()
prevThuDate.setDate(prevThuDate.getDate() - ( prevThuDate.getDay() == target ? 7 : (prevThuDate.getDay() + (7 - target)) % 7 ));
prevThuDate.setUTCHours(0,0,0,0);
const today = new Date();
today.setUTCHours(0,0,0,0);

export function useBalancerPools(): PoolData[] {
    const [activeNetwork] = useActiveNetworkVersion();
    const [t24, t48, tWeek] = useDeltaTimestamps();
    const { blocks, error: blockError } = useBlocksFromTimestamps([t24, t48, tWeek]);
    const [block24, block48, blockWeek] = blocks ?? [];
    const [getPoolData, { data }] = useGetPoolDataLazyQuery();
    const feeData = useBalancerSwapFeePoolData();

    //const incentives = GetIncentiveList();
    //console.log("incentives", incentives['week_52']);

    useEffect(() => {
        if (block24) {
            //TODO: replace this once the graph has caught up
            getPoolData({
                variables: {
                    block24: { number: parseInt(block24.number) },
                    block48: { number: parseInt(block48.number) },
                    blockWeek: { number: parseInt(blockWeek.number) }, 
                },
                context: {
                    uri: activeNetwork.clientUri,
                }
            });
        }
    }, [block24]);

    if (!data) {
        return [];
    }

    const { pools, pools24, pools48, poolsWeek, prices } = data;

    return pools.map((pool) => {
        const poolData = getPoolValues(pool.id, pools, feeData);
        const poolData24 = getPoolValues(pool.id, pools24);
        const poolData48 = getPoolValues(pool.id, pools48);
        const poolDataWeek = getPoolValues(pool.id, poolsWeek);

        

        return {
            ...pool,
            name: pool.name || '',
            symbol: pool.symbol || '',
            feeTier: 1,
            swapFee: parseFloat(pool.swapFee),
            tokens: (pool.tokens || []).map((token) => {
                const weight = token.weight ? parseFloat(token.weight) : 0;
                const tokenPrice = prices.find((price) => price.asset === token.address);
                const price = tokenPrice ? parseFloat(tokenPrice.price) : 0;

                return {
                    ...token,
                    decimals: token.decimals,
                    derivedETH: 0,
                    price,
                    tvl: parseFloat(token.balance) * price,
                    weight,
                };
            }),
            liquidity: poolData.tvl,
            sqrtPrice: 0,
            tick: 0,
            volumeUSD: poolData.volume - poolData24.volume,
            volumeUSDChange:
                (poolData.volume - poolData24.volume - (poolData24.volume - poolData48.volume)) /
                (poolData24.volume - poolData48.volume),
            volumeUSDWeek: poolData.volume - poolDataWeek.volume,
            feesUSD: poolData.fees - poolData24.fees,
            feesEpochUSD: poolData.feesEpoch,
            tvlUSD: poolData.tvl,
            tvlUSDChange: (poolData.tvl - poolData24.tvl) / poolData24.tvl,
            poolType: poolData.poolType + "",
        };
    });
}

export function useBalancerSwapFeePoolData() {
    const [activeNetwork] = useActiveNetworkVersion();
    const  { data }  = useBalancerPoolSwapFeeSnapshotQuery({
        variables: { startTimestamp: Math.floor(today.getTime() / 1000) , endTimeStamp: Math.floor(prevThuDate.getTime() / 1000)},
        context: {
            uri: activeNetwork.clientUri,
        }
    }); 
    if (!data ) {
        return [];
    }
    const { poolSnapshots } = data;
    return poolSnapshots;

}

export function useBalancerPoolData(poolId: string): PoolData | null {
    const pools = useBalancerPools();
    const pool = pools.find((pool) => pool.id === poolId);

    return pool || null;
}

export function useBalancerPoolsForToken(address: string) {
    const pools = useBalancerPools();

    return pools.filter((pool) => pool.tokens.find((token) => token.address === address));
}

export function useBalancerPoolPageData(poolId: string): {
    tvlData: BalancerChartDataItem[];
    volumeData: BalancerChartDataItem[];
    feesData: BalancerChartDataItem[];
} {
    const [activeNetwork] = useActiveNetworkVersion();
    const { data } = useGetPoolChartDataQuery({
        variables: { poolId, startTimestamp: activeNetwork.startTimeStamp },
        context: {
            uri: activeNetwork.clientUri,
        },
    });
    if (!data) {
        return { tvlData: [], volumeData: [], feesData: [] };
    }

    const { poolSnapshots } = data;
    

    const tvlData = poolSnapshots.map((snapshot) => ({
        value: parseFloat(snapshot.totalLiquidity),
        time: unixToDate(snapshot.timestamp),
    }));

    const volumeData = poolSnapshots.map((snapshot, idx) => {
        const prevValue = idx === 0 ? 0 : parseFloat(poolSnapshots[idx - 1].swapVolume);
        const value = parseFloat(snapshot.swapVolume);

        return {
            value: value - prevValue > 0 ? value - prevValue : 0,
            time: unixToDate(snapshot.timestamp),
        };
    });

    const feesData = poolSnapshots.map((snapshot, idx) => {
        const prevValue = idx === 0 ? 0 : parseFloat(poolSnapshots[idx - 1].swapFees);
        const value = parseFloat(snapshot.swapFees);

        return {
            value: value - prevValue > 0 ? value - prevValue : 0,
            time: unixToDate(snapshot.timestamp),
        };
    });

    return {
        tvlData,
        volumeData,
        feesData,
    };
}
