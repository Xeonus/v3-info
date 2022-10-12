import React, { useCallback, useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { DarkGreyCard } from 'components/Card';
import Loader from 'components/Loader';
import { AutoColumn } from 'components/Column';
import { formatDollarAmount, formatAmount } from 'utils/numbers';
import { shortenAddress, getEtherscanLink } from 'utils';
import { Label, ClickableText } from 'components/Text';
import { Transaction, TransactionType } from 'types';
import { formatTime } from 'utils/date';
import { RowFixed } from 'components/Row';
import { ExternalLink, TYPE } from 'theme';
import { PageButtons, Arrow, Break } from 'components/shared';
import useTheme from 'hooks/useTheme';
import HoverInlineText from 'components/HoverInlineText';
import { useActiveNetworkVersion } from 'state/application/hooks';
import { BalancerJoinExitFragment, BalancerSwapFragment } from '../../apollo/generated/graphql-codegen-generated';
import PoolCurrencyLogo from '../PoolCurrencyLogo';

const Wrapper = styled(DarkGreyCard)`
    width: 100%;
`;

const ResponsiveGrid = styled.div`
    display: grid;
    grid-gap: 1em;
    align-items: center;

    grid-template-columns: 1.5fr repeat(3, 1fr);

    @media screen and (max-width: 940px) {
        grid-template-columns: 1.5fr repeat(3, 1fr);
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1.5fr repeat(2, 1fr);

        & > *:nth-child(3) {
            display: none;
        }
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1.5fr repeat(2, 1fr);
    }
`;

const SortText = styled.button<{ active: boolean }>`
    cursor: pointer;
    font-weight: ${({ active }) => (active ? 500 : 400)};
    margin-right: 0.75rem !important;
    border: none;
    background-color: transparent;
    font-size: 1rem;
    padding: 0px;
    color: ${({ active, theme }) => (active ? theme.text1 : theme.text3)};
    outline: none;
    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

const SORT_FIELD = {
    amountUSD: 'amountUSD',
    timestamp: 'timestamp',
    sender: 'sender',
};

const DataRow = ({ transaction, color }: { transaction: BalancerJoinExitFragment; color?: string }) => {
    const [activeNetwork] = useActiveNetworkVersion();
    const theme = useTheme();
    const tokens: { address: string; amount: number }[] = [];

    for (let i = 0; i < transaction.amounts.length; i++) {
        const amount = parseFloat(transaction.amounts[i]);
        if (amount > 0) {
            tokens.push({ address: transaction.pool.tokensList[i], amount });
        }
    }

    return (
        <ResponsiveGrid>
            <ExternalLink href={getEtherscanLink(1, transaction.tx, 'transaction', activeNetwork)}>
                <Label color={color ?? theme.blue1} fontWeight={400}>
                    {transaction.type === 'Join' ? `Invest ` : 'Withdraw'}
                    <span style={{ marginLeft: '6px' }}>
                        <PoolCurrencyLogo tokens={tokens} />
                    </span>
                </Label>
            </ExternalLink>
            <Label end={1} fontWeight={400}>
                {formatDollarAmount(parseFloat(transaction.valueUSD ? transaction.valueUSD : '0'))}
            </Label>

            <Label end={1} fontWeight={400}>
                <ExternalLink
                    href={getEtherscanLink(1, transaction.user.id, 'address', activeNetwork)}
                    style={{ color: color ?? theme.blue1 }}
                >
                    {shortenAddress(transaction.user.id)}
                </ExternalLink>
            </Label>
            <Label end={1} fontWeight={400}>
                {formatTime(`${transaction.timestamp}`)}
            </Label>
        </ResponsiveGrid>
    );
};

export default function JoinExitTable({
    transactions,
    maxItems = 10,
    color,
}: {
    transactions: BalancerJoinExitFragment[];
    maxItems?: number;
    color?: string;
}) {
    // theming
    const theme = useTheme();

    // for sorting
    const [sortField, setSortField] = useState(SORT_FIELD.timestamp);
    const [sortDirection, setSortDirection] = useState<boolean>(true);

    // pagination
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);

    useEffect(() => {
        let extraPages = 1;
        if (transactions.length % maxItems === 0) {
            extraPages = 0;
        }
        setMaxPage(Math.floor(transactions.length / maxItems) + extraPages);
    }, [maxItems, transactions]);

    const sortedTransactions = useMemo(() => {
        return transactions
            ? transactions
                  .slice()
                  .sort((a, b) => {
                      if (a && b && sortField as keyof BalancerJoinExitFragment !== null && sortField as keyof BalancerJoinExitFragment !== undefined) {
                          return a[sortField as keyof BalancerJoinExitFragment] >
                              b[sortField as keyof BalancerJoinExitFragment]
                              ? (sortDirection ? -1 : 1) * 1
                              : (sortDirection ? -1 : 1) * -1;
                      } else {
                          return -1;
                      }
                  })
                  .slice(maxItems * (page - 1), page * maxItems)
            : [];
    }, [transactions, maxItems, page, sortField, sortDirection]);

    const handleSort = useCallback(
        (newField: string) => {
            setSortField(newField);
            setSortDirection(sortField !== newField ? true : !sortDirection);
        },
        [sortDirection, sortField],
    );

    const arrow = useCallback(
        (field: string) => {
            return sortField === field ? (!sortDirection ? '↑' : '↓') : '';
        },
        [sortDirection, sortField],
    );

    if (!transactions) {
        return <Loader />;
    }

    return (
        <Wrapper>
            <AutoColumn gap="12px">
                <ResponsiveGrid>
                    <RowFixed></RowFixed>
                    <ClickableText color={theme.text2} onClick={() => handleSort(SORT_FIELD.amountUSD)} end={1}>
                        Total Value {arrow(SORT_FIELD.amountUSD)}
                    </ClickableText>
                    <ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.sender)}>
                        Account {arrow(SORT_FIELD.sender)}
                    </ClickableText>
                    <ClickableText color={theme.text2} end={1} onClick={() => handleSort(SORT_FIELD.timestamp)}>
                        Time {arrow(SORT_FIELD.timestamp)}
                    </ClickableText>
                </ResponsiveGrid>
                <Break />

                {sortedTransactions.map((transaction, i) => {
                    if (transaction) {
                        return (
                            <React.Fragment key={i}>
                                <DataRow transaction={transaction} color={color} />
                                <Break />
                            </React.Fragment>
                        );
                    }
                    return null;
                })}
                {sortedTransactions.length === 0 ? <TYPE.main>No Transactions</TYPE.main> : undefined}
                <PageButtons>
                    <div
                        onClick={() => {
                            setPage(page === 1 ? page : page - 1);
                        }}
                    >
                        <Arrow faded={page === 1 ? true : false}>←</Arrow>
                    </div>
                    <TYPE.body>{'Page ' + page + ' of ' + maxPage}</TYPE.body>
                    <div
                        onClick={() => {
                            setPage(page === maxPage ? page : page + 1);
                        }}
                    >
                        <Arrow faded={page === maxPage ? true : false}>→</Arrow>
                    </div>
                </PageButtons>
            </AutoColumn>
        </Wrapper>
    );
}
