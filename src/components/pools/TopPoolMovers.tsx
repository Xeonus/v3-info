import React, { useMemo, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ScrollableX, GreyCard, GreyBadge } from 'components/Card';
import Loader from 'components/Loader';
import { AutoColumn } from 'components/Column';
import { RowFixed } from 'components/Row';
import { TYPE, StyledInternalLink } from 'theme';
import { formatDollarAmount } from 'utils/numbers';
import Percent from 'components/Percent';
import PoolCurrencyLogo from 'components/PoolCurrencyLogo';
import HoverInlineText from 'components/HoverInlineText';
import { feeTierPercent } from 'utils';
import { PoolData } from '../../data/balancer/balancerTypes';
import { useBalancerPools } from '../../data/balancer/usePools';
import { ScrollableRow } from 'components/tokens/TopTokenMovers';

const Container = styled(StyledInternalLink)`
    min-width: 210px;
    margin-right: 16px;

    :hover {
        cursor: pointer;
        opacity: 0.6;
    }
`;

const Wrapper = styled(GreyCard)`
    padding: 12px;
`;

const DataCard = ({ poolData }: { poolData: PoolData }) => {
    return (
        <Container to={'pools/' + poolData.id}>
            <Wrapper>
                <AutoColumn gap="sm">
                    <RowFixed>
                        <PoolCurrencyLogo tokens={poolData.tokens} size={16} />
                        <TYPE.label ml="8px">
                            <HoverInlineText
                                maxCharacters={10}
                                text={`${poolData.tokens[0].symbol}/${poolData.tokens[1].symbol}`}
                            />
                        </TYPE.label>
                    </RowFixed>
                    <RowFixed>
                        <TYPE.label mr="6px">{formatDollarAmount(poolData.volumeUSD)}</TYPE.label>
                        <Percent fontSize="14px" value={poolData.volumeUSDChange} />
                    </RowFixed>
                </AutoColumn>
            </Wrapper>
        </Container>
    );
};

export default function TopPoolMovers({ allPools }: { allPools: PoolData[] }) {

    const topVolume = allPools
        .sort((a, b) => {
            return a && b ? (a?.volumeUSD > b?.volumeUSD ? -1 : 1) : -1;
        })
        .slice(0, Math.min(20, Object.values(allPools).length));


    const increaseRef = useRef<HTMLDivElement>(null);
    const [increaseSet, setIncreaseSet] = useState(false);
    // const [pauseAnimation, setPauseAnimation] = useState(false)
    // const [resetInterval, setClearInterval] = useState<() => void | undefined>()

    useEffect(() => {
        if (!increaseSet && increaseRef && increaseRef.current) {
            setInterval(() => {
                if (increaseRef.current && increaseRef.current.scrollLeft !== increaseRef.current.scrollWidth) {
                    increaseRef.current.scrollTo(increaseRef.current.scrollLeft + 1, 0);
                }
            }, 30);
            setIncreaseSet(true);
        }
    }, [increaseRef, increaseSet]);

    return (
        <ScrollableRow ref={increaseRef}>
            {topVolume.map((entry) =>
                entry ? <DataCard key={'top-card-pool-' + entry.address} poolData={entry} /> : null,
            )}
        </ScrollableRow>
    );
}
