import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AutoColumn } from 'components/Column';
import { TYPE } from 'theme';
import { ResponsiveRow, RowBetween, RowFixed } from 'components/Row';
import LineChart from 'components/LineChart/alt';
import useTheme from 'hooks/useTheme';
import { useProtocolChartData, useProtocolTransactions } from 'state/protocol/hooks';
import { DarkGreyCard } from 'components/Card';
import { formatDollarAmount } from 'utils/numbers';
import Percent from 'components/Percent';
import { HideMedium, HideSmall, StyledInternalLink } from '../../theme/components';
import TokenTable from 'components/tokens/TokenTable';
import { PageWrapper, ThemedBackgroundGlobal } from 'pages/styled';
import BarChart from 'components/BarChart/alt';
import { MonoSpace } from 'components/shared';
import { useActiveNetworkVersion } from 'state/application/hooks';
import { useTransformedVolumeData } from 'hooks/chart';
import { SmallOptionButton } from 'components/Button';
import { VolumeWindow } from 'types';
import { useBalancerTokens } from '../../data/balancer/useTokens';
import { useBalancerProtocolData } from '../../data/balancer/useProtocolData';
import PoolTable from '../../components/pools/PoolTable';
import { useBalancerPools } from '../../data/balancer/usePools';

const ChartWrapper = styled.div`
    width: 49%;

    ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`;

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const theme = useTheme();

    const [activeNetwork] = useActiveNetworkVersion();

    //const [protocolData] = useProtocolData();
    const [chartData] = useProtocolChartData();
    const [transactions] = useProtocolTransactions();

    const [volumeHover, setVolumeHover] = useState<number | undefined>();
    const [liquidityHover, setLiquidityHover] = useState<number | undefined>();
    const [leftLabel, setLeftLabel] = useState<string | undefined>();
    const [rightLabel, setRightLabel] = useState<string | undefined>();

    useEffect(() => {
        setLiquidityHover(undefined);
        setVolumeHover(undefined);
    }, [activeNetwork]);

    const weeklyVolumeData = useTransformedVolumeData(chartData, 'week');
    const monthlyVolumeData = useTransformedVolumeData(chartData, 'month');

    const [volumeWindow, setVolumeWindow] = useState(VolumeWindow.daily);

    const formattedTokens = useBalancerTokens();
    const protocolData = useBalancerProtocolData();
    const poolData = useBalancerPools();

    // if hover value undefined, reset to current day value
    useEffect(() => {
        if (!volumeHover && protocolData) {
            setVolumeHover(protocolData.volume24);
        }
    }, [protocolData, volumeHover]);
    useEffect(() => {
        if (!liquidityHover && protocolData) {
            setLiquidityHover(protocolData.tvl);
        }
    }, [liquidityHover, protocolData]);

    return (
        <PageWrapper>
            <ThemedBackgroundGlobal backgroundColor={activeNetwork.bgColor} />
            <AutoColumn gap="16px">
                <TYPE.main>Beethoven X</TYPE.main>
                <ResponsiveRow>
                    <ChartWrapper>
                        <LineChart
                            data={protocolData.tvlData}
                            height={220}
                            minHeight={332}
                            color={activeNetwork.primaryColor}
                            value={liquidityHover}
                            label={leftLabel}
                            setValue={setLiquidityHover}
                            setLabel={setLeftLabel}
                            topLeft={
                                <AutoColumn gap="4px">
                                    <TYPE.mediumHeader fontSize="16px">TVL</TYPE.mediumHeader>
                                    <TYPE.largeHeader fontSize="32px">
                                        <MonoSpace>{formatDollarAmount(liquidityHover, 2, true)} </MonoSpace>
                                    </TYPE.largeHeader>
                                    <TYPE.main fontSize="12px" height="14px">
                                        {leftLabel ? <MonoSpace>{leftLabel} (UTC)</MonoSpace> : null}
                                    </TYPE.main>
                                </AutoColumn>
                            }
                        />
                    </ChartWrapper>
                    <ChartWrapper>
                        <BarChart
                            height={220}
                            minHeight={332}
                            data={
                                volumeWindow === VolumeWindow.monthly
                                    ? monthlyVolumeData
                                    : volumeWindow === VolumeWindow.weekly
                                    ? weeklyVolumeData
                                    : protocolData.volumeData
                            }
                            color={theme.blue1}
                            setValue={setVolumeHover}
                            setLabel={setRightLabel}
                            value={volumeHover}
                            label={rightLabel}
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
                                    <TYPE.mediumHeader fontSize="16px">Volume 24H</TYPE.mediumHeader>
                                    <TYPE.largeHeader fontSize="32px">
                                        <MonoSpace> {formatDollarAmount(volumeHover, 2)}</MonoSpace>
                                    </TYPE.largeHeader>
                                    <TYPE.main fontSize="12px" height="14px">
                                        {rightLabel ? <MonoSpace>{rightLabel} (UTC)</MonoSpace> : null}
                                    </TYPE.main>
                                </AutoColumn>
                            }
                        />
                    </ChartWrapper>
                </ResponsiveRow>
                <HideSmall>
                    <DarkGreyCard>
                        <RowBetween>
                            <RowFixed>
                                <RowFixed mr="20px">
                                    <TYPE.main mr="4px">Volume 24H: </TYPE.main>
                                    <TYPE.label mr="4px">{formatDollarAmount(protocolData.volume24)}</TYPE.label>
                                    <Percent value={protocolData.volumeChange} wrap={true} />
                                </RowFixed>
                                <RowFixed mr="20px">
                                    <TYPE.main mr="4px">Fees 24H: </TYPE.main>
                                    <TYPE.label mr="4px">{formatDollarAmount(protocolData.fees24)}</TYPE.label>
                                    <Percent value={protocolData.feesChange} wrap={true} />
                                </RowFixed>
                                <HideMedium>
                                    <RowFixed mr="20px">
                                        <TYPE.main mr="4px">TVL: </TYPE.main>
                                        <TYPE.label mr="4px">{formatDollarAmount(protocolData.tvl)}</TYPE.label>
                                        <TYPE.main></TYPE.main>
                                        <Percent value={protocolData.tvlChange} wrap={true} />
                                    </RowFixed>
                                </HideMedium>
                            </RowFixed>
                        </RowBetween>
                    </DarkGreyCard>
                </HideSmall>
                <RowBetween>
                    <TYPE.main>Top Tokens</TYPE.main>
                    <StyledInternalLink to="tokens">Explore</StyledInternalLink>
                </RowBetween>
                <TokenTable tokenDatas={formattedTokens} />
                <RowBetween>
                    <TYPE.main>Top Pools</TYPE.main>
                    <StyledInternalLink to="pools">Explore</StyledInternalLink>
                </RowBetween>
                <PoolTable poolDatas={poolData} />
                {/*<RowBetween>
                    <TYPE.main>Transactions</TYPE.main>
                </RowBetween>
                {transactions ? (
                    <TransactionsTable transactions={transactions} color={activeNetwork.primaryColor} />
                ) : null}*/}
            </AutoColumn>
        </PageWrapper>
    );
}
