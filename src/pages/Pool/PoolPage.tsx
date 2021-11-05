import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { useColor } from 'hooks/useColor';
import { PageWrapper, ThemedBackground } from 'pages/styled';
import { getEtherscanLink, swapFeePercent, tokenWeightPercent } from 'utils';
import { AutoColumn } from 'components/Column';
import { AutoRow, RowBetween, RowFixed } from 'components/Row';
import { StyledInternalLink, TYPE } from 'theme';
import Loader, { LocalLoader } from 'components/Loader';
import { Download, ExternalLink } from 'react-feather';
import { ExternalLink as StyledExternalLink } from '../../theme/components';
import useTheme from 'hooks/useTheme';
import CurrencyLogo from 'components/CurrencyLogo';
import { formatAmount, formatDollarAmount } from 'utils/numbers';
import Percent from 'components/Percent';
import { ButtonGray, ButtonPrimary, SavedIcon } from 'components/Button';
import { DarkGreyCard, GreyBadge, GreyCard } from 'components/Card';
import LineChart from 'components/LineChart/alt';
import { ToggleElementFree, ToggleWrapper } from 'components/Toggle/index';
import BarChart from 'components/BarChart/alt';
import PoolCurrencyLogo from 'components/PoolCurrencyLogo';
import TransactionTable from 'components/TransactionsTable';
import { useSavedPools } from 'state/user/hooks';
import { MonoSpace } from 'components/shared';
import { useActiveNetworkVersion } from 'state/application/hooks';
import { networkPrefix } from 'utils/networkPrefix';
import { EthereumNetworkInfo } from 'constants/networks';
import { Transaction } from '../../types';
import { useBalancerPoolData, useBalancerPoolPageData } from '../../data/balancer/usePools';

const ContentLayout = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-gap: 1em;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

const TokenButton = styled(GreyCard)`
    padding: 8px 12px;
    border-radius: 10px;
    :hover {
        cursor: pointer;
        opacity: 0.6;
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

const ToggleRow = styled(RowBetween)`
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

enum ChartView {
    TVL,
    VOL,
    PRICE,
    DENSITY,
    FEES,
}

