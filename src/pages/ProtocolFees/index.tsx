import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { PageWrapper } from 'pages/styled';
import useTheme from 'hooks/useTheme';
import { AutoColumn } from 'components/Column';
import { ResponsiveRow, RowBetween, RowFixed } from 'components/Row';
import { getEtherscanLink, shortenAddress } from 'utils';
import { ExternalLink } from 'react-feather';
import { MonoSpace } from 'components/shared';
import { formatDollarAmount } from 'utils/numbers';
import Loader, { LocalLoader } from 'components/Loader';
import LineChart from 'components/LineChart/alt';
import Percent from 'components/Percent';
import { VolumeWindow } from 'types';
import { TYPE } from 'theme';
import { SmallOptionButton } from 'components/Button';
import ProtocolFeeTokenTable from 'components/tokens/ProtocolFeeTokenTable';
import PoolFeeTable from 'components/pools/PoolFeeTable';
import { DarkGreyCard, GreyBadge, GreyCard } from 'components/Card';
import { useBalancerTokens } from '../../data/balancer/useTokens';
import { GetAddressTokenBalances } from 'utils/getAddressTokenBalances';
import { useBalancerProtocolData } from 'data/balancer/useProtocolData';
import { useBalancerPools } from 'data/balancer/usePools';
import { useActiveNetworkVersion } from 'state/application/hooks';
import { useTransformedVolumeData } from 'hooks/chart';
import BarChart from 'components/BarChart/alt';
import { BalancerChartDataItem } from 'data/balancer/balancerTypes';
import { ExternalLink as StyledExternalLink } from '../../theme/components';
import { useHistoricalWalletData } from 'data/covalent/useHistoricalWalletData';
import DebankLogo from '../../assets/svg/debank.svg';
import { SupportedNetwork } from 'constants/networks';
import CurrencyLogo from 'components/CurrencyLogo';
import curateTokenDatas from 'utils/curateTokenDatas';
import { TokenData } from 'data/balancer/balancerTypes';
import { COVALENT_TOKEN_BLACKLIST } from 'data/covalent/tokenBlackList';
import { FEE_COLLECTOR_ADDRESS } from 'constants/wallets';
import StackedAreaChart from 'components/StackedAreaChart';
import { DEFAULT_FEE_SYMBOLS } from 'constants/index';
import { AreaChart } from 'recharts';


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

//TODO: create utils function to get timestamps
//Poolsnapshots are taken OO:OO UTC. Generate previous snapshot date and previous Tue. Used to calculate weekly sweep fee generators
const target = 1 // Wednesday
const prevDate = new Date();
prevDate.setDate(prevDate.getDate() - (prevDate.getDay() == target ? 7 : (prevDate.getDay() + (7 - target)) % 7));
prevDate.setUTCHours(0, 0, 0, 0);
const today = new Date();
today.setUTCHours(0, 0, 0, 0);

