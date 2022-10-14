import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { useColor } from 'hooks/useColor';
import ReactGA from 'react-ga';
import { PageWrapper, ThemedBackground } from 'pages/styled';
import { getEtherscanLink, shortenAddress } from 'utils';
import { AutoColumn } from 'components/Column';
import { AutoRow, RowBetween, RowFixed, RowFlat } from 'components/Row';
import { StyledInternalLink, TYPE } from 'theme';
import Loader, { LocalLoader } from 'components/Loader';
import { ExternalLink } from 'react-feather';
import { ExternalLink as StyledExternalLink } from '../../theme/components';
import useTheme from 'hooks/useTheme';
import CurrencyLogo from 'components/CurrencyLogo';
import { formatDollarAmount } from 'utils/numbers';
import Percent from 'components/Percent';
import { ButtonPrimary, SavedIcon } from 'components/Button';
import { DarkGreyCard, LightGreyCard } from 'components/Card';
import PoolTable from 'components/pools/PoolTable';
import LineChart from 'components/LineChart/alt';
import { ToggleElementFree, ToggleWrapper } from 'components/Toggle/index';
import BarChart from 'components/BarChart/alt';
import SwapsTable from 'components/TransactionsTable/SwapsTable';
import { useSavedTokens } from 'state/user/hooks';
import { TimeWindow } from 'constants/intervals';
import { MonoSpace } from 'components/shared';
import dayjs from 'dayjs';
import { useActiveNetworkVersion } from 'state/application/hooks';
import { networkPrefix } from 'utils/networkPrefix';
import { EthereumNetworkInfo } from 'constants/networks';
import { GenericImageWrapper } from 'components/Logo';
import { useCMCLink } from 'hooks/useCMCLink';
import CMCLogo from '../../assets/images/cmc.png';
import { useBalancerTokenData, useBalancerTokenPageData } from '../../data/balancer/useTokens';
import { useBalancerPoolsForToken } from '../../data/balancer/usePools';
import { useBalancerTransactionData } from '../../data/balancer/useTransactions';
import { useBalancerToken } from 'data/balancer/useToken';
import CandleChart from 'components/CandleChart';
import { useCoingeckoLink } from 'hooks/useCoingeckoLink';
import CoingeckoLogo from '../../assets/images/coingecko.png';

const PriceText = styled(TYPE.label)`
    font-size: 36px;
    line-height: 0.8;
`;

const ContentLayout = styled.div`
    margin-top: 16px;
    display: grid;
    grid-template-columns: 260px 1fr;
    grid-gap: 1em;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

const ResponsiveRow = styled(RowBetween)`
    ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    align-items: flex-start;
    row-gap: 24px;
    width: 100%:
  `};
`;