export default function PoolPage({
    match: {
        params: { poolId },
    },
}: RouteComponentProps<{ poolId: string }>) {
    const [activeNetwork] = useActiveNetworkVersion();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // theming
    const backgroundColor = useColor();
    const theme = useTheme();

    const poolData = useBalancerPoolData(poolId);
    const { tvlData, volumeData, feesData } = useBalancerPoolPageData(poolId);
    const transactions: Transaction[] = [];

    const [view, setView] = useState(ChartView.VOL);
    const [latestValue, setLatestValue] = useState<number | undefined>();
    const [valueLabel, setValueLabel] = useState<string | undefined>();

    //watchlist
    const [savedPools, addSavedPool] = useSavedPools();

    return (
        <PageWrapper>
            <ThemedBackground backgroundColor={backgroundColor} />
            {poolData ? (
                <AutoColumn gap="32px">
                    <RowBetween>
                        <AutoRow gap="4px">
                            <StyledInternalLink to={networkPrefix(activeNetwork)}>
                                <TYPE.main>{`Home > `}</TYPE.main>
                            </StyledInternalLink>
                            <StyledInternalLink to={networkPrefix(activeNetwork) + 'pools'}>
                                <TYPE.label>{` Pools `}</TYPE.label>
                            </StyledInternalLink>
                            <TYPE.main>{` > `}</TYPE.main>
                            <TYPE.label>{` ${poolData.name} ${swapFeePercent(poolData.swapFee)} `}</TYPE.label>
                        </AutoRow>
                        <RowFixed gap="10px" align="center">
                            <SavedIcon fill={savedPools.includes(poolId)} onClick={() => addSavedPool(poolId)} />
                            <StyledExternalLink href={getEtherscanLink(1, poolData.address, 'address', activeNetwork)}>
                                <ExternalLink stroke={theme.text2} size={'17px'} style={{ marginLeft: '12px' }} />
                            </StyledExternalLink>
                        </RowFixed>
                    </RowBetween>
                    <ResponsiveRow align="flex-end">
                        <AutoColumn gap="lg">
                            <RowFixed>
                                <PoolCurrencyLogo tokens={poolData.tokens} size={24} />
                                <TYPE.label ml="8px" mr="8px" fontSize="24px">{`${poolData.name}`}</TYPE.label>
                                <GreyBadge>{swapFeePercent(poolData.swapFee)}</GreyBadge>
                            </RowFixed>
                            <ResponsiveRow>
                                {poolData.tokens.map((token) => (
                                    <StyledInternalLink
                                        to={networkPrefix(activeNetwork) + 'tokens/' + token.address}
                                        key={token.address}
                                        mr="10px"
                                    >
                                        <TokenButton>
                                            <RowFixed>
                                                <CurrencyLogo address={token.address} size={'20px'} />
                                                <TYPE.label
                                                    fontSize="16px"
                                                    ml="4px"
                                                    style={{ whiteSpace: 'nowrap' }}
                                                    width={'fit-content'}
                                                >
                                                    {`${tokenWeightPercent(token.weight)} ${
                                                        poolData.tokens.length < 5 ? token.symbol : ''
                                                    } `}
                                                </TYPE.label>
                                            </RowFixed>
                                        </TokenButton>
                                    </StyledInternalLink>
                                ))}
                            </ResponsiveRow>
                        </AutoColumn>
                        {activeNetwork !== EthereumNetworkInfo ? null : (
                            <RowFixed>
                                <StyledExternalLink href={`https://app.beets.fi/#/pool/${poolId}`}>
                                    <ButtonGray width="170px" mr="12px" style={{ height: '44px' }}>
                                        <RowBetween>
                                            <Download size={24} />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>Invest</div>
                                        </RowBetween>
                                    </ButtonGray>
                                </StyledExternalLink>
                                <StyledExternalLink href={`https://app.beets.fi/#/trade`}>
                                    <ButtonPrimary width="100px" style={{ height: '44px' }}>
                                        Trade
                                    </ButtonPrimary>
                                </StyledExternalLink>
                            </RowFixed>
                        )}
                    </ResponsiveRow>
                    <ContentLayout>
                        <DarkGreyCard>
                            <AutoColumn gap="lg">
                                <GreyCard padding="16px">
                                    <AutoColumn gap="md">
                                        <TYPE.main>Total Tokens Locked</TYPE.main>
                                        {poolData.tokens.map((token) => (
                                            <RowBetween key={token.address}>
                                                <RowFixed>
                                                    <CurrencyLogo address={token.address} size={'20px'} />
                                                    <TYPE.label fontSize="14px" ml="8px">
                                                        {token.symbol}
                                                    </TYPE.label>
                                                </RowFixed>
                                                <TYPE.label fontSize="14px">{formatAmount(token.tvl)}</TYPE.label>
                                            </RowBetween>
                                        ))}
                                    </AutoColumn>
                                </GreyCard>
                                <AutoColumn gap="4px">
                                    <TYPE.main fontWeight={400}>TVL</TYPE.main>
                                    <TYPE.label fontSize="24px">{formatDollarAmount(poolData.tvlUSD)}</TYPE.label>
                                    <Percent value={poolData.tvlUSDChange} />
                                </AutoColumn>
                                <AutoColumn gap="4px">
                                    <TYPE.main fontWeight={400}>Volume 24h</TYPE.main>
                                    <TYPE.label fontSize="24px">{formatDollarAmount(poolData.volumeUSD)}</TYPE.label>
                                    <Percent value={poolData.volumeUSDChange} />
                                </AutoColumn>
                                <AutoColumn gap="4px">
                                    <TYPE.main fontWeight={400}>24h Fees</TYPE.main>
                                    <TYPE.label fontSize="24px">{formatDollarAmount(poolData.feesUSD)}</TYPE.label>
                                </AutoColumn>
                            </AutoColumn>
                        </DarkGreyCard>
                        <DarkGreyCard>
                            <ToggleRow align="flex-start">
                                <AutoColumn>
                                    <TYPE.label fontSize="24px" height="30px">
                                        <MonoSpace>
                                            {latestValue
                                                ? formatDollarAmount(latestValue)
                                                : view === ChartView.VOL
                                                ? formatDollarAmount(volumeData[volumeData.length - 1]?.value)
                                                : view === ChartView.DENSITY
                                                ? ''
                                                : formatDollarAmount(tvlData[tvlData.length - 1]?.value)}{' '}
                                        </MonoSpace>
                                    </TYPE.label>
                                    <TYPE.main height="20px" fontSize="12px">
                                        {valueLabel ? <MonoSpace>{valueLabel} (UTC)</MonoSpace> : ''}
                                    </TYPE.main>
                                </AutoColumn>
                                <ToggleWrapper width="240px">
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
                                            view === ChartView.TVL ? setView(ChartView.DENSITY) : setView(ChartView.TVL)
                                        }
                                    >
                                        TVL
                                    </ToggleElementFree>
                                    <ToggleElementFree
                                        isActive={view === ChartView.FEES}
                                        fontSize="12px"
                                        onClick={() =>
                                            view === ChartView.FEES ? setView(ChartView.TVL) : setView(ChartView.FEES)
                                        }
                                    >
                                        Fees
                                    </ToggleElementFree>
                                </ToggleWrapper>
                            </ToggleRow>
                            {view === ChartView.TVL ? (
                                <LineChart
                                    data={tvlData}
                                    setLabel={setValueLabel}
                                    color={backgroundColor}
                                    minHeight={340}
                                    setValue={setLatestValue}
                                    value={latestValue}
                                    label={valueLabel}
                                />
                            ) : view === ChartView.VOL ? (
                                <BarChart
                                    data={volumeData}
                                    color={backgroundColor}
                                    minHeight={340}
                                    setValue={setLatestValue}
                                    setLabel={setValueLabel}
                                    value={latestValue}
                                    label={valueLabel}
                                />
                            ) : (
                                <BarChart
                                    data={feesData}
                                    color={backgroundColor}
                                    minHeight={340}
                                    setValue={setLatestValue}
                                    setLabel={setValueLabel}
                                    value={latestValue}
                                    label={valueLabel}
                                />
                            )}
                        </DarkGreyCard>
                    </ContentLayout>
                    <TYPE.main fontSize="24px">Transactions</TYPE.main>
                    <DarkGreyCard>
                        {transactions ? <TransactionTable transactions={transactions} /> : <LocalLoader fill={false} />}
                    </DarkGreyCard>
                </AutoColumn>
            ) : (
                <Loader />
            )}
        </PageWrapper>
    );
}
