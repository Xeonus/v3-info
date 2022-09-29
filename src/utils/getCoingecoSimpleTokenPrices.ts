import { useEffect, useState } from "react";
import { useActiveNetworkVersion } from "state/application/hooks";

//Coingecko Interface
export interface CoingeckoRawData {
    prices: number[][];
    market_caps: number[][];
    total_volumes: number[][];
}

//Get historical Coingecko price data based on specific time-range (-> aligned to subgraph snapshots)
export function GetCoingeckoData (addresses: string[], network: string, vs_currency: string) {
    const [activeNetwork] = useActiveNetworkVersion();
    const addressesString = '';
    const baseURI = 'https://api.coingecko.com/api/v3/simple/token_price/';
    const queryParams = network + '?contract_addresses=' + addressesString + '/market_cart/range?vs_currency=usd&from=' + '&vs_currencies=' + vs_currency;
        const [jsonData, setJsonData] = useState<CoingeckoRawData>();
        //Fetch Balancer Front-End Json containing incentives data:
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(baseURI + activeNetwork.chainId + queryParams);
                    const json: CoingeckoRawData = await response.json();
                    setJsonData(json);
                    
                } catch (error) {
                    console.log("error", error);
                }
            };
    
            fetchData();
        }, []);
    return jsonData;
}