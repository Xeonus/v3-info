import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { PageWrapper } from 'pages/styled';
import useTheme from 'hooks/useTheme';
import { AutoColumn } from 'components/Column';
import { ResponsiveRow, RowBetween, RowFixed } from 'components/Row';
import { getEtherscanLink, shortenAddress } from 'utils';
import { ExternalLink, Type } from 'react-feather';
import { MonoSpace } from 'components/shared';
import { formatAmount, formatDollarAmount } from 'utils/numbers';
import Loader, { LocalLoader } from 'components/Loader';
import LineChart from 'components/LineChart/alt';
import { VolumeWindow } from 'types';
import { TYPE } from 'theme';
import { SmallOptionButton } from 'components/Button';
import { DarkGreyCard, GreyBadge, GreyCard } from 'components/Card';
import { useBalancerTokens } from '../../data/balancer/useTokens';
import { GetAddressTokenBalances } from 'utils/getAddressTokenBalances';
import { useBalancerProtocolData } from 'data/balancer/useProtocolData';
import { useActiveNetworkVersion } from 'state/application/hooks';
import { useTransformedVolumeData } from 'hooks/chart';
import Percent from 'components/Percent';
import { BalancerChartDataItem } from 'data/balancer/balancerTypes';
import { ExternalLink as StyledExternalLink } from '../../theme/components';
import { useHistoricalWalletData } from 'data/covalent/useHistoricalWalletData';
import DebankLogo from '../../assets/svg/debank.svg';
import { EthereumNetworkInfo, SupportedNetwork } from 'constants/networks';
import curateTokenDatas from 'utils/curateTokenDatas';
import { TokenData } from 'data/balancer/balancerTypes';
import { COVALENT_TOKEN_BLACKLIST } from 'data/covalent/tokenBlackList';
import { getTreasuryConfig, TREASURY_ADDRESS_CONFIG } from 'constants/wallets';
import TreasuryTokenPortfolioTable from 'components/tokens/TreasuryTokenPortfolioTable';
import CurrencyLogo from 'components/CurrencyLogo';
import StackedAreaChart from 'components/StackedAreaChart';
import { BalPieChart } from 'components/PieChart/BalPieChart';
import useUserPools from 'data/balancer/useUserPools';
import { PoolDataUser } from 'data/balancer/balancerTypes';
import { useBalancerPools } from 'data/balancer/usePools';
import UserPoolTable from 'components/pools/UserPoolTable';
import { useAddressTransactionData } from 'data/covalent/useAddressTransactionData';
import BarChartStacked from 'components/BarChartStacked';
import getChartColor from 'utils/getChartColor';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import curateOtherInvestmentTokenData from 'utils/curateOtherInvestmentTokenData';
import getCuratedTokenName from 'utils/getCuratedTokenName';
import getCuratedAssetData from 'utils/getCuratedAssetData';
import { getShortPoolName } from "utils/getShortPoolName";
import TreasuryAssetTable from 'components/assets/TreasuryAssetsTable';
import EchartsPieChart from 'components/PieChart/EchartsPieChart';
import { echartsData, Normal, ItemStyle } from 'components/PieChart/EchartsPieChart';



dayjs.extend(relativeTime);

const ChartWrapper = styled.div`
    width: 49%;

    ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`;

const StyledDebankLogo = styled.img`
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentLayout = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-gap: 1em;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

const ContentLayoutRight = styled.div`
    display: grid;
    grid-template-columns: 1fr 400px ;
    grid-gap: 1em;

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

