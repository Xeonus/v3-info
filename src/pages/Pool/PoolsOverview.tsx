import React, { useEffect } from 'react';
import { PageWrapper } from 'pages/styled';
import { AutoColumn } from 'components/Column';
import { TYPE } from 'theme';
import PoolTable from 'components/pools/PoolTable';
import { useSavedPools } from 'state/user/hooks';
import { DarkGreyCard } from 'components/Card';
import { useBalancerPools } from '../../data/balancer/usePools';
import TopPoolMovers from 'components/pools/TopPoolMovers'
import { HideSmall } from 'theme';

export default function PoolPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [savedPools] = useSavedPools();

    const poolData = useBalancerPools();
    const watchlistPools = poolData.filter((pool) => savedPools.includes(pool.id));

    return (
        <PageWrapper>
            <AutoColumn gap="lg">
                <TYPE.main>Your Watchlist</TYPE.main>
                {watchlistPools.length > 0 ? (
                    <PoolTable poolDatas={watchlistPools} />
                ) : (
                    <DarkGreyCard>
                        <TYPE.main>Saved pools will appear here</TYPE.main>
                    </DarkGreyCard>
                )}
                <HideSmall>
          <DarkGreyCard style={{ paddingTop: '12px' }}>
            <AutoColumn gap="md">
              <TYPE.mediumHeader fontSize="16px">Trending by 24H Volume</TYPE.mediumHeader>
              <TopPoolMovers allPools={poolData}/>
            </AutoColumn>
          </DarkGreyCard>
        </HideSmall>
                <TYPE.main>All Pools</TYPE.main>
                <PoolTable poolDatas={poolData} />
            </AutoColumn>
        </PageWrapper>
    );
}
