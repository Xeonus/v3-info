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
    const formattedTokens = useBalancerTokens();
    const watchListTokens = formattedTokens.filter((token) => savedTokens.includes(token.address));

/*     const tokenAddresses: Array<string> = [];
    useEffect(() => {
        //V2: repopulate formatted token data with coingecko data
        if (formattedTokens.length > 10) {
            formattedTokens.forEach(token => {
                tokenAddresses.push(token.address);
            })
        }
        
        const getTokenPrices = async (addresses: string) => {
            const baseURI = 'https://api.coingecko.com/api/v3/simple/token_price/';
            const queryParams = activeNetwork.coingeckoId + '?contract_addresses=' + addresses + '&vs_currencies=usd&include_24hr_change=true';
            try {
                const coingeckoResponse = await fetch(baseURI + queryParams);
                console.log("response", coingeckoResponse)
                const json: CoingeckoRawData = await coingeckoResponse.json();
                console.log("json", json);
            if (coingeckoResponse.ok && json) {
            formattedTokens.forEach(token => {
                if (json[token.address] && json[token.address].usd) {
                    token.priceUSD = json[token.address].usd;

                }
                if (json[token.address] && json[token.address].usd_24h_change) {
                    token.priceUSDChange = json[token.address].usd_24h_change;
                }
            })
        }
        } catch {
            console.log("Coingecko: token_price API failed")
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

    }, [formattedTokens, tokenAddresses]); */

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