const ContentLayoutRightLarge = styled.div`
    display: grid;
    grid-template-columns: 1fr 500px ;
    grid-gap: 1em;

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

//Todo: Export interface
interface BalancerStackedDateChartItem {
    value: number;
    time: Date;
}

export default function Treasury() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const theme = useTheme();


    //Timestamps for calcuations
    const daysSinceFirstIncomeTx = dayjs().diff(dayjs('2022-03-26'), 'days');
    const firstDayOfMonth = dayjs().startOf("month").toDate();
    //dayjs January == 0!
    const firstDayOfPreviousMonth = dayjs(dayjs().year().toString() + '-' + String(dayjs().month()) + '-' + '1').startOf("month").toDate();
    const avgDays = 30;
    const startDate = dayjs().subtract(avgDays, 'day').toDate();



    const [activeNetwork] = useActiveNetworkVersion();
    const bbaUsdAddress = '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2';
    let usdcAddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
    let balAddress = '0xba100000625a3754423978a60c9317c58a424e3d';
    let sweepLimit = 0;
    if (activeNetwork.id === SupportedNetwork.ETHEREUM) {
        sweepLimit = 10000;
    } else if (activeNetwork.id == SupportedNetwork.ARBITRUM) {
        balAddress = '0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8';
        usdcAddress = '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8';
        sweepLimit = 5000;
    } else if (activeNetwork.id == SupportedNetwork.POLYGON) {
        balAddress = '0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3';
        usdcAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174';
        sweepLimit = 5000;
    }
    const TREASURY_CONFIG = getTreasuryConfig(activeNetwork.chainId);
    const protocolData = useBalancerProtocolData();
    const poolData = useBalancerPools();
    const formattedTokens = useBalancerTokens();
    //Add USDC if it is not in the token list! -> TODO: Refactor balancer subgraph token list dependecy!!
    //const usdToken = {} as TokenData;
    //usdToken.address = usdcAddress;
    //usdToken.symbol = 'USDC';
    //usdToken.name = 'USDC';
    //formattedTokens.push(usdToken);
    const userPools = useUserPools(TREASURY_CONFIG.treasury);
    const walletTokenData = GetAddressTokenBalances(TREASURY_CONFIG.treasury);
    const historicalCollectorData = useHistoricalWalletData(TREASURY_CONFIG.treasury, [bbaUsdAddress]);
    const userTxs = useAddressTransactionData(TREASURY_CONFIG.treasury, TREASURY_CONFIG.copper, usdcAddress);
    const debankLink = 'https://debank.com/profile/' + TREASURY_CONFIG.treasury;
    const [totalView, setTotalView] = useState<boolean | undefined>();
    const [feesHover, setFeesHover] = useState<number | undefined>();
    const [liquidityHover, setLiquidityHover] = useState<number | undefined>();
    const [leftLabel, setLeftLabel] = useState<string | undefined>();


    useEffect(() => {
        setFeesHover(undefined);
        setLiquidityHover(undefined);
        setTotalView(true);
    }, [activeNetwork]);

    useEffect(() => {
        if (!feesHover && protocolData.fees24) {
            setFeesHover(protocolData.fees24 * 0.5);
        }
    }, [feesHover, protocolData]);

    useEffect(() => {
        if (liquidityHover === undefined && historicalCollectorData) {
            setLiquidityHover(historicalCollectorData.tvl)
        }
    }, [liquidityHover, protocolData])

    //Balancer Pool position data
    //TODO: encapsulate in own function after view is done
    //TODO: introduce constant for protocol wide fee cut!
    const poolDatasUser: PoolDataUser[] = [];
    if (poolData.length > 0) {
        userPools.forEach((pool) => {
            const poolDataUser = {} as PoolDataUser;
            const userPool = poolData.find((x) => x.id == pool.poolId)
            //Populate data
            if (userPool) {
                poolDataUser.address = userPool?.address;
                poolDataUser.feeTier = userPool.feeTier;
                poolDataUser.id = userPool.id;
                poolDataUser.name = userPool.name;
                poolDataUser.swapFee = userPool.swapFee;
                poolDataUser.symbol = userPool.symbol;
                poolDataUser.tokens = userPool.tokens;
                poolDataUser.userRelativeTVL = pool.relativeShare;
                poolDataUser.userTVL = userPool?.tvlUSD * pool.relativeShare;
                poolDataUser.dailyFees = userPool.feesUSD * pool.relativeShare * 0.5;
                poolDataUser.tvlUSD = userPool.tvlUSD;
                poolDataUser.volumeUSD = userPool.volumeUSD;
            }
            poolDatasUser.push(poolDataUser);
        })
    }

    //Monthly metrics
    let monthlyHigh = 0;
    let monthlyLow = 0;
    let dailyChange = 0;
    if (historicalCollectorData.totalValueData) {
        historicalCollectorData?.totalValueData.forEach((entry) => {
            if (monthlyHigh < entry.value) {
                monthlyHigh = entry.value;
            }
            if (monthlyLow === 0 || monthlyLow > entry.value) {
                monthlyLow = entry.value;
            }
        });
    }
    if (historicalCollectorData?.totalValueData.length) {
        dailyChange = historicalCollectorData.totalValueData[historicalCollectorData.totalValueData.length - 1].value - historicalCollectorData.totalValueData[historicalCollectorData.totalValueData.length - 2].value;
    }

    //Get curated token dataset to calcuate BAL and bb-a-USD distribution values
    const tokenSet: string[] = [];
    let curatedTokenDatas: TokenData[] = [];
    let curatedInvestmentTokenDatas : TokenData[] = [];
    if (formattedTokens && walletTokenData) {
        curatedTokenDatas = curateTokenDatas(formattedTokens, walletTokenData, 10000, true);
        curatedTokenDatas = curatedTokenDatas.filter((x) => !!x && !COVALENT_TOKEN_BLACKLIST.includes(x.address) && !x.symbol.includes('bb-'));
        //Other investments /static
        curatedInvestmentTokenDatas = curateOtherInvestmentTokenData(formattedTokens, walletTokenData, activeNetwork.chainId);
    }

    //Get curated token dataset to calcuate BAL and bb-a-USD distribution values
    let totalAmount = 0;
    let curatedProjectionData: TokenData[] = [];
    if (formattedTokens && walletTokenData) {
        curatedProjectionData = curateTokenDatas(formattedTokens, walletTokenData, sweepLimit, true);
        curatedProjectionData = curatedProjectionData.filter((x) => !!x && !COVALENT_TOKEN_BLACKLIST.includes(x.address));
        curatedProjectionData.forEach((item) => {
            const token = walletTokenData.data.items.find(x => x.contract_address == item.address)
            if (token && token.contract_ticker_symbol && !token.contract_ticker_symbol.includes('bb-')) {
                tokenSet.push(token?.contract_ticker_symbol)
            }
            totalAmount += item.valueUSDCollected;
        });
    }
    const balAssets = curatedProjectionData.find((x) => x.address == balAddress);

    //TODO: fix edge case redundancy code here ( this happens right after a sweep):
    let isEmptySet = false;
    let isEmptyTaxations = false;
    let isEmptyTokenSet = false;
    if (formattedTokens && walletTokenData) {
        if (formattedTokens.length > 0 && curateTokenDatas(formattedTokens, walletTokenData, sweepLimit, true).length == 0) {
            isEmptySet = true;
        }
    }
    if (userTxs) {
        if (userTxs.cumulativeTokenDatas.length === 0 && userTxs.tvl && userTxs.tvl > 0) {
            isEmptyTaxations = true;
        }
    }
    if (curatedTokenDatas && walletTokenData) {
        if (curatedTokenDatas.length === 0 && walletTokenData.data.items.length > 0) {
            isEmptyTokenSet = true;
        }
    }
    const echartsDataArray: echartsData[] = [];
    const echartsTokenArray: echartsData[] = [];
    //Create pie chart
    const pieChartData: any[] = [];
    //Token holdings
    const rawTokenData = {... historicalCollectorData.tokenDatas[historicalCollectorData.tokenDatas.length - 1]};
    if (rawTokenData && rawTokenData.time) {
      delete rawTokenData['time'];
    }
    for (const key in rawTokenData) {
        if (rawTokenData[key] > 1 ) {
            const entry: any = {};
            entry.name = key;
            entry.value = rawTokenData[key];
            entry.fill = getChartColor(key, 1);
            pieChartData.push(entry);
            const echartsData = {} as echartsData;
            //echartsData.itemStyle = {} as ItemStyle;
            //echartsData.itemStyle.normal = {} as Normal;
            //echartsData.itemStyle.normal.color = entry.fill;
            echartsData.name = key;
            echartsData.value = rawTokenData[key];
            echartsDataArray.push(echartsData);
            echartsTokenArray.push(echartsData);
        }
    }

    //console.log("echartsDataArray", echartsDataArray);


    //Alternative pie chart data
    const cumulativePieChartData: any[] = [];
    cumulativePieChartData.push(...pieChartData);
        //Liquidity positions
        poolDatasUser.forEach((bpt) => {
            const entry: any = {};
            let shortName = getShortPoolName(bpt);
        if (shortName.includes('bb-')) {
            shortName = 'Stab3l Boosted'
        }
            entry.name = shortName;
            entry.value = bpt.userTVL;
            entry.fill = getChartColor(bpt.symbol, Math.round(Math.random() * 10));
            cumulativePieChartData.push(entry);
            const echartsData = {} as echartsData;
            //echartsData.itemStyle = {} as ItemStyle;
            //echartsData.itemStyle.normal = {} as Normal;
            //echartsData.itemStyle.normal.color = entry.fill;
            echartsData.name = shortName;
            echartsData.value = bpt.userTVL;
            echartsDataArray.push(echartsData);
        });
        //Other positions
        curatedInvestmentTokenDatas.forEach((token) => {
            const entry: any = {};
            entry.name = getCuratedTokenName(token);
            entry.value = token.valueUSDCollected;
            entry.fill = getChartColor(token.symbol, 1);
            cumulativePieChartData.push(entry);
            const echartsData = {} as echartsData;
            //echartsData.itemStyle = {} as ItemStyle;
            //echartsData.itemStyle.normal = {} as Normal;
            //echartsData.itemStyle.normal.color = entry.fill;
            echartsData.name = entry.name;
            echartsData.value = token.valueUSDCollected;
            echartsDataArray.push(echartsData);
        });

    //console.log("cumulativePieChart", cumulativePieChartData);


    //---REVENUE STREAM estimates
    let dailyRevenue = 0;
    let dailyCopperIncome = 0;
    let dailyFeeIncome = 0
    let totalIncome = 0
    let netIncomeRunningMonth = 0;
    let percentageChangePrevious = 0;
    if (userTxs.cumulativeTokenDatas.length > 0) {
        //Current month
        const startMonthEntry = userTxs.cumulativeTokenDatas.find((x) => dayjs(x.time).diff(firstDayOfMonth, 'day') == 0);
        const rangeEntry = userTxs.cumulativeTokenDatas.find((x) => dayjs(x.time).isAfter(firstDayOfMonth));
        //Previous month
        const previousStartMonthEntry = userTxs.cumulativeTokenDatas.find((x) => dayjs(x.time).diff(firstDayOfPreviousMonth, 'day') == 0);
        const previousRangeEntry = userTxs.cumulativeTokenDatas.find((x) => dayjs(x.time).isAfter(firstDayOfPreviousMonth));

        dailyCopperIncome = (userTxs.cumulativeTokenDatas[userTxs.cumulativeTokenDatas.length - 1].copper) / daysSinceFirstIncomeTx;
        dailyFeeIncome = (userTxs.cumulativeTokenDatas[userTxs.cumulativeTokenDatas.length - 1].feeCollector) / daysSinceFirstIncomeTx;
        dailyRevenue = dailyCopperIncome + dailyFeeIncome;
        totalIncome = (userTxs.cumulativeTokenDatas[userTxs.cumulativeTokenDatas.length - 1].copper) + (userTxs.cumulativeTokenDatas[userTxs.cumulativeTokenDatas.length - 1].feeCollector);
        //Income for the running month
        if (startMonthEntry) {
            netIncomeRunningMonth = totalIncome - startMonthEntry.copper - startMonthEntry.feeCollector;
        } else if (rangeEntry) {
            netIncomeRunningMonth = totalIncome - rangeEntry.copper - rangeEntry.feeCollector;
        }
        if (previousStartMonthEntry) {
            percentageChangePrevious = 100 / ((startMonthEntry.copper + startMonthEntry.feeCollector) - (previousStartMonthEntry.copper + previousStartMonthEntry.feeCollector)) * netIncomeRunningMonth - 100;
        } else if (previousRangeEntry) {
            percentageChangePrevious = 100 / ((rangeEntry.copper + rangeEntry.feeCollector) - (previousRangeEntry.copper + previousRangeEntry.feeCollector)) * netIncomeRunningMonth - 100;
        }
    }

    //Rolling window average
    let avgDailyRevenue = 0;
    let avgDailyCopperIncome = 0;
    let avgDailyFeeIncome = 0
    if (userTxs.cumulativeTokenDatas.length > 0) {
        const startWindowEntry = userTxs.cumulativeTokenDatas.find((x) => dayjs(x.time).diff(startDate, 'day') == 0);
        const startWindowRangeEntry = userTxs.cumulativeTokenDatas.find((x) => dayjs(x.time).isAfter(startDate));
        if (startWindowEntry) {
            avgDailyCopperIncome = (userTxs.cumulativeTokenDatas[userTxs.cumulativeTokenDatas.length - 1].copper - startWindowEntry.copper) / avgDays;
            avgDailyFeeIncome = (userTxs.cumulativeTokenDatas[userTxs.cumulativeTokenDatas.length - 1].feeCollector - startWindowEntry.feeCollector) / avgDays;
            avgDailyRevenue = dailyCopperIncome + dailyFeeIncome;

        } else if (startWindowRangeEntry)
            avgDailyCopperIncome = (userTxs.cumulativeTokenDatas[userTxs.cumulativeTokenDatas.length - 1].copper - startWindowRangeEntry.copper) / avgDays;
        avgDailyFeeIncome = (userTxs.cumulativeTokenDatas[userTxs.cumulativeTokenDatas.length - 1].feeCollector - startWindowRangeEntry.feeCollector) / avgDays;
        avgDailyRevenue = avgDailyCopperIncome + avgDailyFeeIncome;
    }


    //Curated assets aggregated
    //if (curatedTokenDatas && curatedInvestmentTokenDatas && poolDatasUser) 
    const {aggregatedAssetDatas, netWorth} = getCuratedAssetData(curatedTokenDatas, curatedInvestmentTokenDatas, poolDatasUser);

    /*     if (activeNetwork.id !== SupportedNetwork.ETHEREUM) {
            return (
                <AutoColumn gap="lg">
                    <TYPE.largeHeader>Please switch back to Mainnet!</TYPE.largeHeader>
                </AutoColumn>
            );
        } */
    return (
        <PageWrapper>
            <AutoColumn gap="lg">
                <TYPE.largeHeader>Balancer DAO Treasury</TYPE.largeHeader>
                <TYPE.white> Revenue streams </TYPE.white>
                {avgDailyRevenue > 0 && userTxs.cumulativeTokenDatas.length > 0 ?
                    <ContentLayout>
                        {avgDailyRevenue > 0 ?
                            <DarkGreyCard>
                                <AutoColumn gap="lg">
                                    <AutoColumn gap="4px">
                                        <TYPE.main fontWeight={400}>Daily Revenue (30d average)</TYPE.main>
                                        <TYPE.label fontSize="24px">{formatDollarAmount(avgDailyRevenue)}</TYPE.label>
                                    </AutoColumn>
                                    <GreyCard padding="16px">
                                        <AutoColumn gap="md">
                                            <TYPE.main>Daily Copper Revenue</TYPE.main>
                                            <RowBetween key={usdcAddress}>
                                                <RowFixed>
                                                    <CurrencyLogo address={usdcAddress} size={'20px'} />
                                                    <TYPE.label fontSize="14px" ml="8px">
                                                        {'USDC'}
                                                    </TYPE.label>
                                                </RowFixed>
                                                <TYPE.label fontSize="14px">{formatDollarAmount(avgDailyCopperIncome)}</TYPE.label>
                                            </RowBetween>
                                        </AutoColumn>
                                    </GreyCard>
                                    <GreyCard padding="16px">
                                        <AutoColumn gap="md">
                                            <TYPE.main>Daily Protocol Fee Revenue</TYPE.main>
                                            <RowBetween key={usdcAddress}>
                                                <RowFixed>
                                                    <CurrencyLogo address={usdcAddress} size={'20px'} />
                                                    <TYPE.label fontSize="14px" ml="8px">
                                                        {'USDC'}
                                                    </TYPE.label>
                                                </RowFixed>
                                                <TYPE.label fontSize="14px">{formatDollarAmount(avgDailyFeeIncome)}</TYPE.label>
                                            </RowBetween>
                                        </AutoColumn>

                                    </GreyCard>
                                    <AutoColumn gap="4px">
                                        <TYPE.main fontWeight={400}>Net Income running Month</TYPE.main>
                                        <TYPE.label fontSize="24px">{formatDollarAmount(Math.abs(netIncomeRunningMonth))}</TYPE.label>
                                        <Percent value={percentageChangePrevious} />
                                    </AutoColumn>
                                </AutoColumn>
                            </DarkGreyCard>
                            :
                            <AutoColumn gap="lg" justify='flex-start'>
                                {!isEmptySet ?
                                    <DarkGreyCard>
                                        <TYPE.main fontSize="18px">Fetching distribution estimates...</TYPE.main>
                                        <LocalLoader fill={false} />
                                    </DarkGreyCard> : (
                                        <DarkGreyCard>
                                            <TYPE.main>No fees accumulated</TYPE.main>
                                        </DarkGreyCard>)}
                            </ AutoColumn>}
                        {userTxs.cumulativeTokenDatas.length > 0 ?
                            <StackedAreaChart
                                data={userTxs.cumulativeTokenDatas}
                                tokenSet={['copper', 'feeCollector']}
                                labelSet={['Copper', 'Protocol fees']}
                                height={220}
                                minHeight={450}
                                color={activeNetwork.primaryColor}
                                value={liquidityHover}
                                label={leftLabel}
                                topLeft={
                                    <AutoColumn gap="4px">
                                        <TYPE.mediumHeader fontSize="16px">Cumulative Gross Income by Source</TYPE.mediumHeader>
                                    </AutoColumn>
                                }
                            /> :
                            <AutoColumn gap="lg" justify='flex-start'>
                                <DarkGreyCard>
                                    <TYPE.main fontSize="18px">Fetching treasury wallet taxations...</TYPE.main>
                                    <LocalLoader fill={false} />
                                </DarkGreyCard>
                            </ AutoColumn>}
                    </ContentLayout> : (!isEmptyTaxations ? <Loader /> : (<TYPE.gray>No income taxations found</TYPE.gray>))}
                <TYPE.white> Treasury assets </TYPE.white>
                <ContentLayoutRight>
                <TreasuryAssetTable assetDatas={aggregatedAssetDatas}/>
                <DarkGreyCard>
                <AutoColumn gap="4px">
                    <TYPE.main fontWeight={400}>Total Asset Net Worth</TYPE.main>
                    <TYPE.label fontSize="24px">{formatDollarAmount(netWorth)}</TYPE.label>
                </AutoColumn>
                {tokenSet.length > 0 && cumulativePieChartData && historicalCollectorData?.tvl && echartsDataArray.length > 0 ?
                        <EchartsPieChart data={echartsDataArray}></EchartsPieChart> : <AutoColumn gap="lg" justify='flex-start'>
                            <DarkGreyCard>
                                <TYPE.main fontSize="18px">Calculating asset distribution...</TYPE.main>
                                <LocalLoader fill={false} />
                            </DarkGreyCard> </ AutoColumn>}
                </DarkGreyCard>
                
                </ContentLayoutRight>
                <TYPE.white> Tokens in treasury wallet </TYPE.white>
                <ContentLayout>
                    {historicalCollectorData?.tvl ?
                        <DarkGreyCard>
                            <AutoColumn gap="lg">
                                {balAssets && (activeNetwork.chainId === EthereumNetworkInfo.chainId) ? 
                                <GreyCard padding="8x">
                                    <AutoColumn gap="4px">
                                        <TYPE.main>BAL reserves</TYPE.main>
                                        <RowBetween key={'balReserves'}>
                                            <RowFixed>
                                                <CurrencyLogo address={balAddress} size={'20px'} />
                                                <TYPE.label fontSize="14px" ml="8px">
                                                    {'BAL'}
                                                </TYPE.label>
                                            </RowFixed>
                                            <TYPE.label fontSize="14px">{formatAmount(balAssets.valueUSDCollected / balAssets.priceUSD)}</TYPE.label>
                                        </RowBetween>
                                    </AutoColumn>
                                </GreyCard> : 
                                null }
                                <AutoColumn gap="4px">
                                    <TYPE.main>Treasury wallet trends</TYPE.main>
                                </AutoColumn>
                                <GreyCard padding="8x">
                                    <AutoColumn gap="lg">
                                        <AutoColumn gap="4px">
                                            <TYPE.main fontWeight={400}>30d High</TYPE.main>
                                            <TYPE.label fontSize="24px">{formatDollarAmount(monthlyHigh)}</TYPE.label>
                                            <Percent value={100 / monthlyHigh * historicalCollectorData?.tvl - 100} />
                                        </AutoColumn>
                                        <AutoColumn gap="4px">
                                            <TYPE.main fontWeight={400}>30d Low</TYPE.main>
                                            <TYPE.label fontSize="24px">{formatDollarAmount(monthlyLow)}</TYPE.label>
                                            <Percent value={100 / monthlyLow * historicalCollectorData?.tvl - 100} />
                                        </AutoColumn>
                                        <AutoColumn gap="4px">
                                            <TYPE.main fontWeight={400}>24h Change</TYPE.main>
                                            <TYPE.label fontSize="24px">{formatDollarAmount(Math.abs(dailyChange))}</TYPE.label>
                                            <Percent value={100 / historicalCollectorData?.tvl * dailyChange} />
                                        </AutoColumn>
                                    </AutoColumn>
                                </GreyCard>
                            </AutoColumn>
                        </DarkGreyCard>
                        : <AutoColumn gap="lg" justify='flex-start'>
                            <DarkGreyCard>
                                <TYPE.main fontSize="18px">Fetching token data...</TYPE.main>
                                <LocalLoader fill={false} />
                            </DarkGreyCard>
                        </ AutoColumn>}
                    {totalView ?
                        totalAmount > 0 && historicalCollectorData?.tvl ?
                            <LineChart
                                data={historicalCollectorData?.totalValueData}
                                height={220}
                                minHeight={500}
                                color={activeNetwork.primaryColor}
                                value={liquidityHover}
                                label={leftLabel}
                                setValue={setLiquidityHover}
                                setLabel={setLeftLabel}
                                topLeft={
                                    <AutoColumn gap="4px">
                                        <TYPE.mediumHeader fontSize="16px">Historical Token Net Worth in Treasury Wallet</TYPE.mediumHeader>
                                        <TYPE.largeHeader fontSize="32px">
                                            <MonoSpace>{formatDollarAmount(liquidityHover, 2, true)} </MonoSpace>
                                        </TYPE.largeHeader>
                                        <TYPE.main fontSize="12px" height="14px">
                                            {leftLabel ? <MonoSpace>{leftLabel} (UTC)</MonoSpace> : null}
                                        </TYPE.main>
                                    </AutoColumn>
                                }
                                topRight={
                                    <RowFixed align="center" justify="center" align-items="center">
                                        <SmallOptionButton
                                            active={totalView === true}
                                            onClick={() => setTotalView(false)}
                                        >
                                            Show token breakdown
                                        </SmallOptionButton>
                                        {debankLink && (
                                            <StyledExternalLink
                                                href={debankLink}
                                                style={{ marginLeft: '12px' }}
                                                onClickCapture={() => {
                                                    ReactGA.event({
                                                        category: 'Debank',
                                                        action: 'Debank portfolio page click',
                                                    });
                                                }}
                                            >
                                                <StyledDebankLogo src={DebankLogo} />
                                            </StyledExternalLink>
                                        )}
                                        <StyledExternalLink href={getEtherscanLink(1, TREASURY_CONFIG.treasury, 'address', activeNetwork)}>
                                            <ExternalLink
                                                stroke={theme.text2}
                                                size={'17px'}
                                                style={{ marginLeft: '12px' }}
                                            />
                                        </StyledExternalLink>
                                    </RowFixed>
                                }
                            /> : <AutoColumn gap="lg" justify='flex-start'>
                                {!isEmptySet ?
                                    <DarkGreyCard>
                                        <TYPE.main fontSize="18px">Fetching historical data...</TYPE.main>
                                        <LocalLoader fill={false} />
                                    </DarkGreyCard> : (
                                        <DarkGreyCard>
                                            <TYPE.main>No historical data available</TYPE.main>
                                        </DarkGreyCard>)}
                            </ AutoColumn> : (
                            totalAmount > 0 && historicalCollectorData?.tvl ?
                                <StackedAreaChart
                                    data={historicalCollectorData?.tokenDatas}
                                    height={220}
                                    tokenSet={tokenSet}
                                    minHeight={500}
                                    color={activeNetwork.primaryColor}
                                    value={liquidityHover}
                                    label={leftLabel}
                                    topLeft={
                                        <AutoColumn gap="4px">
                                            <TYPE.mediumHeader fontSize="16px">Historical Treasury Wallet Net Worth</TYPE.mediumHeader>
                                        </AutoColumn>
                                    }
                                    topRight={
                                        <RowFixed align="center" justify="center" align-items="center">
                                            <SmallOptionButton
                                                active={totalView === false}
                                                onClick={() => setTotalView(true)}
                                            >
                                                Show totals
                                            </SmallOptionButton>
                                            {debankLink && (
                                                <StyledExternalLink
                                                    href={debankLink}
                                                    style={{ marginLeft: '12px' }}
                                                    onClickCapture={() => {
                                                        ReactGA.event({
                                                            category: 'Debank',
                                                            action: 'Debank portfolio page click',
                                                        });
                                                    }}
                                                >
                                                    <StyledDebankLogo src={DebankLogo} />
                                                </StyledExternalLink>
                                            )}
                                            <StyledExternalLink href={getEtherscanLink(1, TREASURY_CONFIG.treasury, 'address', activeNetwork)}>
                                                <ExternalLink
                                                    stroke={theme.text2}
                                                    size={'17px'}
                                                    style={{ marginLeft: '12px' }}
                                                />
                                            </StyledExternalLink>
                                        </RowFixed>
                                    }
                                /> : <AutoColumn gap="lg" justify='flex-start'>
                                    {!isEmptySet ?
                                        <DarkGreyCard>
                                            <TYPE.main fontSize="18px">Fetching token data...</TYPE.main>
                                            <LocalLoader fill={false} />
                                        </DarkGreyCard> : (
                                            <DarkGreyCard>
                                                <TYPE.main>No token positions could be loaded</TYPE.main>
                                            </DarkGreyCard>)}
                                </ AutoColumn>)}
                </ContentLayout>
                <ContentLayoutRight>
                <TreasuryTokenPortfolioTable tokenDatas={curatedTokenDatas} />
                <DarkGreyCard>
                <AutoColumn gap="4px">
                    <TYPE.main fontWeight={400}>Token distribution</TYPE.main>
                </AutoColumn>
                    {tokenSet.length > 0 && pieChartData && historicalCollectorData?.tvl ?
                        <EchartsPieChart 
                            data={echartsTokenArray}></EchartsPieChart> : <AutoColumn gap="lg" justify='flex-start'>
                            <DarkGreyCard>
                                <TYPE.main fontSize="18px">Fetching token distribution...</TYPE.main>
                                <LocalLoader fill={false} />
                            </DarkGreyCard> </ AutoColumn>}
                </DarkGreyCard>
                </ContentLayoutRight>
                <TYPE.white> Balancer Protocol Investments </TYPE.white>
                <UserPoolTable poolDatas={poolDatasUser} />
                <TYPE.white> Other/External Protocol Investments </TYPE.white>
                {activeNetwork.chainId === EthereumNetworkInfo.chainId ?
                <TreasuryTokenPortfolioTable tokenDatas={curatedInvestmentTokenDatas} /> : <TYPE.gray>None</TYPE.gray> }
            </AutoColumn>
        </PageWrapper>
    );
}