export default function ProtocolFees() {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const theme = useTheme();
    const [activeNetwork] = useActiveNetworkVersion();
    const protocolData = useBalancerProtocolData();
    const formattedTokens = useBalancerTokens();
    const walletTokenData = GetAddressTokenBalances(FEE_COLLECTOR_ADDRESS);
    //const historicalCollectorData = useHistoricalWalletData(FEE_COLLECTOR_ADDRESS);
    const poolData = useBalancerPools();
    const debankLink = 'https://debank.com/profile/0xce88686553686da562ce7cea497ce749da109f9f';
    let balAddress = '0xba100000625a3754423978a60c9317c58a424e3d';
    let usdcAddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
    const bbaUsdAddress = '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2';
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

    const [feesHover, setFeesHover] = useState<number | undefined>();
    const [feesLabel, setFeesLabel] = useState<string | undefined>();
    const [liquidityHover, setLiquidityHover] = useState<number | undefined>();
    const [leftLabel, setLeftLabel] = useState<string | undefined>();
    const [totalView, setTotalView] = useState<boolean | undefined>();

    useEffect(() => {
        setFeesHover(undefined);
        setLiquidityHover(undefined);
        setTotalView(false);
    }, [activeNetwork]);

    useEffect(() => {
        if (!feesHover && protocolData.fees24) {
            setFeesHover(protocolData.fees24 * 0.5);
        }
    }, [feesHover, protocolData]);

    // useEffect(() => {
    //     if (liquidityHover === undefined && historicalCollectorData) {
    //         setLiquidityHover(historicalCollectorData.tvl)
    //     }
    // }, [liquidityHover, protocolData])


    function adjustFees(data: BalancerChartDataItem[] | undefined) {
        const newData: BalancerChartDataItem[] = [];
        if (data) {
            data.forEach((entry) => {
                const date = new Date(entry.time);
                if (date > new Date('2022-01-03')) {
                    const newEntry = {} as BalancerChartDataItem;
                    newEntry.time = entry.time;
                    newEntry.value = entry.value * 0.5;
                    newData.push(newEntry);
                }
            })

        }
        return newData;
    }

    const tokenSet = DEFAULT_FEE_SYMBOLS;
    const [volumeWindow, setVolumeWindow] = useState(VolumeWindow.daily);
    const weeklyVolumeData = useTransformedVolumeData(adjustFees(protocolData?.feeData), 'week');
    const monthlyVolumeData = useTransformedVolumeData(adjustFees(protocolData?.feeData), 'month');


    //Get curated token dataset to calcuate BAL and bb-a-USD distribution values
    let balAmount = 0;
    let bbaUsdAmount = 0;
    let totalAmount = 0;
    let curatedTokenDatas: TokenData[] = [];
    if (formattedTokens && walletTokenData?.error === false) {
        curatedTokenDatas = curateTokenDatas(formattedTokens, walletTokenData, sweepLimit, true);
        curatedTokenDatas = curatedTokenDatas.filter((x) => !!x && !COVALENT_TOKEN_BLACKLIST.includes(x.address));
        curatedTokenDatas.forEach((item) => {
            const token = walletTokenData.data.items.find(x => x.contract_address == item.address)
            if (token && token.contract_ticker_symbol && !tokenSet.includes(token.contract_ticker_symbol)) {
                tokenSet.push(token?.contract_ticker_symbol)
            }
            if (item.address === balAddress) {
                balAmount = item.valueUSDCollected;
            } else {
                bbaUsdAmount += item.valueUSDCollected;
            }
            totalAmount += item.valueUSDCollected;
        });
    }

    // let dailyChange = 0;
    // if (historicalCollectorData?.totalValueData.length) {
    //     dailyChange = historicalCollectorData.totalValueData[historicalCollectorData.totalValueData.length - 1].value - historicalCollectorData.totalValueData[historicalCollectorData.totalValueData.length - 2].value;
    // }

    //TODO: fix edge case redundancy code here ( this happens right after a sweep):
    let isEmptySet = false;
    if (formattedTokens && walletTokenData?.error === false) {
        //Temp fix for blacklisted tokens!
        const curatedTokens = curatedTokenDatas.filter((x) => !!x && !COVALENT_TOKEN_BLACKLIST.includes(x.address));
        if (formattedTokens.length > 0 && curateTokenDatas(formattedTokens, walletTokenData, sweepLimit, true).filter((x) => !!x && !COVALENT_TOKEN_BLACKLIST.includes(x.address)).length == 0) {
            isEmptySet = true;
        }
    }

    return (
        <PageWrapper>
            <AutoColumn gap="lg">
                <TYPE.largeHeader>Protocol Fee Metrics </TYPE.largeHeader>
                {protocolData?.feeData.length > 0 ?
                    <ResponsiveRow>
                        <BarChart
                            height={220}
                            minHeight={332}
                            data={
                                volumeWindow === VolumeWindow.monthly
                                    ? monthlyVolumeData
                                    : volumeWindow === VolumeWindow.weekly
                                        ? weeklyVolumeData
                                        : adjustFees(protocolData?.feeData)

                            }
                            color={activeNetwork.primaryColor}
                            setValue={setFeesHover}
                            setLabel={setFeesLabel}
                            value={feesHover}
                            label={feesLabel}
                            activeWindow={volumeWindow}
                            topRight={
                                <RowFixed style={{ marginLeft: '-40px', marginTop: '8px' }}>
                                    <SmallOptionButton
                                        active={volumeWindow === VolumeWindow.daily}
                                        onClick={() => setVolumeWindow(VolumeWindow.daily)}
                                    >
                                        D
                                    </SmallOptionButton>
                                    <SmallOptionButton
                                        active={volumeWindow === VolumeWindow.weekly}
                                        style={{ marginLeft: '8px' }}
                                        onClick={() => setVolumeWindow(VolumeWindow.weekly)}
                                    >
                                        W
                                    </SmallOptionButton>
                                    <SmallOptionButton
                                        active={volumeWindow === VolumeWindow.monthly}
                                        style={{ marginLeft: '8px' }}
                                        onClick={() => setVolumeWindow(VolumeWindow.monthly)}
                                    >
                                        M
                                    </SmallOptionButton>
                                </RowFixed>
                            }
                            topLeft={
                                <AutoColumn gap="4px">
                                    <TYPE.mediumHeader fontSize="16px">Collected fees</TYPE.mediumHeader>
                                    <TYPE.largeHeader fontSize="32px">
                                        <MonoSpace> {formatDollarAmount(feesHover, 2)}</MonoSpace>
                                    </TYPE.largeHeader>
                                    <TYPE.main fontSize="12px" height="14px">
                                        {feesLabel ? <MonoSpace>{feesLabel} (UTC)</MonoSpace> : null}
                                    </TYPE.main>
                                </AutoColumn>
                            }
                        />
                    </ResponsiveRow> : <Loader />}
                {/* <ContentLayout>
                    {totalAmount > 0 && historicalCollectorData?.tvl ?
                        <DarkGreyCard>
                            <AutoColumn gap="lg">
                                <AutoColumn gap="4px">
                                    <TYPE.main fontWeight={400}>Upcoming Distribution Estimates</TYPE.main>
                                    <TYPE.label fontSize="24px">{formatDollarAmount(totalAmount)}</TYPE.label>
                                </AutoColumn>
                                <GreyCard padding="16px">
                                    <AutoColumn gap="md">
                                        <TYPE.main>Distribution to veBAL holders</TYPE.main>
                                        <RowBetween key={balAddress}>
                                            <RowFixed>
                                                <CurrencyLogo address={balAddress} size={'20px'} />
                                                <TYPE.label fontSize="14px" ml="8px">
                                                    {'BAL'}
                                                </TYPE.label>
                                            </RowFixed>
                                            <TYPE.label fontSize="14px">{formatDollarAmount(balAmount)}</TYPE.label>
                                        </RowBetween>
                                        <RowBetween key={bbaUsdAddress}>
                                            <RowFixed>
                                                <CurrencyLogo address={bbaUsdAddress} size={'20px'} />
                                                <TYPE.label fontSize="14px" ml="8px">
                                                    {'bb-a-USD'}
                                                </TYPE.label>
                                            </RowFixed>
                                            <TYPE.label fontSize="14px">{formatDollarAmount(bbaUsdAmount * 0.75 - balAmount * 0.25)}</TYPE.label>
                                        </RowBetween>
                                    </AutoColumn>
                                </GreyCard>
                                <GreyCard padding="16px">
                                    <AutoColumn gap="md">
                                        <TYPE.main>Distribution to DAO Treasury</TYPE.main>
                                        <RowBetween key={usdcAddress}>
                                            <RowFixed>
                                                <CurrencyLogo address={usdcAddress} size={'20px'} />
                                                <TYPE.label fontSize="14px" ml="8px">
                                                    {'USDC'}
                                                </TYPE.label>
                                            </RowFixed>
                                            <TYPE.label fontSize="14px">{formatDollarAmount(bbaUsdAmount * 0.25 + balAmount * 0.25)}</TYPE.label>
                                        </RowBetween>
                                    </AutoColumn>

                                </GreyCard>
                                <AutoColumn gap="4px">
                                    <TYPE.main fontWeight={400}>24h Change</TYPE.main>
                                    <TYPE.label fontSize="24px">{formatDollarAmount(Math.abs(dailyChange))}</TYPE.label>
                                    <Percent value={100 / historicalCollectorData?.tvl * dailyChange} />
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
                                        <TYPE.main>No fees to distribute</TYPE.main>
                                    </DarkGreyCard>)}
                        </ AutoColumn>}

                    {totalView ?
                        totalAmount > 0 && historicalCollectorData?.tvl ?
                            <LineChart
                                data={historicalCollectorData?.totalValueData}
                                height={220}
                                minHeight={475}
                                color={activeNetwork.primaryColor}
                                value={liquidityHover}
                                label={leftLabel}
                                setValue={setLiquidityHover}
                                setLabel={setLeftLabel}
                                topLeft={
                                    <AutoColumn gap="4px">
                                        <TYPE.mediumHeader fontSize="16px">Total Fees Accumulated</TYPE.mediumHeader>
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
                                        <StyledExternalLink href={getEtherscanLink(1, '0xce88686553686da562ce7cea497ce749da109f9f', 'address', activeNetwork)}>
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
                                        <TYPE.main fontSize="18px">Fetching fee collector historical data...</TYPE.main>
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
                                    minHeight={475}
                                    color={activeNetwork.primaryColor}
                                    value={liquidityHover}
                                    label={leftLabel}
                                    topLeft={
                                        <AutoColumn gap="4px">
                                            <TYPE.mediumHeader fontSize="16px">Historical accumulation of tokens to be swept</TYPE.mediumHeader>
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
                                            <StyledExternalLink href={getEtherscanLink(1, '0xce88686553686da562ce7cea497ce749da109f9f', 'address', activeNetwork)}>
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
                                                <TYPE.main>No tokens above threshold</TYPE.main>
                                            </DarkGreyCard>)}
                                </ AutoColumn>)}
                </ContentLayout> */}
                {!isEmptySet ?
                    <TYPE.main>Tokens to be swept</TYPE.main>
                    : null}
                {!isEmptySet ?
                    <ProtocolFeeTokenTable tokenDatas={formattedTokens} walletTokenDatas={walletTokenData} sweepLimitActive={true} />
                    : null}
                <TYPE.main> Tokens below weekly sweep threshold ({formatDollarAmount(sweepLimit, 0, true)}) </TYPE.main>
                <ProtocolFeeTokenTable tokenDatas={formattedTokens} walletTokenDatas={walletTokenData} sweepLimitActive={false} />
                <TYPE.main> Top performing Pools by Fees Collected (Epoch: {prevDate.toLocaleDateString()} - {today.toLocaleDateString()}, 00:00 UTC) </TYPE.main>
                <PoolFeeTable poolDatas={poolData} />
            </AutoColumn>
        </PageWrapper>
    );
}