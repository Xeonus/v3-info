import { useDeltaTimestamps } from '../../utils/queries';
import { useBlocksFromTimestamps } from '../../hooks/useBlocksFromTimestamps';
import {
    BalancerTokenFragment,
    LatestPriceFragment,
    useGetTokenDataLazyQuery,
    useGetTokenPageDataQuery,
} from '../../apollo/generated/graphql-codegen-generated';
import { useEffect } from 'react';
import { unixToDate } from '../../utils/date';
import { BalancerChartDataItem, TokenData } from './balancerTypes';
import { useActiveNetworkVersion } from 'state/application/hooks';
import { useState } from 'react';

//Coingecko Interface
export interface CoingeckoRawData {
    [id: string]: FiatPrice
}

export interface FiatPrice {
    usd: number,
    usd_24h_change: number
}

function getTokenValues(
    tokenAddress: string,
    tokens: BalancerTokenFragment[],
): { tvl: number; volume: number; swapCount: number; tvlToken: number } {
    const token = tokens.find((token24) => tokenAddress === token24.address);

    if (!token) {
        return { tvl: 0, volume: 0, swapCount: 0, tvlToken: 0 };
    }

    return {
        tvl: parseFloat(token.totalBalanceUSD),
        volume: parseFloat(token.totalVolumeUSD),
        swapCount: parseFloat(token.totalSwapCount),
        tvlToken: parseFloat(token.totalBalanceNotional),
    };
}

function getTokenPriceValues(tokenAddress: string, prices: LatestPriceFragment[]): { price: number } {
    const price = prices.find((prices) => prices.asset === tokenAddress);
    const priceUSD = price ? parseFloat(price.price) : 0;

    return { price: priceUSD };
}

export function useBalancerTokens(): TokenData[] {
    const [activeNetwork] = useActiveNetworkVersion();
    const [t24, t48, tWeek] = useDeltaTimestamps();
    const { blocks, error: blockError } = useBlocksFromTimestamps([t24, t48, tWeek]);
    const [block24, block48, blockWeek] = blocks ?? [];
    const [getTokenData, { data }] = useGetTokenDataLazyQuery();
    const tokenAddresses: Array<string> = [];
    //let coingeckoData = {} as CoingeckoRawData;
    const [coingeckoData, setCoingeckoData] = useState<CoingeckoRawData>();

    useEffect(() => {
        if (block24) {
            getTokenData({
                variables: {
                    block24: { number: parseInt(block24.number) },
                    //block48: { number: parseInt(block48.number) },
                    blockWeek: { number: parseInt(blockWeek.number) },
                },
                context: {
                    uri: activeNetwork.clientUri,
                },
            });
        }
    }, [block24]);


    useEffect(() => {
        //V2: repopulate formatted token data with coingecko data
        if (data && data.tokens.length > 10) {
            data.tokens.forEach(token => {
                tokenAddresses.push(token.address);
            })
        
        const getTokenPrices = async (addresses: string) => {
            const baseURI = 'https://api.coingecko.com/api/v3/simple/token_price/';
            const queryParams = activeNetwork.coingeckoId + '?contract_addresses=' + addresses + '&vs_currencies=usd&include_24hr_change=true';
            try {
                const coingeckoResponse = await fetch(baseURI + queryParams);
                //console.log("response", coingeckoResponse)
                const json = await coingeckoResponse.json();
                console.log("json", json);
                setCoingeckoData(json);
        } catch {
            console.log("Coingecko: token_price API not reachable")
        }
        }
        const tokenAddresses1 = tokenAddresses.slice(1, 150);
        const tokenAddresses2 = tokenAddresses.slice(151, 300);
        //raw batch call in hook:
        let addressesString1 = '';
        tokenAddresses1.forEach(el => {
            addressesString1 = addressesString1 + el + ','})

        getTokenPrices(addressesString1);

        let addressesString2 = '';
        tokenAddresses2.forEach(el => {
            addressesString2 = addressesString2 + el + ','})

        //getTokenPrices(addressesString2);
        }
    }, [data]);

    if (!data) {
        return [];
    }

    const { tokens, prices, tokens24, prices24, tokensWeek, pricesWeek } = data;

    return tokens.map((token) => {
        const tokenData = getTokenValues(token.address, tokens);
        const tokenData24 = getTokenValues(token.address, tokens24);
        //const tokenData48 = getTokenValues(token.address, tokens48);
        const tokenDataWeek = getTokenValues(token.address, tokensWeek);
        const priceData = getTokenPriceValues(token.address, prices);
        //override:
        let priceChange = 0
        if (coingeckoData && coingeckoData[token.address]) {
            priceData.price = coingeckoData[token.address].usd
            priceChange = coingeckoData[token.address].usd_24h_change
        }
        const priceData24 = getTokenPriceValues(token.address, prices24);
        
        //const priceData48 = getTokenPriceValues(token.address, prices48);
        const priceDataWeek = getTokenPriceValues(token.address, pricesWeek);
        const valueUSDCollected = 0;

        return {
            ...token,
            name: token.name || '',
            symbol: token.symbol || '',
            exists: true,
            volumeUSD: tokenData.volume - tokenData24.volume,
            volumeUSDChange: (tokenData.volume - tokenData24.volume) / tokenData24.volume,
            volumeUSDWeek: tokenData.volume - tokenDataWeek.volume,
            txCount: parseFloat(token.totalSwapCount),
            feesUSD: 0,
            tvlToken: tokenData.tvlToken,
            tvlUSD: (token.symbol?.includes('bb-') ? 0 : tokenData.tvl),
            valueUSDCollected: valueUSDCollected,
            tvlUSDChange: (tokenData.tvl - tokenData24.tvl) / tokenData24.tvl,
            priceUSD: priceData.price,
            priceUSDChange: priceChange,
            priceUSDChangeWeek:
                priceData.price && priceDataWeek.price
                    ? ((priceData.price - priceDataWeek.price) / priceDataWeek.price) * 100
                    : 0,
        };
    });
}

export function useBalancerTokenData(address: string): TokenData | null {
    const tokens = useBalancerTokens();
    const token = tokens.find((token) => token.address === address);

    return token || null;
}

export function useBalancerTokenPageData(address: string): {
    tvlData: BalancerChartDataItem[];
    volumeData: BalancerChartDataItem[];
    priceData: BalancerChartDataItem[];
} {
    const [activeNetwork] = useActiveNetworkVersion();
    const { data } = useGetTokenPageDataQuery({
        variables: { address, startTimestamp: activeNetwork.startTimeStamp },
        context: {
            uri: activeNetwork.clientUri,
        },
    });
    const snapshots = data?.tokenSnapshots || [];

    const tvlData = snapshots.map((snapshot) => {
        const value = parseFloat(snapshot.totalBalanceUSD);
        return {
            value: value > 0 ? value : 0,
            time: unixToDate(snapshot.timestamp),
        };
    });

    const volumeData = snapshots.map((snapshot, idx) => {
        const prevValue = idx === 0 ? 0 : parseFloat(snapshots[idx - 1].totalVolumeUSD);
        const value = parseFloat(snapshot.totalVolumeUSD);

        return {
            value: value - prevValue > 0 ? value - prevValue : 0,
            time: unixToDate(snapshot.timestamp),
        };
    });

    const priceData = snapshots.map((snapshot) => {
        return {
            value: parseFloat(snapshot.totalBalanceUSD) / parseFloat(snapshot.totalBalanceNotional),
            time: unixToDate(snapshot.timestamp),
        };
    });

    return {
        tvlData,
        volumeData,
        priceData,
    };
}
