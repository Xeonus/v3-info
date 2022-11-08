import React, { useEffect } from 'react';
import { PageWrapper } from 'pages/styled';
import { AutoColumn } from 'components/Column';
import { HideSmall, TYPE } from 'theme';
import TokenTable from 'components/tokens/TokenTable';
import { useSavedTokens } from 'state/user/hooks';
import { DarkGreyCard } from 'components/Card';
import TopTokenMovers from 'components/tokens/TopTokenMovers';
import { useBalancerTokens } from '../../data/balancer/useTokens';
import { GetCoingeckoData } from 'utils/getCoingecoSimpleTokenPrices';
import { useActiveNetworkVersion } from 'state/application/hooks';

//Coingecko Interface
export interface CoingeckoRawData {
    [id: string]: FiatPrice
}

export interface FiatPrice {
    usd: number,
    usd_24h_change: number
}

export default function TokensOverview() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    const [savedTokens] = useSavedTokens();
    const [activeNetwork] = useActiveNetworkVersion();
    let formattedTokens = useBalancerTokens();
    formattedTokens = formattedTokens.filter(x => x.address.toLowerCase() !== '0x1aafc31091d93c3ff003cff5d2d8f7ba2e728425');
    const watchListTokens = formattedTokens.filter((token) => savedTokens.includes(token.address));

    return (
        <PageWrapper>
            <AutoColumn gap="lg">
                <TYPE.main>Your Watchlist</TYPE.main>
                {savedTokens.length > 0 ? (
                    <TokenTable tokenDatas={watchListTokens} />
                ) : (
                    <DarkGreyCard>
                        <TYPE.main>Saved tokens will appear here</TYPE.main>
                    </DarkGreyCard>
                )}
                <HideSmall>
                    <DarkGreyCard style={{ paddingTop: '12px' }}>
                        <AutoColumn gap="md">
                            <TYPE.mediumHeader fontSize="16px">Top Movers</TYPE.mediumHeader>
                            <TopTokenMovers tokenDatas={formattedTokens} />
                        </AutoColumn>
                    </DarkGreyCard>
                </HideSmall>
                <TYPE.main>All Tokens</TYPE.main>
                <TokenTable tokenDatas={formattedTokens} />
            </AutoColumn>
        </PageWrapper>
    );
}
