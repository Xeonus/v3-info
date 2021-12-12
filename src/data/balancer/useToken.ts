import { useBalancerChartTokenPricesQuery } from '../../apollo/generated/graphql-codegen-generated';
import { groupBy, head, map, orderBy, sumBy } from 'lodash';
import { OHLC } from '../../components/Chart/OHLC';

const TIME_INTERVAL = 15 * 60;

export interface BalancerTokenData {
    chartData: OHLC[];
    loading: boolean;
}

export function useBalancerToken(tokenAddress: string): BalancerTokenData {
    const {
        data: pricesData,
        loading,
        error,
    } = useBalancerChartTokenPricesQuery({ variables: { asset: tokenAddress } });

    const prices = [
        ...(pricesData?.prices1 || []),
        ...(pricesData?.prices2 || []),
        ...(pricesData?.prices3 || []),
        ...(pricesData?.prices4 || []),
        ...(pricesData?.prices5 || []),
        ...(pricesData?.prices6 || []),
        ...(pricesData?.prices7 || []),
        ...(pricesData?.prices8 || []),
        ...(pricesData?.prices9 || []),
        ...(pricesData?.prices10 || []),
    ];

    const formatted = prices.map((price) => ({
        ...price,
        priceUSD: parseFloat(price.priceUSD),
        amount: parseFloat(price.amount),
    }));
    const grouped = groupBy(formatted, (price) => `${Math.ceil(price.timestamp / TIME_INTERVAL) * TIME_INTERVAL}`);

    const chartData = map(grouped, (prices, timestamp): OHLC => {
        return {
            open: head(orderBy(prices, 'timestamp', 'asc'))?.priceUSD || 0,
            high: head(orderBy(prices, 'priceUSD', 'desc'))?.priceUSD || 0,
            low: head(orderBy(prices, 'priceUSD', 'asc'))?.priceUSD || 0,
            close: head(orderBy(prices, 'timestamp', 'desc'))?.priceUSD || 0,
            volume: sumBy(prices, (price) => price.amount * price.priceUSD),
            date: new Date(parseInt(timestamp) * 1000),
            timestamp: parseInt(timestamp),
        };
    });

    const filtered = chartData.filter((item, idx) => {
        if (idx === 0) {
            return true;
        }

        return Math.abs((item.low - item.high) / Math.abs(item.low + item.high) / 2) < 0.2;
    });

    return {
        chartData: orderBy(filtered, 'timestamp', 'asc'),
        loading,
    };
}