const StyledCMCLogo = styled.img`
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

enum ChartView {
    TVL,
    VOL,
    PRICE,
}

const DEFAULT_TIME_WINDOW = TimeWindow.WEEK;

export default function TokenPage({
    match: {
        params: { address },
    },
}: RouteComponentProps<{ address: string }>) {
    const [activeNetwork] = useActiveNetworkVersion();
    const theme = useTheme();

    address = address.toLowerCase();
    // theming
    const backgroundColor = useColor(address, activeNetwork.id);

    // scroll on page view
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const coingeckoLink = useCoingeckoLink(address);
    const tokenData = useBalancerTokenData(address);
    const poolData = useBalancerPoolsForToken(address);
    const { swaps, joinExits } = useBalancerTransactionData(
        [address],
        poolData.map((pool) => pool.id),
    );
    const { tvlData, volumeData, priceData } = useBalancerTokenPageData(address);
    //CandleChart Data
     const { chartData } = useBalancerToken(address);
     //console.log("chartData", chartData);

    // chart labels
    const [view, setView] = useState(ChartView.TVL);
    const [latestValue, setLatestValue] = useState<number | undefined>();
    const [valueLabel, setValueLabel] = useState<string | undefined>();
    const [timeWindow] = useState(DEFAULT_TIME_WINDOW);

    // watchlist
    const [savedTokens, addSavedToken] = useSavedTokens();

    //calcuate token fees -> extraction of 24h fees relative to token weight
    let tokenFees = 0;
    poolData.forEach((pool) => {
        const token = pool.tokens.find((t) => t.address === address);
        if (token && token.weight) {
            tokenFees += pool.feesUSD * token?.weight;
        }
    })

    return (
        <PageWrapper>
            <ThemedBackground backgroundColor={backgroundColor} />
            {tokenData ? (
                !tokenData.exists ? (
                    <LightGreyCard style={{ textAlign: 'center' }}>
                        No pool has been created with this token yet. Create one
                        <StyledExternalLink style={{ marginLeft: '4px' }} href={`${activeNetwork.appUri}#/pool-create`}>
                            here.
                        </StyledExternalLink>
                    </LightGreyCard>
                ) : (
                    <AutoColumn gap="32px">
                        <AutoColumn gap="32px">
                            <RowBetween>
                                <AutoRow gap="4px">
                                    <StyledInternalLink to={networkPrefix(activeNetwork)}>
                                        <TYPE.main>{`Home > `}</TYPE.main>
                                    </StyledInternalLink>
                                    <StyledInternalLink to={networkPrefix(activeNetwork) + 'tokens'}>
                                        <TYPE.label>{` Tokens `}</TYPE.label>
                                    </StyledInternalLink>
                                    <TYPE.main>{` > `}</TYPE.main>
                                    <TYPE.label>{` ${tokenData.symbol} `}</TYPE.label>
                                    <StyledExternalLink href={getEtherscanLink(1, address, 'address', activeNetwork)}>
                                        <TYPE.main>{` (${shortenAddress(address)}) `}</TYPE.main>
                                    </StyledExternalLink>
                                </AutoRow>
                                <RowFixed align="center" justify="center">
                                    <SavedIcon
                                        fill={savedTokens.includes(address)}
                                        onClick={() => addSavedToken(address)}
                                    />
                                    {coingeckoLink && (
                                        <StyledExternalLink
                                            href={coingeckoLink}
                                            style={{ marginLeft: '12px' }}
                                            onClickCapture={() => {
                                                ReactGA.event({
                                                    category: 'CMC',
                                                    action: 'CMC token page click',
                                                });
                                            }}
                                        >
                                            <StyledCMCLogo src={CoingeckoLogo} />
                                        </StyledExternalLink>
                                    )}
                                    <StyledExternalLink href={getEtherscanLink(1, address, 'address', activeNetwork)}>
                                        <ExternalLink
                                            stroke={theme.text2}
                                            size={'17px'}
                                            style={{ marginLeft: '12px' }}
                                        />
                                    </StyledExternalLink>
                                </RowFixed>
                            </RowBetween>
                            <ResponsiveRow align="flex-end">
                                <AutoColumn gap="md">
                                    <RowFixed gap="lg">
                                        <CurrencyLogo address={address} />
                                        <TYPE.label ml={'10px'} fontSize="20px">
                                            {tokenData.name}
                                        </TYPE.label>
                                        <TYPE.main ml={'6px'} fontSize="20px">
                                            ({tokenData.symbol})
                                        </TYPE.main>
                                        {activeNetwork === EthereumNetworkInfo ? null : (
                                            <GenericImageWrapper
                                                src={activeNetwork.imageURL}
                                                style={{ marginLeft: '8px' }}
                                                size={'26px'}
                                            />
                                        )}
                                    </RowFixed>
                                    {priceData[priceData.length-1]?.value ?
                                    <RowFlat style={{ marginTop: '8px' }}>
                                        <PriceText mr="10px"> {formatDollarAmount(priceData[priceData.length-1].value)}</PriceText>
                                        (<Percent value={(priceData[priceData.length-1].value - priceData[priceData.length-2].value) / priceData[priceData.length-1].value * 100} />)
                                    </RowFlat> : null }
                                </AutoColumn>
                                {activeNetwork !== EthereumNetworkInfo ? null : (
                                    <RowFixed>
                                        <StyledExternalLink href={`${activeNetwork.appUri}#/trade/${address}`}>
                                            <ButtonPrimary
                                                width="100px"
                                                bgColor={backgroundColor}
                                                style={{ height: '44px' }}
                                            >
                                                Trade
                                            </ButtonPrimary>
                                        </StyledExternalLink>
                                    </RowFixed>
                                )}
                            </ResponsiveRow>
                        </AutoColumn>

                        <ContentLayout>
                            <DarkGreyCard>
                                <AutoColumn gap="lg">
                                    <AutoColumn gap="4px">
                                        <TYPE.main fontWeight={400}>TVL</TYPE.main>
                                        <TYPE.label fontSize="24px">{formatDollarAmount(tokenData.tvlUSD)}</TYPE.label>
                                        <Percent value={tokenData.tvlUSDChange} />
                                    </AutoColumn>
                                    <AutoColumn gap="4px">
                                        <TYPE.main fontWeight={400}>24h Trading Vol</TYPE.main>
                                        <TYPE.label fontSize="24px">
                                            {formatDollarAmount(tokenData.volumeUSD)}
                                        </TYPE.label>
                                        <Percent value={tokenData.volumeUSDChange} />
                                    </AutoColumn>
                                    <AutoColumn gap="4px">
                                        <TYPE.main fontWeight={400}>7d Trading Vol</TYPE.main>
                                        <TYPE.label fontSize="24px">
                                            {formatDollarAmount(tokenData.volumeUSDWeek)}
                                        </TYPE.label>
                                    </AutoColumn>
                                    <AutoColumn gap="4px">
                                        <TYPE.main fontWeight={400}>24h Fees</TYPE.main>
                                        <TYPE.label fontSize="24px">{formatDollarAmount(tokenFees)}</TYPE.label>
                                    </AutoColumn>
                                </AutoColumn>
                            </DarkGreyCard>
                            <DarkGreyCard>
                                <RowBetween align="flex-start">
                                    <AutoColumn>
                                        <RowFixed>
                                            <TYPE.label fontSize="24px" height="30px">
                                                <MonoSpace>
                                                    {latestValue
                                                        ? formatDollarAmount(latestValue, 2)
                                                        : view === ChartView.VOL
                                                        ? formatDollarAmount(volumeData[volumeData.length - 1]?.value)
                                                        : view === ChartView.TVL
                                                        ? formatDollarAmount(tvlData[tvlData.length - 1]?.value)
                                                        : (chartData[chartData.length -1] ? formatDollarAmount(chartData[chartData.length -1].open, 2) 
                                                        : (priceData[priceData.length-1] ? formatDollarAmount(priceData[priceData.length-1].value, 2) : 0 ))}
                                                </MonoSpace>
                                            </TYPE.label>
                                        </RowFixed>
                                        <TYPE.main height="20px" fontSize="12px">
                                            {valueLabel ? (
                                                <MonoSpace>{valueLabel} (UTC)</MonoSpace>
                                            ) : (
                                                <MonoSpace>{dayjs.utc().format('MMM D, YYYY')}</MonoSpace>
                                            )}
                                        </TYPE.main>
                                    </AutoColumn>
                                    <ToggleWrapper width="180px">
                                        <ToggleElementFree
                                            isActive={view === ChartView.VOL}
                                            fontSize="12px"
                                            onClick={() =>
                                                view === ChartView.VOL ? setView(ChartView.TVL) : setView(ChartView.VOL)
                                            }
                                        >
                                            Volume
                                        </ToggleElementFree>
                                        <ToggleElementFree
                                            isActive={view === ChartView.TVL}
                                            fontSize="12px"
                                            onClick={() =>
                                                view === ChartView.TVL
                                                    ? setView(ChartView.PRICE)
                                                    : setView(ChartView.TVL)
                                            }
                                        >
                                            TVL
                                        </ToggleElementFree>
                                        {<ToggleElementFree
                                            isActive={view === ChartView.PRICE}
                                            fontSize="12px"
                                            onClick={() => setView(ChartView.PRICE)}
                                        >
                                            Price
                                        </ToggleElementFree>}
                                    </ToggleWrapper>
                                </RowBetween>
                                {view === ChartView.TVL ? (
                                    <LineChart
                                        data={tvlData}
                                        color={backgroundColor}
                                        minHeight={340}
                                        value={latestValue}
                                        label={valueLabel}
                                        setValue={setLatestValue}
                                        setLabel={setValueLabel}
                                    />
                                ) : view === ChartView.VOL ? (
                                    <BarChart
                                        data={volumeData}
                                        color={backgroundColor}
                                        minHeight={340}
                                        value={latestValue}
                                        label={valueLabel}
                                        setValue={setLatestValue}
                                        setLabel={setValueLabel}
                                    />
                                ) : view === ChartView.PRICE ? (
                                    chartData.length > 10 ? (
                                    <CandleChart
                                    data={chartData}
                                    setValue={setLatestValue}
                                    setLabel={setValueLabel}
                                    color={backgroundColor}
                    />
                                    ) : ( priceData.length > 0 ? (
                                        <LineChart
                                            data={priceData}
                                            color={backgroundColor}
                                            minHeight={340}
                                            value={latestValue}
                                            label={valueLabel}
                                            setValue={setLatestValue}
                                            setLabel={setValueLabel}
                                        />) : 
                                        <LocalLoader fill={false} />
                                    )
                                ) : null}
                                {/* <RowBetween width="100%">
                  <div> </div>
                  <AutoRow gap="4px" width="fit-content">
                    <SmallOptionButton
                      active={timeWindow === TimeWindow.DAY}
                      onClick={() => setTimeWindow(TimeWindow.DAY)}
                    >
                      24H
                    </SmallOptionButton>
                    <SmallOptionButton
                      active={timeWindow === TimeWindow.WEEK}
                      onClick={() => setTimeWindow(TimeWindow.WEEK)}
                    >
                      1W
                    </SmallOptionButton>
                    <SmallOptionButton
                      active={timeWindow === TimeWindow.MONTH}
                      onClick={() => setTimeWindow(TimeWindow.MONTH)}
                    >
                      1M
                    </SmallOptionButton>
                    <SmallOptionButton
                      active={timeWindow === TimeWindow.DAY}
                      onClick={() => setTimeWindow(TimeWindow.DAY)}
                    >
                      All
                    </SmallOptionButton>
                  </AutoRow>
                </RowBetween> */}
                            </DarkGreyCard>
                        </ContentLayout>
                        <TYPE.main>Pools</TYPE.main>
                        <DarkGreyCard>
                            <PoolTable poolDatas={poolData} />
                        </DarkGreyCard>
                        <TYPE.main>Swaps</TYPE.main>
                        <DarkGreyCard>
                            {swaps.length > 0 ? (
                                <SwapsTable swaps={swaps} color={backgroundColor} />
                            ) : (
                                <LocalLoader fill={false} />
                            )}
                        </DarkGreyCard>
                    </AutoColumn>
                )
            ) : (
                <AutoColumn gap="lg">
                <DarkGreyCard>
                    <TYPE.main fontSize="24px">Loading token data...</TYPE.main>
                <LocalLoader fill={false} />
                </DarkGreyCard>
                </ AutoColumn>
            )}
        </PageWrapper>
    );
}
