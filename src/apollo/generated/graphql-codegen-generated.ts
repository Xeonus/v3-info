/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    BigDecimal: string;
    BigInt: string;
    Bytes: string;
}

export interface AmpUpdate {
    __typename: 'AmpUpdate';
    endAmp: Scalars['BigInt'];
    endTimestamp: Scalars['Int'];
    id: Scalars['ID'];
    poolId: Pool;
    scheduledTimestamp: Scalars['Int'];
    startAmp: Scalars['BigInt'];
    startTimestamp: Scalars['Int'];
}

export interface AmpUpdate_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    endAmp?: Maybe<Scalars['BigInt']>;
    endAmp_gt?: Maybe<Scalars['BigInt']>;
    endAmp_gte?: Maybe<Scalars['BigInt']>;
    endAmp_in?: Maybe<Array<Scalars['BigInt']>>;
    endAmp_lt?: Maybe<Scalars['BigInt']>;
    endAmp_lte?: Maybe<Scalars['BigInt']>;
    endAmp_not?: Maybe<Scalars['BigInt']>;
    endAmp_not_in?: Maybe<Array<Scalars['BigInt']>>;
    endTimestamp?: Maybe<Scalars['Int']>;
    endTimestamp_gt?: Maybe<Scalars['Int']>;
    endTimestamp_gte?: Maybe<Scalars['Int']>;
    endTimestamp_in?: Maybe<Array<Scalars['Int']>>;
    endTimestamp_lt?: Maybe<Scalars['Int']>;
    endTimestamp_lte?: Maybe<Scalars['Int']>;
    endTimestamp_not?: Maybe<Scalars['Int']>;
    endTimestamp_not_in?: Maybe<Array<Scalars['Int']>>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    poolId?: Maybe<Scalars['String']>;
    poolId_?: Maybe<Pool_Filter>;
    poolId_contains?: Maybe<Scalars['String']>;
    poolId_contains_nocase?: Maybe<Scalars['String']>;
    poolId_ends_with?: Maybe<Scalars['String']>;
    poolId_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_gt?: Maybe<Scalars['String']>;
    poolId_gte?: Maybe<Scalars['String']>;
    poolId_in?: Maybe<Array<Scalars['String']>>;
    poolId_lt?: Maybe<Scalars['String']>;
    poolId_lte?: Maybe<Scalars['String']>;
    poolId_not?: Maybe<Scalars['String']>;
    poolId_not_contains?: Maybe<Scalars['String']>;
    poolId_not_contains_nocase?: Maybe<Scalars['String']>;
    poolId_not_ends_with?: Maybe<Scalars['String']>;
    poolId_not_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_not_in?: Maybe<Array<Scalars['String']>>;
    poolId_not_starts_with?: Maybe<Scalars['String']>;
    poolId_not_starts_with_nocase?: Maybe<Scalars['String']>;
    poolId_starts_with?: Maybe<Scalars['String']>;
    poolId_starts_with_nocase?: Maybe<Scalars['String']>;
    scheduledTimestamp?: Maybe<Scalars['Int']>;
    scheduledTimestamp_gt?: Maybe<Scalars['Int']>;
    scheduledTimestamp_gte?: Maybe<Scalars['Int']>;
    scheduledTimestamp_in?: Maybe<Array<Scalars['Int']>>;
    scheduledTimestamp_lt?: Maybe<Scalars['Int']>;
    scheduledTimestamp_lte?: Maybe<Scalars['Int']>;
    scheduledTimestamp_not?: Maybe<Scalars['Int']>;
    scheduledTimestamp_not_in?: Maybe<Array<Scalars['Int']>>;
    startAmp?: Maybe<Scalars['BigInt']>;
    startAmp_gt?: Maybe<Scalars['BigInt']>;
    startAmp_gte?: Maybe<Scalars['BigInt']>;
    startAmp_in?: Maybe<Array<Scalars['BigInt']>>;
    startAmp_lt?: Maybe<Scalars['BigInt']>;
    startAmp_lte?: Maybe<Scalars['BigInt']>;
    startAmp_not?: Maybe<Scalars['BigInt']>;
    startAmp_not_in?: Maybe<Array<Scalars['BigInt']>>;
    startTimestamp?: Maybe<Scalars['Int']>;
    startTimestamp_gt?: Maybe<Scalars['Int']>;
    startTimestamp_gte?: Maybe<Scalars['Int']>;
    startTimestamp_in?: Maybe<Array<Scalars['Int']>>;
    startTimestamp_lt?: Maybe<Scalars['Int']>;
    startTimestamp_lte?: Maybe<Scalars['Int']>;
    startTimestamp_not?: Maybe<Scalars['Int']>;
    startTimestamp_not_in?: Maybe<Array<Scalars['Int']>>;
}

export type AmpUpdate_OrderBy =
    | 'endAmp'
    | 'endTimestamp'
    | 'id'
    | 'poolId'
    | 'scheduledTimestamp'
    | 'startAmp'
    | 'startTimestamp';

export interface Balancer {
    __typename: 'Balancer';
    id: Scalars['ID'];
    poolCount: Scalars['Int'];
    pools?: Maybe<Array<Pool>>;
    totalLiquidity: Scalars['BigDecimal'];
    totalSwapCount: Scalars['BigInt'];
    totalSwapFee: Scalars['BigDecimal'];
    totalSwapVolume: Scalars['BigDecimal'];
}

export interface BalancerPoolsArgs {
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Pool_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<Pool_Filter>;
}

export interface BalancerSnapshot {
    __typename: 'BalancerSnapshot';
    id: Scalars['ID'];
    poolCount: Scalars['Int'];
    timestamp: Scalars['Int'];
    totalLiquidity: Scalars['BigDecimal'];
    totalSwapCount: Scalars['BigInt'];
    totalSwapFee: Scalars['BigDecimal'];
    totalSwapVolume: Scalars['BigDecimal'];
    vault: Balancer;
}

export interface BalancerSnapshot_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    poolCount?: Maybe<Scalars['Int']>;
    poolCount_gt?: Maybe<Scalars['Int']>;
    poolCount_gte?: Maybe<Scalars['Int']>;
    poolCount_in?: Maybe<Array<Scalars['Int']>>;
    poolCount_lt?: Maybe<Scalars['Int']>;
    poolCount_lte?: Maybe<Scalars['Int']>;
    poolCount_not?: Maybe<Scalars['Int']>;
    poolCount_not_in?: Maybe<Array<Scalars['Int']>>;
    timestamp?: Maybe<Scalars['Int']>;
    timestamp_gt?: Maybe<Scalars['Int']>;
    timestamp_gte?: Maybe<Scalars['Int']>;
    timestamp_in?: Maybe<Array<Scalars['Int']>>;
    timestamp_lt?: Maybe<Scalars['Int']>;
    timestamp_lte?: Maybe<Scalars['Int']>;
    timestamp_not?: Maybe<Scalars['Int']>;
    timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
    totalLiquidity?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_not?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapCount?: Maybe<Scalars['BigInt']>;
    totalSwapCount_gt?: Maybe<Scalars['BigInt']>;
    totalSwapCount_gte?: Maybe<Scalars['BigInt']>;
    totalSwapCount_in?: Maybe<Array<Scalars['BigInt']>>;
    totalSwapCount_lt?: Maybe<Scalars['BigInt']>;
    totalSwapCount_lte?: Maybe<Scalars['BigInt']>;
    totalSwapCount_not?: Maybe<Scalars['BigInt']>;
    totalSwapCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
    totalSwapFee?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_gt?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_gte?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapFee_lt?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_lte?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_not?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapVolume?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_gt?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_gte?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapVolume_lt?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_lte?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_not?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    vault?: Maybe<Scalars['String']>;
    vault_?: Maybe<Balancer_Filter>;
    vault_contains?: Maybe<Scalars['String']>;
    vault_contains_nocase?: Maybe<Scalars['String']>;
    vault_ends_with?: Maybe<Scalars['String']>;
    vault_ends_with_nocase?: Maybe<Scalars['String']>;
    vault_gt?: Maybe<Scalars['String']>;
    vault_gte?: Maybe<Scalars['String']>;
    vault_in?: Maybe<Array<Scalars['String']>>;
    vault_lt?: Maybe<Scalars['String']>;
    vault_lte?: Maybe<Scalars['String']>;
    vault_not?: Maybe<Scalars['String']>;
    vault_not_contains?: Maybe<Scalars['String']>;
    vault_not_contains_nocase?: Maybe<Scalars['String']>;
    vault_not_ends_with?: Maybe<Scalars['String']>;
    vault_not_ends_with_nocase?: Maybe<Scalars['String']>;
    vault_not_in?: Maybe<Array<Scalars['String']>>;
    vault_not_starts_with?: Maybe<Scalars['String']>;
    vault_not_starts_with_nocase?: Maybe<Scalars['String']>;
    vault_starts_with?: Maybe<Scalars['String']>;
    vault_starts_with_nocase?: Maybe<Scalars['String']>;
}

export type BalancerSnapshot_OrderBy =
    | 'id'
    | 'poolCount'
    | 'timestamp'
    | 'totalLiquidity'
    | 'totalSwapCount'
    | 'totalSwapFee'
    | 'totalSwapVolume'
    | 'vault';

export interface Balancer_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    poolCount?: Maybe<Scalars['Int']>;
    poolCount_gt?: Maybe<Scalars['Int']>;
    poolCount_gte?: Maybe<Scalars['Int']>;
    poolCount_in?: Maybe<Array<Scalars['Int']>>;
    poolCount_lt?: Maybe<Scalars['Int']>;
    poolCount_lte?: Maybe<Scalars['Int']>;
    poolCount_not?: Maybe<Scalars['Int']>;
    poolCount_not_in?: Maybe<Array<Scalars['Int']>>;
    pools_?: Maybe<Pool_Filter>;
    totalLiquidity?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_not?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapCount?: Maybe<Scalars['BigInt']>;
    totalSwapCount_gt?: Maybe<Scalars['BigInt']>;
    totalSwapCount_gte?: Maybe<Scalars['BigInt']>;
    totalSwapCount_in?: Maybe<Array<Scalars['BigInt']>>;
    totalSwapCount_lt?: Maybe<Scalars['BigInt']>;
    totalSwapCount_lte?: Maybe<Scalars['BigInt']>;
    totalSwapCount_not?: Maybe<Scalars['BigInt']>;
    totalSwapCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
    totalSwapFee?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_gt?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_gte?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapFee_lt?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_lte?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_not?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapVolume?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_gt?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_gte?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapVolume_lt?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_lte?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_not?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
}

export type Balancer_OrderBy =
    | 'id'
    | 'poolCount'
    | 'pools'
    | 'totalLiquidity'
    | 'totalSwapCount'
    | 'totalSwapFee'
    | 'totalSwapVolume';

export interface Block {
    __typename: 'Block';
    author?: Maybe<Scalars['String']>;
    difficulty?: Maybe<Scalars['BigInt']>;
    gasLimit?: Maybe<Scalars['BigInt']>;
    gasUsed?: Maybe<Scalars['BigInt']>;
    id: Scalars['ID'];
    number: Scalars['BigInt'];
    parentHash?: Maybe<Scalars['String']>;
    receiptsRoot?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['BigInt']>;
    stateRoot?: Maybe<Scalars['String']>;
    timestamp: Scalars['BigInt'];
    totalDifficulty?: Maybe<Scalars['BigInt']>;
    transactionsRoot?: Maybe<Scalars['String']>;
    unclesHash?: Maybe<Scalars['String']>;
}

export interface BlockChangedFilter {
    number_gte: Scalars['Int'];
}

export interface Block_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    author?: Maybe<Scalars['String']>;
    author_contains?: Maybe<Scalars['String']>;
    author_contains_nocase?: Maybe<Scalars['String']>;
    author_ends_with?: Maybe<Scalars['String']>;
    author_ends_with_nocase?: Maybe<Scalars['String']>;
    author_gt?: Maybe<Scalars['String']>;
    author_gte?: Maybe<Scalars['String']>;
    author_in?: Maybe<Array<Scalars['String']>>;
    author_lt?: Maybe<Scalars['String']>;
    author_lte?: Maybe<Scalars['String']>;
    author_not?: Maybe<Scalars['String']>;
    author_not_contains?: Maybe<Scalars['String']>;
    author_not_contains_nocase?: Maybe<Scalars['String']>;
    author_not_ends_with?: Maybe<Scalars['String']>;
    author_not_ends_with_nocase?: Maybe<Scalars['String']>;
    author_not_in?: Maybe<Array<Scalars['String']>>;
    author_not_starts_with?: Maybe<Scalars['String']>;
    author_not_starts_with_nocase?: Maybe<Scalars['String']>;
    author_starts_with?: Maybe<Scalars['String']>;
    author_starts_with_nocase?: Maybe<Scalars['String']>;
    difficulty?: Maybe<Scalars['BigInt']>;
    difficulty_gt?: Maybe<Scalars['BigInt']>;
    difficulty_gte?: Maybe<Scalars['BigInt']>;
    difficulty_in?: Maybe<Array<Scalars['BigInt']>>;
    difficulty_lt?: Maybe<Scalars['BigInt']>;
    difficulty_lte?: Maybe<Scalars['BigInt']>;
    difficulty_not?: Maybe<Scalars['BigInt']>;
    difficulty_not_in?: Maybe<Array<Scalars['BigInt']>>;
    gasLimit?: Maybe<Scalars['BigInt']>;
    gasLimit_gt?: Maybe<Scalars['BigInt']>;
    gasLimit_gte?: Maybe<Scalars['BigInt']>;
    gasLimit_in?: Maybe<Array<Scalars['BigInt']>>;
    gasLimit_lt?: Maybe<Scalars['BigInt']>;
    gasLimit_lte?: Maybe<Scalars['BigInt']>;
    gasLimit_not?: Maybe<Scalars['BigInt']>;
    gasLimit_not_in?: Maybe<Array<Scalars['BigInt']>>;
    gasUsed?: Maybe<Scalars['BigInt']>;
    gasUsed_gt?: Maybe<Scalars['BigInt']>;
    gasUsed_gte?: Maybe<Scalars['BigInt']>;
    gasUsed_in?: Maybe<Array<Scalars['BigInt']>>;
    gasUsed_lt?: Maybe<Scalars['BigInt']>;
    gasUsed_lte?: Maybe<Scalars['BigInt']>;
    gasUsed_not?: Maybe<Scalars['BigInt']>;
    gasUsed_not_in?: Maybe<Array<Scalars['BigInt']>>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    number?: Maybe<Scalars['BigInt']>;
    number_gt?: Maybe<Scalars['BigInt']>;
    number_gte?: Maybe<Scalars['BigInt']>;
    number_in?: Maybe<Array<Scalars['BigInt']>>;
    number_lt?: Maybe<Scalars['BigInt']>;
    number_lte?: Maybe<Scalars['BigInt']>;
    number_not?: Maybe<Scalars['BigInt']>;
    number_not_in?: Maybe<Array<Scalars['BigInt']>>;
    parentHash?: Maybe<Scalars['String']>;
    parentHash_contains?: Maybe<Scalars['String']>;
    parentHash_contains_nocase?: Maybe<Scalars['String']>;
    parentHash_ends_with?: Maybe<Scalars['String']>;
    parentHash_ends_with_nocase?: Maybe<Scalars['String']>;
    parentHash_gt?: Maybe<Scalars['String']>;
    parentHash_gte?: Maybe<Scalars['String']>;
    parentHash_in?: Maybe<Array<Scalars['String']>>;
    parentHash_lt?: Maybe<Scalars['String']>;
    parentHash_lte?: Maybe<Scalars['String']>;
    parentHash_not?: Maybe<Scalars['String']>;
    parentHash_not_contains?: Maybe<Scalars['String']>;
    parentHash_not_contains_nocase?: Maybe<Scalars['String']>;
    parentHash_not_ends_with?: Maybe<Scalars['String']>;
    parentHash_not_ends_with_nocase?: Maybe<Scalars['String']>;
    parentHash_not_in?: Maybe<Array<Scalars['String']>>;
    parentHash_not_starts_with?: Maybe<Scalars['String']>;
    parentHash_not_starts_with_nocase?: Maybe<Scalars['String']>;
    parentHash_starts_with?: Maybe<Scalars['String']>;
    parentHash_starts_with_nocase?: Maybe<Scalars['String']>;
    receiptsRoot?: Maybe<Scalars['String']>;
    receiptsRoot_contains?: Maybe<Scalars['String']>;
    receiptsRoot_contains_nocase?: Maybe<Scalars['String']>;
    receiptsRoot_ends_with?: Maybe<Scalars['String']>;
    receiptsRoot_ends_with_nocase?: Maybe<Scalars['String']>;
    receiptsRoot_gt?: Maybe<Scalars['String']>;
    receiptsRoot_gte?: Maybe<Scalars['String']>;
    receiptsRoot_in?: Maybe<Array<Scalars['String']>>;
    receiptsRoot_lt?: Maybe<Scalars['String']>;
    receiptsRoot_lte?: Maybe<Scalars['String']>;
    receiptsRoot_not?: Maybe<Scalars['String']>;
    receiptsRoot_not_contains?: Maybe<Scalars['String']>;
    receiptsRoot_not_contains_nocase?: Maybe<Scalars['String']>;
    receiptsRoot_not_ends_with?: Maybe<Scalars['String']>;
    receiptsRoot_not_ends_with_nocase?: Maybe<Scalars['String']>;
    receiptsRoot_not_in?: Maybe<Array<Scalars['String']>>;
    receiptsRoot_not_starts_with?: Maybe<Scalars['String']>;
    receiptsRoot_not_starts_with_nocase?: Maybe<Scalars['String']>;
    receiptsRoot_starts_with?: Maybe<Scalars['String']>;
    receiptsRoot_starts_with_nocase?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['BigInt']>;
    size_gt?: Maybe<Scalars['BigInt']>;
    size_gte?: Maybe<Scalars['BigInt']>;
    size_in?: Maybe<Array<Scalars['BigInt']>>;
    size_lt?: Maybe<Scalars['BigInt']>;
    size_lte?: Maybe<Scalars['BigInt']>;
    size_not?: Maybe<Scalars['BigInt']>;
    size_not_in?: Maybe<Array<Scalars['BigInt']>>;
    stateRoot?: Maybe<Scalars['String']>;
    stateRoot_contains?: Maybe<Scalars['String']>;
    stateRoot_contains_nocase?: Maybe<Scalars['String']>;
    stateRoot_ends_with?: Maybe<Scalars['String']>;
    stateRoot_ends_with_nocase?: Maybe<Scalars['String']>;
    stateRoot_gt?: Maybe<Scalars['String']>;
    stateRoot_gte?: Maybe<Scalars['String']>;
    stateRoot_in?: Maybe<Array<Scalars['String']>>;
    stateRoot_lt?: Maybe<Scalars['String']>;
    stateRoot_lte?: Maybe<Scalars['String']>;
    stateRoot_not?: Maybe<Scalars['String']>;
    stateRoot_not_contains?: Maybe<Scalars['String']>;
    stateRoot_not_contains_nocase?: Maybe<Scalars['String']>;
    stateRoot_not_ends_with?: Maybe<Scalars['String']>;
    stateRoot_not_ends_with_nocase?: Maybe<Scalars['String']>;
    stateRoot_not_in?: Maybe<Array<Scalars['String']>>;
    stateRoot_not_starts_with?: Maybe<Scalars['String']>;
    stateRoot_not_starts_with_nocase?: Maybe<Scalars['String']>;
    stateRoot_starts_with?: Maybe<Scalars['String']>;
    stateRoot_starts_with_nocase?: Maybe<Scalars['String']>;
    timestamp?: Maybe<Scalars['BigInt']>;
    timestamp_gt?: Maybe<Scalars['BigInt']>;
    timestamp_gte?: Maybe<Scalars['BigInt']>;
    timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: Maybe<Scalars['BigInt']>;
    timestamp_lte?: Maybe<Scalars['BigInt']>;
    timestamp_not?: Maybe<Scalars['BigInt']>;
    timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
    totalDifficulty?: Maybe<Scalars['BigInt']>;
    totalDifficulty_gt?: Maybe<Scalars['BigInt']>;
    totalDifficulty_gte?: Maybe<Scalars['BigInt']>;
    totalDifficulty_in?: Maybe<Array<Scalars['BigInt']>>;
    totalDifficulty_lt?: Maybe<Scalars['BigInt']>;
    totalDifficulty_lte?: Maybe<Scalars['BigInt']>;
    totalDifficulty_not?: Maybe<Scalars['BigInt']>;
    totalDifficulty_not_in?: Maybe<Array<Scalars['BigInt']>>;
    transactionsRoot?: Maybe<Scalars['String']>;
    transactionsRoot_contains?: Maybe<Scalars['String']>;
    transactionsRoot_contains_nocase?: Maybe<Scalars['String']>;
    transactionsRoot_ends_with?: Maybe<Scalars['String']>;
    transactionsRoot_ends_with_nocase?: Maybe<Scalars['String']>;
    transactionsRoot_gt?: Maybe<Scalars['String']>;
    transactionsRoot_gte?: Maybe<Scalars['String']>;
    transactionsRoot_in?: Maybe<Array<Scalars['String']>>;
    transactionsRoot_lt?: Maybe<Scalars['String']>;
    transactionsRoot_lte?: Maybe<Scalars['String']>;
    transactionsRoot_not?: Maybe<Scalars['String']>;
    transactionsRoot_not_contains?: Maybe<Scalars['String']>;
    transactionsRoot_not_contains_nocase?: Maybe<Scalars['String']>;
    transactionsRoot_not_ends_with?: Maybe<Scalars['String']>;
    transactionsRoot_not_ends_with_nocase?: Maybe<Scalars['String']>;
    transactionsRoot_not_in?: Maybe<Array<Scalars['String']>>;
    transactionsRoot_not_starts_with?: Maybe<Scalars['String']>;
    transactionsRoot_not_starts_with_nocase?: Maybe<Scalars['String']>;
    transactionsRoot_starts_with?: Maybe<Scalars['String']>;
    transactionsRoot_starts_with_nocase?: Maybe<Scalars['String']>;
    unclesHash?: Maybe<Scalars['String']>;
    unclesHash_contains?: Maybe<Scalars['String']>;
    unclesHash_contains_nocase?: Maybe<Scalars['String']>;
    unclesHash_ends_with?: Maybe<Scalars['String']>;
    unclesHash_ends_with_nocase?: Maybe<Scalars['String']>;
    unclesHash_gt?: Maybe<Scalars['String']>;
    unclesHash_gte?: Maybe<Scalars['String']>;
    unclesHash_in?: Maybe<Array<Scalars['String']>>;
    unclesHash_lt?: Maybe<Scalars['String']>;
    unclesHash_lte?: Maybe<Scalars['String']>;
    unclesHash_not?: Maybe<Scalars['String']>;
    unclesHash_not_contains?: Maybe<Scalars['String']>;
    unclesHash_not_contains_nocase?: Maybe<Scalars['String']>;
    unclesHash_not_ends_with?: Maybe<Scalars['String']>;
    unclesHash_not_ends_with_nocase?: Maybe<Scalars['String']>;
    unclesHash_not_in?: Maybe<Array<Scalars['String']>>;
    unclesHash_not_starts_with?: Maybe<Scalars['String']>;
    unclesHash_not_starts_with_nocase?: Maybe<Scalars['String']>;
    unclesHash_starts_with?: Maybe<Scalars['String']>;
    unclesHash_starts_with_nocase?: Maybe<Scalars['String']>;
}

export interface Block_Height {
    hash?: Maybe<Scalars['Bytes']>;
    number?: Maybe<Scalars['Int']>;
    number_gte?: Maybe<Scalars['Int']>;
}

export type Block_OrderBy =
    | 'author'
    | 'difficulty'
    | 'gasLimit'
    | 'gasUsed'
    | 'id'
    | 'number'
    | 'parentHash'
    | 'receiptsRoot'
    | 'size'
    | 'stateRoot'
    | 'timestamp'
    | 'totalDifficulty'
    | 'transactionsRoot'
    | 'unclesHash';

export interface GradualWeightUpdate {
    __typename: 'GradualWeightUpdate';
    endTimestamp: Scalars['Int'];
    endWeights: Array<Scalars['BigInt']>;
    id: Scalars['ID'];
    poolId: Pool;
    scheduledTimestamp: Scalars['Int'];
    startTimestamp: Scalars['Int'];
    startWeights: Array<Scalars['BigInt']>;
}

export interface GradualWeightUpdate_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    endTimestamp?: Maybe<Scalars['Int']>;
    endTimestamp_gt?: Maybe<Scalars['Int']>;
    endTimestamp_gte?: Maybe<Scalars['Int']>;
    endTimestamp_in?: Maybe<Array<Scalars['Int']>>;
    endTimestamp_lt?: Maybe<Scalars['Int']>;
    endTimestamp_lte?: Maybe<Scalars['Int']>;
    endTimestamp_not?: Maybe<Scalars['Int']>;
    endTimestamp_not_in?: Maybe<Array<Scalars['Int']>>;
    endWeights?: Maybe<Array<Scalars['BigInt']>>;
    endWeights_contains?: Maybe<Array<Scalars['BigInt']>>;
    endWeights_contains_nocase?: Maybe<Array<Scalars['BigInt']>>;
    endWeights_not?: Maybe<Array<Scalars['BigInt']>>;
    endWeights_not_contains?: Maybe<Array<Scalars['BigInt']>>;
    endWeights_not_contains_nocase?: Maybe<Array<Scalars['BigInt']>>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    poolId?: Maybe<Scalars['String']>;
    poolId_?: Maybe<Pool_Filter>;
    poolId_contains?: Maybe<Scalars['String']>;
    poolId_contains_nocase?: Maybe<Scalars['String']>;
    poolId_ends_with?: Maybe<Scalars['String']>;
    poolId_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_gt?: Maybe<Scalars['String']>;
    poolId_gte?: Maybe<Scalars['String']>;
    poolId_in?: Maybe<Array<Scalars['String']>>;
    poolId_lt?: Maybe<Scalars['String']>;
    poolId_lte?: Maybe<Scalars['String']>;
    poolId_not?: Maybe<Scalars['String']>;
    poolId_not_contains?: Maybe<Scalars['String']>;
    poolId_not_contains_nocase?: Maybe<Scalars['String']>;
    poolId_not_ends_with?: Maybe<Scalars['String']>;
    poolId_not_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_not_in?: Maybe<Array<Scalars['String']>>;
    poolId_not_starts_with?: Maybe<Scalars['String']>;
    poolId_not_starts_with_nocase?: Maybe<Scalars['String']>;
    poolId_starts_with?: Maybe<Scalars['String']>;
    poolId_starts_with_nocase?: Maybe<Scalars['String']>;
    scheduledTimestamp?: Maybe<Scalars['Int']>;
    scheduledTimestamp_gt?: Maybe<Scalars['Int']>;
    scheduledTimestamp_gte?: Maybe<Scalars['Int']>;
    scheduledTimestamp_in?: Maybe<Array<Scalars['Int']>>;
    scheduledTimestamp_lt?: Maybe<Scalars['Int']>;
    scheduledTimestamp_lte?: Maybe<Scalars['Int']>;
    scheduledTimestamp_not?: Maybe<Scalars['Int']>;
    scheduledTimestamp_not_in?: Maybe<Array<Scalars['Int']>>;
    startTimestamp?: Maybe<Scalars['Int']>;
    startTimestamp_gt?: Maybe<Scalars['Int']>;
    startTimestamp_gte?: Maybe<Scalars['Int']>;
    startTimestamp_in?: Maybe<Array<Scalars['Int']>>;
    startTimestamp_lt?: Maybe<Scalars['Int']>;
    startTimestamp_lte?: Maybe<Scalars['Int']>;
    startTimestamp_not?: Maybe<Scalars['Int']>;
    startTimestamp_not_in?: Maybe<Array<Scalars['Int']>>;
    startWeights?: Maybe<Array<Scalars['BigInt']>>;
    startWeights_contains?: Maybe<Array<Scalars['BigInt']>>;
    startWeights_contains_nocase?: Maybe<Array<Scalars['BigInt']>>;
    startWeights_not?: Maybe<Array<Scalars['BigInt']>>;
    startWeights_not_contains?: Maybe<Array<Scalars['BigInt']>>;
    startWeights_not_contains_nocase?: Maybe<Array<Scalars['BigInt']>>;
}

export type GradualWeightUpdate_OrderBy =
    | 'endTimestamp'
    | 'endWeights'
    | 'id'
    | 'poolId'
    | 'scheduledTimestamp'
    | 'startTimestamp'
    | 'startWeights';

export type InvestType = 'Exit' | 'Join';

export interface Investment {
    __typename: 'Investment';
    amount: Scalars['BigDecimal'];
    assetManagerAddress: Scalars['Bytes'];
    id: Scalars['ID'];
    poolTokenId: PoolToken;
    timestamp: Scalars['Int'];
}

export interface Investment_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    amount?: Maybe<Scalars['BigDecimal']>;
    amount_gt?: Maybe<Scalars['BigDecimal']>;
    amount_gte?: Maybe<Scalars['BigDecimal']>;
    amount_in?: Maybe<Array<Scalars['BigDecimal']>>;
    amount_lt?: Maybe<Scalars['BigDecimal']>;
    amount_lte?: Maybe<Scalars['BigDecimal']>;
    amount_not?: Maybe<Scalars['BigDecimal']>;
    amount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    assetManagerAddress?: Maybe<Scalars['Bytes']>;
    assetManagerAddress_contains?: Maybe<Scalars['Bytes']>;
    assetManagerAddress_in?: Maybe<Array<Scalars['Bytes']>>;
    assetManagerAddress_not?: Maybe<Scalars['Bytes']>;
    assetManagerAddress_not_contains?: Maybe<Scalars['Bytes']>;
    assetManagerAddress_not_in?: Maybe<Array<Scalars['Bytes']>>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    poolTokenId?: Maybe<Scalars['String']>;
    poolTokenId_?: Maybe<PoolToken_Filter>;
    poolTokenId_contains?: Maybe<Scalars['String']>;
    poolTokenId_contains_nocase?: Maybe<Scalars['String']>;
    poolTokenId_ends_with?: Maybe<Scalars['String']>;
    poolTokenId_ends_with_nocase?: Maybe<Scalars['String']>;
    poolTokenId_gt?: Maybe<Scalars['String']>;
    poolTokenId_gte?: Maybe<Scalars['String']>;
    poolTokenId_in?: Maybe<Array<Scalars['String']>>;
    poolTokenId_lt?: Maybe<Scalars['String']>;
    poolTokenId_lte?: Maybe<Scalars['String']>;
    poolTokenId_not?: Maybe<Scalars['String']>;
    poolTokenId_not_contains?: Maybe<Scalars['String']>;
    poolTokenId_not_contains_nocase?: Maybe<Scalars['String']>;
    poolTokenId_not_ends_with?: Maybe<Scalars['String']>;
    poolTokenId_not_ends_with_nocase?: Maybe<Scalars['String']>;
    poolTokenId_not_in?: Maybe<Array<Scalars['String']>>;
    poolTokenId_not_starts_with?: Maybe<Scalars['String']>;
    poolTokenId_not_starts_with_nocase?: Maybe<Scalars['String']>;
    poolTokenId_starts_with?: Maybe<Scalars['String']>;
    poolTokenId_starts_with_nocase?: Maybe<Scalars['String']>;
    timestamp?: Maybe<Scalars['Int']>;
    timestamp_gt?: Maybe<Scalars['Int']>;
    timestamp_gte?: Maybe<Scalars['Int']>;
    timestamp_in?: Maybe<Array<Scalars['Int']>>;
    timestamp_lt?: Maybe<Scalars['Int']>;
    timestamp_lte?: Maybe<Scalars['Int']>;
    timestamp_not?: Maybe<Scalars['Int']>;
    timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
}

export type Investment_OrderBy = 'amount' | 'assetManagerAddress' | 'id' | 'poolTokenId' | 'timestamp';

export interface JoinExit {
    __typename: 'JoinExit';
    amounts: Array<Scalars['BigDecimal']>;
    id: Scalars['ID'];
    pool: Pool;
    sender: Scalars['Bytes'];
    timestamp: Scalars['Int'];
    tx: Scalars['Bytes'];
    type: InvestType;
    user: User;
    valueUSD: Scalars['BigDecimal'];
}

export interface JoinExit_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    amounts?: Maybe<Array<Scalars['BigDecimal']>>;
    amounts_contains?: Maybe<Array<Scalars['BigDecimal']>>;
    amounts_contains_nocase?: Maybe<Array<Scalars['BigDecimal']>>;
    amounts_not?: Maybe<Array<Scalars['BigDecimal']>>;
    amounts_not_contains?: Maybe<Array<Scalars['BigDecimal']>>;
    amounts_not_contains_nocase?: Maybe<Array<Scalars['BigDecimal']>>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    pool?: Maybe<Scalars['String']>;
    pool_?: Maybe<Pool_Filter>;
    pool_contains?: Maybe<Scalars['String']>;
    pool_contains_nocase?: Maybe<Scalars['String']>;
    pool_ends_with?: Maybe<Scalars['String']>;
    pool_ends_with_nocase?: Maybe<Scalars['String']>;
    pool_gt?: Maybe<Scalars['String']>;
    pool_gte?: Maybe<Scalars['String']>;
    pool_in?: Maybe<Array<Scalars['String']>>;
    pool_lt?: Maybe<Scalars['String']>;
    pool_lte?: Maybe<Scalars['String']>;
    pool_not?: Maybe<Scalars['String']>;
    pool_not_contains?: Maybe<Scalars['String']>;
    pool_not_contains_nocase?: Maybe<Scalars['String']>;
    pool_not_ends_with?: Maybe<Scalars['String']>;
    pool_not_ends_with_nocase?: Maybe<Scalars['String']>;
    pool_not_in?: Maybe<Array<Scalars['String']>>;
    pool_not_starts_with?: Maybe<Scalars['String']>;
    pool_not_starts_with_nocase?: Maybe<Scalars['String']>;
    pool_starts_with?: Maybe<Scalars['String']>;
    pool_starts_with_nocase?: Maybe<Scalars['String']>;
    sender?: Maybe<Scalars['Bytes']>;
    sender_contains?: Maybe<Scalars['Bytes']>;
    sender_in?: Maybe<Array<Scalars['Bytes']>>;
    sender_not?: Maybe<Scalars['Bytes']>;
    sender_not_contains?: Maybe<Scalars['Bytes']>;
    sender_not_in?: Maybe<Array<Scalars['Bytes']>>;
    timestamp?: Maybe<Scalars['Int']>;
    timestamp_gt?: Maybe<Scalars['Int']>;
    timestamp_gte?: Maybe<Scalars['Int']>;
    timestamp_in?: Maybe<Array<Scalars['Int']>>;
    timestamp_lt?: Maybe<Scalars['Int']>;
    timestamp_lte?: Maybe<Scalars['Int']>;
    timestamp_not?: Maybe<Scalars['Int']>;
    timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
    tx?: Maybe<Scalars['Bytes']>;
    tx_contains?: Maybe<Scalars['Bytes']>;
    tx_in?: Maybe<Array<Scalars['Bytes']>>;
    tx_not?: Maybe<Scalars['Bytes']>;
    tx_not_contains?: Maybe<Scalars['Bytes']>;
    tx_not_in?: Maybe<Array<Scalars['Bytes']>>;
    type?: Maybe<InvestType>;
    type_in?: Maybe<Array<InvestType>>;
    type_not?: Maybe<InvestType>;
    type_not_in?: Maybe<Array<InvestType>>;
    user?: Maybe<Scalars['String']>;
    user_?: Maybe<User_Filter>;
    user_contains?: Maybe<Scalars['String']>;
    user_contains_nocase?: Maybe<Scalars['String']>;
    user_ends_with?: Maybe<Scalars['String']>;
    user_ends_with_nocase?: Maybe<Scalars['String']>;
    user_gt?: Maybe<Scalars['String']>;
    user_gte?: Maybe<Scalars['String']>;
    user_in?: Maybe<Array<Scalars['String']>>;
    user_lt?: Maybe<Scalars['String']>;
    user_lte?: Maybe<Scalars['String']>;
    user_not?: Maybe<Scalars['String']>;
    user_not_contains?: Maybe<Scalars['String']>;
    user_not_contains_nocase?: Maybe<Scalars['String']>;
    user_not_ends_with?: Maybe<Scalars['String']>;
    user_not_ends_with_nocase?: Maybe<Scalars['String']>;
    user_not_in?: Maybe<Array<Scalars['String']>>;
    user_not_starts_with?: Maybe<Scalars['String']>;
    user_not_starts_with_nocase?: Maybe<Scalars['String']>;
    user_starts_with?: Maybe<Scalars['String']>;
    user_starts_with_nocase?: Maybe<Scalars['String']>;
    valueUSD?: Maybe<Scalars['BigDecimal']>;
    valueUSD_gt?: Maybe<Scalars['BigDecimal']>;
    valueUSD_gte?: Maybe<Scalars['BigDecimal']>;
    valueUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
    valueUSD_lt?: Maybe<Scalars['BigDecimal']>;
    valueUSD_lte?: Maybe<Scalars['BigDecimal']>;
    valueUSD_not?: Maybe<Scalars['BigDecimal']>;
    valueUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
}

export type JoinExit_OrderBy = 'amounts' | 'id' | 'pool' | 'sender' | 'timestamp' | 'tx' | 'type' | 'user' | 'valueUSD';

export interface LatestPrice {
    __typename: 'LatestPrice';
    asset: Scalars['Bytes'];
    block: Scalars['BigInt'];
    id: Scalars['ID'];
    poolId: Pool;
    price: Scalars['BigDecimal'];
    priceUSD: Scalars['BigDecimal'];
    pricingAsset: Scalars['Bytes'];
}

export interface LatestPrice_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    asset?: Maybe<Scalars['Bytes']>;
    asset_contains?: Maybe<Scalars['Bytes']>;
    asset_in?: Maybe<Array<Scalars['Bytes']>>;
    asset_not?: Maybe<Scalars['Bytes']>;
    asset_not_contains?: Maybe<Scalars['Bytes']>;
    asset_not_in?: Maybe<Array<Scalars['Bytes']>>;
    block?: Maybe<Scalars['BigInt']>;
    block_gt?: Maybe<Scalars['BigInt']>;
    block_gte?: Maybe<Scalars['BigInt']>;
    block_in?: Maybe<Array<Scalars['BigInt']>>;
    block_lt?: Maybe<Scalars['BigInt']>;
    block_lte?: Maybe<Scalars['BigInt']>;
    block_not?: Maybe<Scalars['BigInt']>;
    block_not_in?: Maybe<Array<Scalars['BigInt']>>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    poolId?: Maybe<Scalars['String']>;
    poolId_?: Maybe<Pool_Filter>;
    poolId_contains?: Maybe<Scalars['String']>;
    poolId_contains_nocase?: Maybe<Scalars['String']>;
    poolId_ends_with?: Maybe<Scalars['String']>;
    poolId_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_gt?: Maybe<Scalars['String']>;
    poolId_gte?: Maybe<Scalars['String']>;
    poolId_in?: Maybe<Array<Scalars['String']>>;
    poolId_lt?: Maybe<Scalars['String']>;
    poolId_lte?: Maybe<Scalars['String']>;
    poolId_not?: Maybe<Scalars['String']>;
    poolId_not_contains?: Maybe<Scalars['String']>;
    poolId_not_contains_nocase?: Maybe<Scalars['String']>;
    poolId_not_ends_with?: Maybe<Scalars['String']>;
    poolId_not_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_not_in?: Maybe<Array<Scalars['String']>>;
    poolId_not_starts_with?: Maybe<Scalars['String']>;
    poolId_not_starts_with_nocase?: Maybe<Scalars['String']>;
    poolId_starts_with?: Maybe<Scalars['String']>;
    poolId_starts_with_nocase?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['BigDecimal']>;
    priceUSD?: Maybe<Scalars['BigDecimal']>;
    priceUSD_gt?: Maybe<Scalars['BigDecimal']>;
    priceUSD_gte?: Maybe<Scalars['BigDecimal']>;
    priceUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
    priceUSD_lt?: Maybe<Scalars['BigDecimal']>;
    priceUSD_lte?: Maybe<Scalars['BigDecimal']>;
    priceUSD_not?: Maybe<Scalars['BigDecimal']>;
    priceUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    price_gt?: Maybe<Scalars['BigDecimal']>;
    price_gte?: Maybe<Scalars['BigDecimal']>;
    price_in?: Maybe<Array<Scalars['BigDecimal']>>;
    price_lt?: Maybe<Scalars['BigDecimal']>;
    price_lte?: Maybe<Scalars['BigDecimal']>;
    price_not?: Maybe<Scalars['BigDecimal']>;
    price_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    pricingAsset?: Maybe<Scalars['Bytes']>;
    pricingAsset_contains?: Maybe<Scalars['Bytes']>;
    pricingAsset_in?: Maybe<Array<Scalars['Bytes']>>;
    pricingAsset_not?: Maybe<Scalars['Bytes']>;
    pricingAsset_not_contains?: Maybe<Scalars['Bytes']>;
    pricingAsset_not_in?: Maybe<Array<Scalars['Bytes']>>;
}

export type LatestPrice_OrderBy = 'asset' | 'block' | 'id' | 'poolId' | 'price' | 'priceUSD' | 'pricingAsset';

/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc';

export interface Pool {
    __typename: 'Pool';
    address: Scalars['Bytes'];
    amp?: Maybe<Scalars['BigInt']>;
    baseToken?: Maybe<Scalars['Bytes']>;
    createTime: Scalars['Int'];
    expiryTime?: Maybe<Scalars['BigInt']>;
    factory?: Maybe<Scalars['Bytes']>;
    historicalValues?: Maybe<Array<PoolHistoricalLiquidity>>;
    holdersCount: Scalars['BigInt'];
    id: Scalars['ID'];
    lowerTarget?: Maybe<Scalars['BigDecimal']>;
    mainIndex?: Maybe<Scalars['Int']>;
    managementFee?: Maybe<Scalars['BigDecimal']>;
    name?: Maybe<Scalars['String']>;
    owner?: Maybe<Scalars['Bytes']>;
    poolType?: Maybe<Scalars['String']>;
    priceRateProviders?: Maybe<Array<PriceRateProvider>>;
    principalToken?: Maybe<Scalars['Bytes']>;
    shares?: Maybe<Array<PoolShare>>;
    strategyType: Scalars['Int'];
    swapEnabled: Scalars['Boolean'];
    swapFee: Scalars['BigDecimal'];
    swaps?: Maybe<Array<Swap>>;
    swapsCount: Scalars['BigInt'];
    symbol?: Maybe<Scalars['String']>;
    tokens?: Maybe<Array<PoolToken>>;
    tokensList: Array<Scalars['Bytes']>;
    totalLiquidity: Scalars['BigDecimal'];
    totalShares: Scalars['BigDecimal'];
    totalSwapFee: Scalars['BigDecimal'];
    totalSwapVolume: Scalars['BigDecimal'];
    totalWeight?: Maybe<Scalars['BigDecimal']>;
    tx?: Maybe<Scalars['Bytes']>;
    unitSeconds?: Maybe<Scalars['BigInt']>;
    upperTarget?: Maybe<Scalars['BigDecimal']>;
    vaultID: Balancer;
    weightUpdates?: Maybe<Array<GradualWeightUpdate>>;
    wrappedIndex?: Maybe<Scalars['Int']>;
}

export interface PoolHistoricalValuesArgs {
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PoolHistoricalLiquidity_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<PoolHistoricalLiquidity_Filter>;
}

export interface PoolPriceRateProvidersArgs {
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PriceRateProvider_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<PriceRateProvider_Filter>;
}

export interface PoolSharesArgs {
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PoolShare_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<PoolShare_Filter>;
}

export interface PoolSwapsArgs {
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Swap_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<Swap_Filter>;
}

export interface PoolTokensArgs {
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PoolToken_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<PoolToken_Filter>;
}

export interface PoolWeightUpdatesArgs {
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<GradualWeightUpdate_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<GradualWeightUpdate_Filter>;
}

export interface PoolHistoricalLiquidity {
    __typename: 'PoolHistoricalLiquidity';
    block: Scalars['BigInt'];
    id: Scalars['ID'];
    poolId: Pool;
    poolLiquidity: Scalars['BigDecimal'];
    poolLiquidityUSD: Scalars['BigDecimal'];
    poolShareValue: Scalars['BigDecimal'];
    poolTotalShares: Scalars['BigDecimal'];
    pricingAsset: Scalars['Bytes'];
    timestamp: Scalars['Int'];
}

export interface PoolHistoricalLiquidity_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    block?: Maybe<Scalars['BigInt']>;
    block_gt?: Maybe<Scalars['BigInt']>;
    block_gte?: Maybe<Scalars['BigInt']>;
    block_in?: Maybe<Array<Scalars['BigInt']>>;
    block_lt?: Maybe<Scalars['BigInt']>;
    block_lte?: Maybe<Scalars['BigInt']>;
    block_not?: Maybe<Scalars['BigInt']>;
    block_not_in?: Maybe<Array<Scalars['BigInt']>>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    poolId?: Maybe<Scalars['String']>;
    poolId_?: Maybe<Pool_Filter>;
    poolId_contains?: Maybe<Scalars['String']>;
    poolId_contains_nocase?: Maybe<Scalars['String']>;
    poolId_ends_with?: Maybe<Scalars['String']>;
    poolId_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_gt?: Maybe<Scalars['String']>;
    poolId_gte?: Maybe<Scalars['String']>;
    poolId_in?: Maybe<Array<Scalars['String']>>;
    poolId_lt?: Maybe<Scalars['String']>;
    poolId_lte?: Maybe<Scalars['String']>;
    poolId_not?: Maybe<Scalars['String']>;
    poolId_not_contains?: Maybe<Scalars['String']>;
    poolId_not_contains_nocase?: Maybe<Scalars['String']>;
    poolId_not_ends_with?: Maybe<Scalars['String']>;
    poolId_not_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_not_in?: Maybe<Array<Scalars['String']>>;
    poolId_not_starts_with?: Maybe<Scalars['String']>;
    poolId_not_starts_with_nocase?: Maybe<Scalars['String']>;
    poolId_starts_with?: Maybe<Scalars['String']>;
    poolId_starts_with_nocase?: Maybe<Scalars['String']>;
    poolLiquidity?: Maybe<Scalars['BigDecimal']>;
    poolLiquidityUSD?: Maybe<Scalars['BigDecimal']>;
    poolLiquidityUSD_gt?: Maybe<Scalars['BigDecimal']>;
    poolLiquidityUSD_gte?: Maybe<Scalars['BigDecimal']>;
    poolLiquidityUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
    poolLiquidityUSD_lt?: Maybe<Scalars['BigDecimal']>;
    poolLiquidityUSD_lte?: Maybe<Scalars['BigDecimal']>;
    poolLiquidityUSD_not?: Maybe<Scalars['BigDecimal']>;
    poolLiquidityUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    poolLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
    poolLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
    poolLiquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
    poolLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
    poolLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
    poolLiquidity_not?: Maybe<Scalars['BigDecimal']>;
    poolLiquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    poolShareValue?: Maybe<Scalars['BigDecimal']>;
    poolShareValue_gt?: Maybe<Scalars['BigDecimal']>;
    poolShareValue_gte?: Maybe<Scalars['BigDecimal']>;
    poolShareValue_in?: Maybe<Array<Scalars['BigDecimal']>>;
    poolShareValue_lt?: Maybe<Scalars['BigDecimal']>;
    poolShareValue_lte?: Maybe<Scalars['BigDecimal']>;
    poolShareValue_not?: Maybe<Scalars['BigDecimal']>;
    poolShareValue_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    poolTotalShares?: Maybe<Scalars['BigDecimal']>;
    poolTotalShares_gt?: Maybe<Scalars['BigDecimal']>;
    poolTotalShares_gte?: Maybe<Scalars['BigDecimal']>;
    poolTotalShares_in?: Maybe<Array<Scalars['BigDecimal']>>;
    poolTotalShares_lt?: Maybe<Scalars['BigDecimal']>;
    poolTotalShares_lte?: Maybe<Scalars['BigDecimal']>;
    poolTotalShares_not?: Maybe<Scalars['BigDecimal']>;
    poolTotalShares_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    pricingAsset?: Maybe<Scalars['Bytes']>;
    pricingAsset_contains?: Maybe<Scalars['Bytes']>;
    pricingAsset_in?: Maybe<Array<Scalars['Bytes']>>;
    pricingAsset_not?: Maybe<Scalars['Bytes']>;
    pricingAsset_not_contains?: Maybe<Scalars['Bytes']>;
    pricingAsset_not_in?: Maybe<Array<Scalars['Bytes']>>;
    timestamp?: Maybe<Scalars['Int']>;
    timestamp_gt?: Maybe<Scalars['Int']>;
    timestamp_gte?: Maybe<Scalars['Int']>;
    timestamp_in?: Maybe<Array<Scalars['Int']>>;
    timestamp_lt?: Maybe<Scalars['Int']>;
    timestamp_lte?: Maybe<Scalars['Int']>;
    timestamp_not?: Maybe<Scalars['Int']>;
    timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
}

export type PoolHistoricalLiquidity_OrderBy =
    | 'block'
    | 'id'
    | 'poolId'
    | 'poolLiquidity'
    | 'poolLiquidityUSD'
    | 'poolShareValue'
    | 'poolTotalShares'
    | 'pricingAsset'
    | 'timestamp';

export interface PoolShare {
    __typename: 'PoolShare';
    balance: Scalars['BigDecimal'];
    id: Scalars['ID'];
    poolId: Pool;
    userAddress: User;
}

export interface PoolShare_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    balance?: Maybe<Scalars['BigDecimal']>;
    balance_gt?: Maybe<Scalars['BigDecimal']>;
    balance_gte?: Maybe<Scalars['BigDecimal']>;
    balance_in?: Maybe<Array<Scalars['BigDecimal']>>;
    balance_lt?: Maybe<Scalars['BigDecimal']>;
    balance_lte?: Maybe<Scalars['BigDecimal']>;
    balance_not?: Maybe<Scalars['BigDecimal']>;
    balance_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    poolId?: Maybe<Scalars['String']>;
    poolId_?: Maybe<Pool_Filter>;
    poolId_contains?: Maybe<Scalars['String']>;
    poolId_contains_nocase?: Maybe<Scalars['String']>;
    poolId_ends_with?: Maybe<Scalars['String']>;
    poolId_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_gt?: Maybe<Scalars['String']>;
    poolId_gte?: Maybe<Scalars['String']>;
    poolId_in?: Maybe<Array<Scalars['String']>>;
    poolId_lt?: Maybe<Scalars['String']>;
    poolId_lte?: Maybe<Scalars['String']>;
    poolId_not?: Maybe<Scalars['String']>;
    poolId_not_contains?: Maybe<Scalars['String']>;
    poolId_not_contains_nocase?: Maybe<Scalars['String']>;
    poolId_not_ends_with?: Maybe<Scalars['String']>;
    poolId_not_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_not_in?: Maybe<Array<Scalars['String']>>;
    poolId_not_starts_with?: Maybe<Scalars['String']>;
    poolId_not_starts_with_nocase?: Maybe<Scalars['String']>;
    poolId_starts_with?: Maybe<Scalars['String']>;
    poolId_starts_with_nocase?: Maybe<Scalars['String']>;
    userAddress?: Maybe<Scalars['String']>;
    userAddress_?: Maybe<User_Filter>;
    userAddress_contains?: Maybe<Scalars['String']>;
    userAddress_contains_nocase?: Maybe<Scalars['String']>;
    userAddress_ends_with?: Maybe<Scalars['String']>;
    userAddress_ends_with_nocase?: Maybe<Scalars['String']>;
    userAddress_gt?: Maybe<Scalars['String']>;
    userAddress_gte?: Maybe<Scalars['String']>;
    userAddress_in?: Maybe<Array<Scalars['String']>>;
    userAddress_lt?: Maybe<Scalars['String']>;
    userAddress_lte?: Maybe<Scalars['String']>;
    userAddress_not?: Maybe<Scalars['String']>;
    userAddress_not_contains?: Maybe<Scalars['String']>;
    userAddress_not_contains_nocase?: Maybe<Scalars['String']>;
    userAddress_not_ends_with?: Maybe<Scalars['String']>;
    userAddress_not_ends_with_nocase?: Maybe<Scalars['String']>;
    userAddress_not_in?: Maybe<Array<Scalars['String']>>;
    userAddress_not_starts_with?: Maybe<Scalars['String']>;
    userAddress_not_starts_with_nocase?: Maybe<Scalars['String']>;
    userAddress_starts_with?: Maybe<Scalars['String']>;
    userAddress_starts_with_nocase?: Maybe<Scalars['String']>;
}

export type PoolShare_OrderBy = 'balance' | 'id' | 'poolId' | 'userAddress';

export interface PoolSnapshot {
    __typename: 'PoolSnapshot';
    amounts: Array<Scalars['BigDecimal']>;
    holdersCount: Scalars['BigInt'];
    id: Scalars['ID'];
    pool: Pool;
    swapFees: Scalars['BigDecimal'];
    swapVolume: Scalars['BigDecimal'];
    swapsCount: Scalars['BigInt'];
    timestamp: Scalars['Int'];
    totalLiquidity: Scalars['BigDecimal'];
    totalShares: Scalars['BigDecimal'];
    totalSwapFee: Scalars['BigDecimal'];
    totalSwapVolume: Scalars['BigDecimal'];
}

export interface PoolSnapshot_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    amounts?: Maybe<Array<Scalars['BigDecimal']>>;
    amounts_contains?: Maybe<Array<Scalars['BigDecimal']>>;
    amounts_contains_nocase?: Maybe<Array<Scalars['BigDecimal']>>;
    amounts_not?: Maybe<Array<Scalars['BigDecimal']>>;
    amounts_not_contains?: Maybe<Array<Scalars['BigDecimal']>>;
    amounts_not_contains_nocase?: Maybe<Array<Scalars['BigDecimal']>>;
    holdersCount?: Maybe<Scalars['BigInt']>;
    holdersCount_gt?: Maybe<Scalars['BigInt']>;
    holdersCount_gte?: Maybe<Scalars['BigInt']>;
    holdersCount_in?: Maybe<Array<Scalars['BigInt']>>;
    holdersCount_lt?: Maybe<Scalars['BigInt']>;
    holdersCount_lte?: Maybe<Scalars['BigInt']>;
    holdersCount_not?: Maybe<Scalars['BigInt']>;
    holdersCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    pool?: Maybe<Scalars['String']>;
    pool_?: Maybe<Pool_Filter>;
    pool_contains?: Maybe<Scalars['String']>;
    pool_contains_nocase?: Maybe<Scalars['String']>;
    pool_ends_with?: Maybe<Scalars['String']>;
    pool_ends_with_nocase?: Maybe<Scalars['String']>;
    pool_gt?: Maybe<Scalars['String']>;
    pool_gte?: Maybe<Scalars['String']>;
    pool_in?: Maybe<Array<Scalars['String']>>;
    pool_lt?: Maybe<Scalars['String']>;
    pool_lte?: Maybe<Scalars['String']>;
    pool_not?: Maybe<Scalars['String']>;
    pool_not_contains?: Maybe<Scalars['String']>;
    pool_not_contains_nocase?: Maybe<Scalars['String']>;
    pool_not_ends_with?: Maybe<Scalars['String']>;
    pool_not_ends_with_nocase?: Maybe<Scalars['String']>;
    pool_not_in?: Maybe<Array<Scalars['String']>>;
    pool_not_starts_with?: Maybe<Scalars['String']>;
    pool_not_starts_with_nocase?: Maybe<Scalars['String']>;
    pool_starts_with?: Maybe<Scalars['String']>;
    pool_starts_with_nocase?: Maybe<Scalars['String']>;
    swapFees?: Maybe<Scalars['BigDecimal']>;
    swapFees_gt?: Maybe<Scalars['BigDecimal']>;
    swapFees_gte?: Maybe<Scalars['BigDecimal']>;
    swapFees_in?: Maybe<Array<Scalars['BigDecimal']>>;
    swapFees_lt?: Maybe<Scalars['BigDecimal']>;
    swapFees_lte?: Maybe<Scalars['BigDecimal']>;
    swapFees_not?: Maybe<Scalars['BigDecimal']>;
    swapFees_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    swapVolume?: Maybe<Scalars['BigDecimal']>;
    swapVolume_gt?: Maybe<Scalars['BigDecimal']>;
    swapVolume_gte?: Maybe<Scalars['BigDecimal']>;
    swapVolume_in?: Maybe<Array<Scalars['BigDecimal']>>;
    swapVolume_lt?: Maybe<Scalars['BigDecimal']>;
    swapVolume_lte?: Maybe<Scalars['BigDecimal']>;
    swapVolume_not?: Maybe<Scalars['BigDecimal']>;
    swapVolume_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    swapsCount?: Maybe<Scalars['BigInt']>;
    swapsCount_gt?: Maybe<Scalars['BigInt']>;
    swapsCount_gte?: Maybe<Scalars['BigInt']>;
    swapsCount_in?: Maybe<Array<Scalars['BigInt']>>;
    swapsCount_lt?: Maybe<Scalars['BigInt']>;
    swapsCount_lte?: Maybe<Scalars['BigInt']>;
    swapsCount_not?: Maybe<Scalars['BigInt']>;
    swapsCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
    timestamp?: Maybe<Scalars['Int']>;
    timestamp_gt?: Maybe<Scalars['Int']>;
    timestamp_gte?: Maybe<Scalars['Int']>;
    timestamp_in?: Maybe<Array<Scalars['Int']>>;
    timestamp_lt?: Maybe<Scalars['Int']>;
    timestamp_lte?: Maybe<Scalars['Int']>;
    timestamp_not?: Maybe<Scalars['Int']>;
    timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
    totalLiquidity?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_not?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalShares?: Maybe<Scalars['BigDecimal']>;
    totalShares_gt?: Maybe<Scalars['BigDecimal']>;
    totalShares_gte?: Maybe<Scalars['BigDecimal']>;
    totalShares_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalShares_lt?: Maybe<Scalars['BigDecimal']>;
    totalShares_lte?: Maybe<Scalars['BigDecimal']>;
    totalShares_not?: Maybe<Scalars['BigDecimal']>;
    totalShares_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapFee?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_gt?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_gte?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapFee_lt?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_lte?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_not?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapVolume?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_gt?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_gte?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapVolume_lt?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_lte?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_not?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
}

export type PoolSnapshot_OrderBy =
    | 'amounts'
    | 'holdersCount'
    | 'id'
    | 'pool'
    | 'swapFees'
    | 'swapVolume'
    | 'swapsCount'
    | 'timestamp'
    | 'totalLiquidity'
    | 'totalShares'
    | 'totalSwapFee'
    | 'totalSwapVolume';

export interface PoolToken {
    __typename: 'PoolToken';
    address: Scalars['String'];
    balance: Scalars['BigDecimal'];
    decimals: Scalars['Int'];
    id: Scalars['ID'];
    invested: Scalars['BigDecimal'];
    investments?: Maybe<Array<Investment>>;
    name: Scalars['String'];
    poolId: Pool;
    priceRate: Scalars['BigDecimal'];
    symbol: Scalars['String'];
    token: Token;
    weight?: Maybe<Scalars['BigDecimal']>;
}

export interface PoolTokenInvestmentsArgs {
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Investment_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<Investment_Filter>;
}

export interface PoolToken_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    address?: Maybe<Scalars['String']>;
    address_contains?: Maybe<Scalars['String']>;
    address_contains_nocase?: Maybe<Scalars['String']>;
    address_ends_with?: Maybe<Scalars['String']>;
    address_ends_with_nocase?: Maybe<Scalars['String']>;
    address_gt?: Maybe<Scalars['String']>;
    address_gte?: Maybe<Scalars['String']>;
    address_in?: Maybe<Array<Scalars['String']>>;
    address_lt?: Maybe<Scalars['String']>;
    address_lte?: Maybe<Scalars['String']>;
    address_not?: Maybe<Scalars['String']>;
    address_not_contains?: Maybe<Scalars['String']>;
    address_not_contains_nocase?: Maybe<Scalars['String']>;
    address_not_ends_with?: Maybe<Scalars['String']>;
    address_not_ends_with_nocase?: Maybe<Scalars['String']>;
    address_not_in?: Maybe<Array<Scalars['String']>>;
    address_not_starts_with?: Maybe<Scalars['String']>;
    address_not_starts_with_nocase?: Maybe<Scalars['String']>;
    address_starts_with?: Maybe<Scalars['String']>;
    address_starts_with_nocase?: Maybe<Scalars['String']>;
    balance?: Maybe<Scalars['BigDecimal']>;
    balance_gt?: Maybe<Scalars['BigDecimal']>;
    balance_gte?: Maybe<Scalars['BigDecimal']>;
    balance_in?: Maybe<Array<Scalars['BigDecimal']>>;
    balance_lt?: Maybe<Scalars['BigDecimal']>;
    balance_lte?: Maybe<Scalars['BigDecimal']>;
    balance_not?: Maybe<Scalars['BigDecimal']>;
    balance_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    decimals?: Maybe<Scalars['Int']>;
    decimals_gt?: Maybe<Scalars['Int']>;
    decimals_gte?: Maybe<Scalars['Int']>;
    decimals_in?: Maybe<Array<Scalars['Int']>>;
    decimals_lt?: Maybe<Scalars['Int']>;
    decimals_lte?: Maybe<Scalars['Int']>;
    decimals_not?: Maybe<Scalars['Int']>;
    decimals_not_in?: Maybe<Array<Scalars['Int']>>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    invested?: Maybe<Scalars['BigDecimal']>;
    invested_gt?: Maybe<Scalars['BigDecimal']>;
    invested_gte?: Maybe<Scalars['BigDecimal']>;
    invested_in?: Maybe<Array<Scalars['BigDecimal']>>;
    invested_lt?: Maybe<Scalars['BigDecimal']>;
    invested_lte?: Maybe<Scalars['BigDecimal']>;
    invested_not?: Maybe<Scalars['BigDecimal']>;
    invested_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    investments_?: Maybe<Investment_Filter>;
    name?: Maybe<Scalars['String']>;
    name_contains?: Maybe<Scalars['String']>;
    name_contains_nocase?: Maybe<Scalars['String']>;
    name_ends_with?: Maybe<Scalars['String']>;
    name_ends_with_nocase?: Maybe<Scalars['String']>;
    name_gt?: Maybe<Scalars['String']>;
    name_gte?: Maybe<Scalars['String']>;
    name_in?: Maybe<Array<Scalars['String']>>;
    name_lt?: Maybe<Scalars['String']>;
    name_lte?: Maybe<Scalars['String']>;
    name_not?: Maybe<Scalars['String']>;
    name_not_contains?: Maybe<Scalars['String']>;
    name_not_contains_nocase?: Maybe<Scalars['String']>;
    name_not_ends_with?: Maybe<Scalars['String']>;
    name_not_ends_with_nocase?: Maybe<Scalars['String']>;
    name_not_in?: Maybe<Array<Scalars['String']>>;
    name_not_starts_with?: Maybe<Scalars['String']>;
    name_not_starts_with_nocase?: Maybe<Scalars['String']>;
    name_starts_with?: Maybe<Scalars['String']>;
    name_starts_with_nocase?: Maybe<Scalars['String']>;
    poolId?: Maybe<Scalars['String']>;
    poolId_?: Maybe<Pool_Filter>;
    poolId_contains?: Maybe<Scalars['String']>;
    poolId_contains_nocase?: Maybe<Scalars['String']>;
    poolId_ends_with?: Maybe<Scalars['String']>;
    poolId_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_gt?: Maybe<Scalars['String']>;
    poolId_gte?: Maybe<Scalars['String']>;
    poolId_in?: Maybe<Array<Scalars['String']>>;
    poolId_lt?: Maybe<Scalars['String']>;
    poolId_lte?: Maybe<Scalars['String']>;
    poolId_not?: Maybe<Scalars['String']>;
    poolId_not_contains?: Maybe<Scalars['String']>;
    poolId_not_contains_nocase?: Maybe<Scalars['String']>;
    poolId_not_ends_with?: Maybe<Scalars['String']>;
    poolId_not_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_not_in?: Maybe<Array<Scalars['String']>>;
    poolId_not_starts_with?: Maybe<Scalars['String']>;
    poolId_not_starts_with_nocase?: Maybe<Scalars['String']>;
    poolId_starts_with?: Maybe<Scalars['String']>;
    poolId_starts_with_nocase?: Maybe<Scalars['String']>;
    priceRate?: Maybe<Scalars['BigDecimal']>;
    priceRate_gt?: Maybe<Scalars['BigDecimal']>;
    priceRate_gte?: Maybe<Scalars['BigDecimal']>;
    priceRate_in?: Maybe<Array<Scalars['BigDecimal']>>;
    priceRate_lt?: Maybe<Scalars['BigDecimal']>;
    priceRate_lte?: Maybe<Scalars['BigDecimal']>;
    priceRate_not?: Maybe<Scalars['BigDecimal']>;
    priceRate_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    symbol?: Maybe<Scalars['String']>;
    symbol_contains?: Maybe<Scalars['String']>;
    symbol_contains_nocase?: Maybe<Scalars['String']>;
    symbol_ends_with?: Maybe<Scalars['String']>;
    symbol_ends_with_nocase?: Maybe<Scalars['String']>;
    symbol_gt?: Maybe<Scalars['String']>;
    symbol_gte?: Maybe<Scalars['String']>;
    symbol_in?: Maybe<Array<Scalars['String']>>;
    symbol_lt?: Maybe<Scalars['String']>;
    symbol_lte?: Maybe<Scalars['String']>;
    symbol_not?: Maybe<Scalars['String']>;
    symbol_not_contains?: Maybe<Scalars['String']>;
    symbol_not_contains_nocase?: Maybe<Scalars['String']>;
    symbol_not_ends_with?: Maybe<Scalars['String']>;
    symbol_not_ends_with_nocase?: Maybe<Scalars['String']>;
    symbol_not_in?: Maybe<Array<Scalars['String']>>;
    symbol_not_starts_with?: Maybe<Scalars['String']>;
    symbol_not_starts_with_nocase?: Maybe<Scalars['String']>;
    symbol_starts_with?: Maybe<Scalars['String']>;
    symbol_starts_with_nocase?: Maybe<Scalars['String']>;
    token?: Maybe<Scalars['String']>;
    token_?: Maybe<Token_Filter>;
    token_contains?: Maybe<Scalars['String']>;
    token_contains_nocase?: Maybe<Scalars['String']>;
    token_ends_with?: Maybe<Scalars['String']>;
    token_ends_with_nocase?: Maybe<Scalars['String']>;
    token_gt?: Maybe<Scalars['String']>;
    token_gte?: Maybe<Scalars['String']>;
    token_in?: Maybe<Array<Scalars['String']>>;
    token_lt?: Maybe<Scalars['String']>;
    token_lte?: Maybe<Scalars['String']>;
    token_not?: Maybe<Scalars['String']>;
    token_not_contains?: Maybe<Scalars['String']>;
    token_not_contains_nocase?: Maybe<Scalars['String']>;
    token_not_ends_with?: Maybe<Scalars['String']>;
    token_not_ends_with_nocase?: Maybe<Scalars['String']>;
    token_not_in?: Maybe<Array<Scalars['String']>>;
    token_not_starts_with?: Maybe<Scalars['String']>;
    token_not_starts_with_nocase?: Maybe<Scalars['String']>;
    token_starts_with?: Maybe<Scalars['String']>;
    token_starts_with_nocase?: Maybe<Scalars['String']>;
    weight?: Maybe<Scalars['BigDecimal']>;
    weight_gt?: Maybe<Scalars['BigDecimal']>;
    weight_gte?: Maybe<Scalars['BigDecimal']>;
    weight_in?: Maybe<Array<Scalars['BigDecimal']>>;
    weight_lt?: Maybe<Scalars['BigDecimal']>;
    weight_lte?: Maybe<Scalars['BigDecimal']>;
    weight_not?: Maybe<Scalars['BigDecimal']>;
    weight_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
}

export type PoolToken_OrderBy =
    | 'address'
    | 'balance'
    | 'decimals'
    | 'id'
    | 'invested'
    | 'investments'
    | 'name'
    | 'poolId'
    | 'priceRate'
    | 'symbol'
    | 'token'
    | 'weight';

export interface Pool_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    address?: Maybe<Scalars['Bytes']>;
    address_contains?: Maybe<Scalars['Bytes']>;
    address_in?: Maybe<Array<Scalars['Bytes']>>;
    address_not?: Maybe<Scalars['Bytes']>;
    address_not_contains?: Maybe<Scalars['Bytes']>;
    address_not_in?: Maybe<Array<Scalars['Bytes']>>;
    amp?: Maybe<Scalars['BigInt']>;
    amp_gt?: Maybe<Scalars['BigInt']>;
    amp_gte?: Maybe<Scalars['BigInt']>;
    amp_in?: Maybe<Array<Scalars['BigInt']>>;
    amp_lt?: Maybe<Scalars['BigInt']>;
    amp_lte?: Maybe<Scalars['BigInt']>;
    amp_not?: Maybe<Scalars['BigInt']>;
    amp_not_in?: Maybe<Array<Scalars['BigInt']>>;
    baseToken?: Maybe<Scalars['Bytes']>;
    baseToken_contains?: Maybe<Scalars['Bytes']>;
    baseToken_in?: Maybe<Array<Scalars['Bytes']>>;
    baseToken_not?: Maybe<Scalars['Bytes']>;
    baseToken_not_contains?: Maybe<Scalars['Bytes']>;
    baseToken_not_in?: Maybe<Array<Scalars['Bytes']>>;
    createTime?: Maybe<Scalars['Int']>;
    createTime_gt?: Maybe<Scalars['Int']>;
    createTime_gte?: Maybe<Scalars['Int']>;
    createTime_in?: Maybe<Array<Scalars['Int']>>;
    createTime_lt?: Maybe<Scalars['Int']>;
    createTime_lte?: Maybe<Scalars['Int']>;
    createTime_not?: Maybe<Scalars['Int']>;
    createTime_not_in?: Maybe<Array<Scalars['Int']>>;
    expiryTime?: Maybe<Scalars['BigInt']>;
    expiryTime_gt?: Maybe<Scalars['BigInt']>;
    expiryTime_gte?: Maybe<Scalars['BigInt']>;
    expiryTime_in?: Maybe<Array<Scalars['BigInt']>>;
    expiryTime_lt?: Maybe<Scalars['BigInt']>;
    expiryTime_lte?: Maybe<Scalars['BigInt']>;
    expiryTime_not?: Maybe<Scalars['BigInt']>;
    expiryTime_not_in?: Maybe<Array<Scalars['BigInt']>>;
    factory?: Maybe<Scalars['Bytes']>;
    factory_contains?: Maybe<Scalars['Bytes']>;
    factory_in?: Maybe<Array<Scalars['Bytes']>>;
    factory_not?: Maybe<Scalars['Bytes']>;
    factory_not_contains?: Maybe<Scalars['Bytes']>;
    factory_not_in?: Maybe<Array<Scalars['Bytes']>>;
    historicalValues_?: Maybe<PoolHistoricalLiquidity_Filter>;
    holdersCount?: Maybe<Scalars['BigInt']>;
    holdersCount_gt?: Maybe<Scalars['BigInt']>;
    holdersCount_gte?: Maybe<Scalars['BigInt']>;
    holdersCount_in?: Maybe<Array<Scalars['BigInt']>>;
    holdersCount_lt?: Maybe<Scalars['BigInt']>;
    holdersCount_lte?: Maybe<Scalars['BigInt']>;
    holdersCount_not?: Maybe<Scalars['BigInt']>;
    holdersCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    lowerTarget?: Maybe<Scalars['BigDecimal']>;
    lowerTarget_gt?: Maybe<Scalars['BigDecimal']>;
    lowerTarget_gte?: Maybe<Scalars['BigDecimal']>;
    lowerTarget_in?: Maybe<Array<Scalars['BigDecimal']>>;
    lowerTarget_lt?: Maybe<Scalars['BigDecimal']>;
    lowerTarget_lte?: Maybe<Scalars['BigDecimal']>;
    lowerTarget_not?: Maybe<Scalars['BigDecimal']>;
    lowerTarget_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    mainIndex?: Maybe<Scalars['Int']>;
    mainIndex_gt?: Maybe<Scalars['Int']>;
    mainIndex_gte?: Maybe<Scalars['Int']>;
    mainIndex_in?: Maybe<Array<Scalars['Int']>>;
    mainIndex_lt?: Maybe<Scalars['Int']>;
    mainIndex_lte?: Maybe<Scalars['Int']>;
    mainIndex_not?: Maybe<Scalars['Int']>;
    mainIndex_not_in?: Maybe<Array<Scalars['Int']>>;
    managementFee?: Maybe<Scalars['BigDecimal']>;
    managementFee_gt?: Maybe<Scalars['BigDecimal']>;
    managementFee_gte?: Maybe<Scalars['BigDecimal']>;
    managementFee_in?: Maybe<Array<Scalars['BigDecimal']>>;
    managementFee_lt?: Maybe<Scalars['BigDecimal']>;
    managementFee_lte?: Maybe<Scalars['BigDecimal']>;
    managementFee_not?: Maybe<Scalars['BigDecimal']>;
    managementFee_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    name?: Maybe<Scalars['String']>;
    name_contains?: Maybe<Scalars['String']>;
    name_contains_nocase?: Maybe<Scalars['String']>;
    name_ends_with?: Maybe<Scalars['String']>;
    name_ends_with_nocase?: Maybe<Scalars['String']>;
    name_gt?: Maybe<Scalars['String']>;
    name_gte?: Maybe<Scalars['String']>;
    name_in?: Maybe<Array<Scalars['String']>>;
    name_lt?: Maybe<Scalars['String']>;
    name_lte?: Maybe<Scalars['String']>;
    name_not?: Maybe<Scalars['String']>;
    name_not_contains?: Maybe<Scalars['String']>;
    name_not_contains_nocase?: Maybe<Scalars['String']>;
    name_not_ends_with?: Maybe<Scalars['String']>;
    name_not_ends_with_nocase?: Maybe<Scalars['String']>;
    name_not_in?: Maybe<Array<Scalars['String']>>;
    name_not_starts_with?: Maybe<Scalars['String']>;
    name_not_starts_with_nocase?: Maybe<Scalars['String']>;
    name_starts_with?: Maybe<Scalars['String']>;
    name_starts_with_nocase?: Maybe<Scalars['String']>;
    owner?: Maybe<Scalars['Bytes']>;
    owner_contains?: Maybe<Scalars['Bytes']>;
    owner_in?: Maybe<Array<Scalars['Bytes']>>;
    owner_not?: Maybe<Scalars['Bytes']>;
    owner_not_contains?: Maybe<Scalars['Bytes']>;
    owner_not_in?: Maybe<Array<Scalars['Bytes']>>;
    poolType?: Maybe<Scalars['String']>;
    poolType_contains?: Maybe<Scalars['String']>;
    poolType_contains_nocase?: Maybe<Scalars['String']>;
    poolType_ends_with?: Maybe<Scalars['String']>;
    poolType_ends_with_nocase?: Maybe<Scalars['String']>;
    poolType_gt?: Maybe<Scalars['String']>;
    poolType_gte?: Maybe<Scalars['String']>;
    poolType_in?: Maybe<Array<Scalars['String']>>;
    poolType_lt?: Maybe<Scalars['String']>;
    poolType_lte?: Maybe<Scalars['String']>;
    poolType_not?: Maybe<Scalars['String']>;
    poolType_not_contains?: Maybe<Scalars['String']>;
    poolType_not_contains_nocase?: Maybe<Scalars['String']>;
    poolType_not_ends_with?: Maybe<Scalars['String']>;
    poolType_not_ends_with_nocase?: Maybe<Scalars['String']>;
    poolType_not_in?: Maybe<Array<Scalars['String']>>;
    poolType_not_starts_with?: Maybe<Scalars['String']>;
    poolType_not_starts_with_nocase?: Maybe<Scalars['String']>;
    poolType_starts_with?: Maybe<Scalars['String']>;
    poolType_starts_with_nocase?: Maybe<Scalars['String']>;
    priceRateProviders_?: Maybe<PriceRateProvider_Filter>;
    principalToken?: Maybe<Scalars['Bytes']>;
    principalToken_contains?: Maybe<Scalars['Bytes']>;
    principalToken_in?: Maybe<Array<Scalars['Bytes']>>;
    principalToken_not?: Maybe<Scalars['Bytes']>;
    principalToken_not_contains?: Maybe<Scalars['Bytes']>;
    principalToken_not_in?: Maybe<Array<Scalars['Bytes']>>;
    shares_?: Maybe<PoolShare_Filter>;
    strategyType?: Maybe<Scalars['Int']>;
    strategyType_gt?: Maybe<Scalars['Int']>;
    strategyType_gte?: Maybe<Scalars['Int']>;
    strategyType_in?: Maybe<Array<Scalars['Int']>>;
    strategyType_lt?: Maybe<Scalars['Int']>;
    strategyType_lte?: Maybe<Scalars['Int']>;
    strategyType_not?: Maybe<Scalars['Int']>;
    strategyType_not_in?: Maybe<Array<Scalars['Int']>>;
    swapEnabled?: Maybe<Scalars['Boolean']>;
    swapEnabled_in?: Maybe<Array<Scalars['Boolean']>>;
    swapEnabled_not?: Maybe<Scalars['Boolean']>;
    swapEnabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
    swapFee?: Maybe<Scalars['BigDecimal']>;
    swapFee_gt?: Maybe<Scalars['BigDecimal']>;
    swapFee_gte?: Maybe<Scalars['BigDecimal']>;
    swapFee_in?: Maybe<Array<Scalars['BigDecimal']>>;
    swapFee_lt?: Maybe<Scalars['BigDecimal']>;
    swapFee_lte?: Maybe<Scalars['BigDecimal']>;
    swapFee_not?: Maybe<Scalars['BigDecimal']>;
    swapFee_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    swapsCount?: Maybe<Scalars['BigInt']>;
    swapsCount_gt?: Maybe<Scalars['BigInt']>;
    swapsCount_gte?: Maybe<Scalars['BigInt']>;
    swapsCount_in?: Maybe<Array<Scalars['BigInt']>>;
    swapsCount_lt?: Maybe<Scalars['BigInt']>;
    swapsCount_lte?: Maybe<Scalars['BigInt']>;
    swapsCount_not?: Maybe<Scalars['BigInt']>;
    swapsCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
    swaps_?: Maybe<Swap_Filter>;
    symbol?: Maybe<Scalars['String']>;
    symbol_contains?: Maybe<Scalars['String']>;
    symbol_contains_nocase?: Maybe<Scalars['String']>;
    symbol_ends_with?: Maybe<Scalars['String']>;
    symbol_ends_with_nocase?: Maybe<Scalars['String']>;
    symbol_gt?: Maybe<Scalars['String']>;
    symbol_gte?: Maybe<Scalars['String']>;
    symbol_in?: Maybe<Array<Scalars['String']>>;
    symbol_lt?: Maybe<Scalars['String']>;
    symbol_lte?: Maybe<Scalars['String']>;
    symbol_not?: Maybe<Scalars['String']>;
    symbol_not_contains?: Maybe<Scalars['String']>;
    symbol_not_contains_nocase?: Maybe<Scalars['String']>;
    symbol_not_ends_with?: Maybe<Scalars['String']>;
    symbol_not_ends_with_nocase?: Maybe<Scalars['String']>;
    symbol_not_in?: Maybe<Array<Scalars['String']>>;
    symbol_not_starts_with?: Maybe<Scalars['String']>;
    symbol_not_starts_with_nocase?: Maybe<Scalars['String']>;
    symbol_starts_with?: Maybe<Scalars['String']>;
    symbol_starts_with_nocase?: Maybe<Scalars['String']>;
    tokensList?: Maybe<Array<Scalars['Bytes']>>;
    tokensList_contains?: Maybe<Array<Scalars['Bytes']>>;
    tokensList_contains_nocase?: Maybe<Array<Scalars['Bytes']>>;
    tokensList_not?: Maybe<Array<Scalars['Bytes']>>;
    tokensList_not_contains?: Maybe<Array<Scalars['Bytes']>>;
    tokensList_not_contains_nocase?: Maybe<Array<Scalars['Bytes']>>;
    tokens_?: Maybe<PoolToken_Filter>;
    totalLiquidity?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_not?: Maybe<Scalars['BigDecimal']>;
    totalLiquidity_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalShares?: Maybe<Scalars['BigDecimal']>;
    totalShares_gt?: Maybe<Scalars['BigDecimal']>;
    totalShares_gte?: Maybe<Scalars['BigDecimal']>;
    totalShares_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalShares_lt?: Maybe<Scalars['BigDecimal']>;
    totalShares_lte?: Maybe<Scalars['BigDecimal']>;
    totalShares_not?: Maybe<Scalars['BigDecimal']>;
    totalShares_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapFee?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_gt?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_gte?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapFee_lt?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_lte?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_not?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapVolume?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_gt?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_gte?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapVolume_lt?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_lte?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_not?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalWeight?: Maybe<Scalars['BigDecimal']>;
    totalWeight_gt?: Maybe<Scalars['BigDecimal']>;
    totalWeight_gte?: Maybe<Scalars['BigDecimal']>;
    totalWeight_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalWeight_lt?: Maybe<Scalars['BigDecimal']>;
    totalWeight_lte?: Maybe<Scalars['BigDecimal']>;
    totalWeight_not?: Maybe<Scalars['BigDecimal']>;
    totalWeight_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    tx?: Maybe<Scalars['Bytes']>;
    tx_contains?: Maybe<Scalars['Bytes']>;
    tx_in?: Maybe<Array<Scalars['Bytes']>>;
    tx_not?: Maybe<Scalars['Bytes']>;
    tx_not_contains?: Maybe<Scalars['Bytes']>;
    tx_not_in?: Maybe<Array<Scalars['Bytes']>>;
    unitSeconds?: Maybe<Scalars['BigInt']>;
    unitSeconds_gt?: Maybe<Scalars['BigInt']>;
    unitSeconds_gte?: Maybe<Scalars['BigInt']>;
    unitSeconds_in?: Maybe<Array<Scalars['BigInt']>>;
    unitSeconds_lt?: Maybe<Scalars['BigInt']>;
    unitSeconds_lte?: Maybe<Scalars['BigInt']>;
    unitSeconds_not?: Maybe<Scalars['BigInt']>;
    unitSeconds_not_in?: Maybe<Array<Scalars['BigInt']>>;
    upperTarget?: Maybe<Scalars['BigDecimal']>;
    upperTarget_gt?: Maybe<Scalars['BigDecimal']>;
    upperTarget_gte?: Maybe<Scalars['BigDecimal']>;
    upperTarget_in?: Maybe<Array<Scalars['BigDecimal']>>;
    upperTarget_lt?: Maybe<Scalars['BigDecimal']>;
    upperTarget_lte?: Maybe<Scalars['BigDecimal']>;
    upperTarget_not?: Maybe<Scalars['BigDecimal']>;
    upperTarget_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    vaultID?: Maybe<Scalars['String']>;
    vaultID_?: Maybe<Balancer_Filter>;
    vaultID_contains?: Maybe<Scalars['String']>;
    vaultID_contains_nocase?: Maybe<Scalars['String']>;
    vaultID_ends_with?: Maybe<Scalars['String']>;
    vaultID_ends_with_nocase?: Maybe<Scalars['String']>;
    vaultID_gt?: Maybe<Scalars['String']>;
    vaultID_gte?: Maybe<Scalars['String']>;
    vaultID_in?: Maybe<Array<Scalars['String']>>;
    vaultID_lt?: Maybe<Scalars['String']>;
    vaultID_lte?: Maybe<Scalars['String']>;
    vaultID_not?: Maybe<Scalars['String']>;
    vaultID_not_contains?: Maybe<Scalars['String']>;
    vaultID_not_contains_nocase?: Maybe<Scalars['String']>;
    vaultID_not_ends_with?: Maybe<Scalars['String']>;
    vaultID_not_ends_with_nocase?: Maybe<Scalars['String']>;
    vaultID_not_in?: Maybe<Array<Scalars['String']>>;
    vaultID_not_starts_with?: Maybe<Scalars['String']>;
    vaultID_not_starts_with_nocase?: Maybe<Scalars['String']>;
    vaultID_starts_with?: Maybe<Scalars['String']>;
    vaultID_starts_with_nocase?: Maybe<Scalars['String']>;
    weightUpdates_?: Maybe<GradualWeightUpdate_Filter>;
    wrappedIndex?: Maybe<Scalars['Int']>;
    wrappedIndex_gt?: Maybe<Scalars['Int']>;
    wrappedIndex_gte?: Maybe<Scalars['Int']>;
    wrappedIndex_in?: Maybe<Array<Scalars['Int']>>;
    wrappedIndex_lt?: Maybe<Scalars['Int']>;
    wrappedIndex_lte?: Maybe<Scalars['Int']>;
    wrappedIndex_not?: Maybe<Scalars['Int']>;
    wrappedIndex_not_in?: Maybe<Array<Scalars['Int']>>;
}

export type Pool_OrderBy =
    | 'address'
    | 'amp'
    | 'baseToken'
    | 'createTime'
    | 'expiryTime'
    | 'factory'
    | 'historicalValues'
    | 'holdersCount'
    | 'id'
    | 'lowerTarget'
    | 'mainIndex'
    | 'managementFee'
    | 'name'
    | 'owner'
    | 'poolType'
    | 'priceRateProviders'
    | 'principalToken'
    | 'shares'
    | 'strategyType'
    | 'swapEnabled'
    | 'swapFee'
    | 'swaps'
    | 'swapsCount'
    | 'symbol'
    | 'tokens'
    | 'tokensList'
    | 'totalLiquidity'
    | 'totalShares'
    | 'totalSwapFee'
    | 'totalSwapVolume'
    | 'totalWeight'
    | 'tx'
    | 'unitSeconds'
    | 'upperTarget'
    | 'vaultID'
    | 'weightUpdates'
    | 'wrappedIndex';

export interface PriceRateProvider {
    __typename: 'PriceRateProvider';
    address: Scalars['Bytes'];
    cacheDuration: Scalars['Int'];
    cacheExpiry: Scalars['Int'];
    id: Scalars['ID'];
    lastCached: Scalars['Int'];
    poolId: Pool;
    rate: Scalars['BigDecimal'];
    token: PoolToken;
}

export interface PriceRateProvider_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    address?: Maybe<Scalars['Bytes']>;
    address_contains?: Maybe<Scalars['Bytes']>;
    address_in?: Maybe<Array<Scalars['Bytes']>>;
    address_not?: Maybe<Scalars['Bytes']>;
    address_not_contains?: Maybe<Scalars['Bytes']>;
    address_not_in?: Maybe<Array<Scalars['Bytes']>>;
    cacheDuration?: Maybe<Scalars['Int']>;
    cacheDuration_gt?: Maybe<Scalars['Int']>;
    cacheDuration_gte?: Maybe<Scalars['Int']>;
    cacheDuration_in?: Maybe<Array<Scalars['Int']>>;
    cacheDuration_lt?: Maybe<Scalars['Int']>;
    cacheDuration_lte?: Maybe<Scalars['Int']>;
    cacheDuration_not?: Maybe<Scalars['Int']>;
    cacheDuration_not_in?: Maybe<Array<Scalars['Int']>>;
    cacheExpiry?: Maybe<Scalars['Int']>;
    cacheExpiry_gt?: Maybe<Scalars['Int']>;
    cacheExpiry_gte?: Maybe<Scalars['Int']>;
    cacheExpiry_in?: Maybe<Array<Scalars['Int']>>;
    cacheExpiry_lt?: Maybe<Scalars['Int']>;
    cacheExpiry_lte?: Maybe<Scalars['Int']>;
    cacheExpiry_not?: Maybe<Scalars['Int']>;
    cacheExpiry_not_in?: Maybe<Array<Scalars['Int']>>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    lastCached?: Maybe<Scalars['Int']>;
    lastCached_gt?: Maybe<Scalars['Int']>;
    lastCached_gte?: Maybe<Scalars['Int']>;
    lastCached_in?: Maybe<Array<Scalars['Int']>>;
    lastCached_lt?: Maybe<Scalars['Int']>;
    lastCached_lte?: Maybe<Scalars['Int']>;
    lastCached_not?: Maybe<Scalars['Int']>;
    lastCached_not_in?: Maybe<Array<Scalars['Int']>>;
    poolId?: Maybe<Scalars['String']>;
    poolId_?: Maybe<Pool_Filter>;
    poolId_contains?: Maybe<Scalars['String']>;
    poolId_contains_nocase?: Maybe<Scalars['String']>;
    poolId_ends_with?: Maybe<Scalars['String']>;
    poolId_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_gt?: Maybe<Scalars['String']>;
    poolId_gte?: Maybe<Scalars['String']>;
    poolId_in?: Maybe<Array<Scalars['String']>>;
    poolId_lt?: Maybe<Scalars['String']>;
    poolId_lte?: Maybe<Scalars['String']>;
    poolId_not?: Maybe<Scalars['String']>;
    poolId_not_contains?: Maybe<Scalars['String']>;
    poolId_not_contains_nocase?: Maybe<Scalars['String']>;
    poolId_not_ends_with?: Maybe<Scalars['String']>;
    poolId_not_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_not_in?: Maybe<Array<Scalars['String']>>;
    poolId_not_starts_with?: Maybe<Scalars['String']>;
    poolId_not_starts_with_nocase?: Maybe<Scalars['String']>;
    poolId_starts_with?: Maybe<Scalars['String']>;
    poolId_starts_with_nocase?: Maybe<Scalars['String']>;
    rate?: Maybe<Scalars['BigDecimal']>;
    rate_gt?: Maybe<Scalars['BigDecimal']>;
    rate_gte?: Maybe<Scalars['BigDecimal']>;
    rate_in?: Maybe<Array<Scalars['BigDecimal']>>;
    rate_lt?: Maybe<Scalars['BigDecimal']>;
    rate_lte?: Maybe<Scalars['BigDecimal']>;
    rate_not?: Maybe<Scalars['BigDecimal']>;
    rate_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    token?: Maybe<Scalars['String']>;
    token_?: Maybe<PoolToken_Filter>;
    token_contains?: Maybe<Scalars['String']>;
    token_contains_nocase?: Maybe<Scalars['String']>;
    token_ends_with?: Maybe<Scalars['String']>;
    token_ends_with_nocase?: Maybe<Scalars['String']>;
    token_gt?: Maybe<Scalars['String']>;
    token_gte?: Maybe<Scalars['String']>;
    token_in?: Maybe<Array<Scalars['String']>>;
    token_lt?: Maybe<Scalars['String']>;
    token_lte?: Maybe<Scalars['String']>;
    token_not?: Maybe<Scalars['String']>;
    token_not_contains?: Maybe<Scalars['String']>;
    token_not_contains_nocase?: Maybe<Scalars['String']>;
    token_not_ends_with?: Maybe<Scalars['String']>;
    token_not_ends_with_nocase?: Maybe<Scalars['String']>;
    token_not_in?: Maybe<Array<Scalars['String']>>;
    token_not_starts_with?: Maybe<Scalars['String']>;
    token_not_starts_with_nocase?: Maybe<Scalars['String']>;
    token_starts_with?: Maybe<Scalars['String']>;
    token_starts_with_nocase?: Maybe<Scalars['String']>;
}

export type PriceRateProvider_OrderBy =
    | 'address'
    | 'cacheDuration'
    | 'cacheExpiry'
    | 'id'
    | 'lastCached'
    | 'poolId'
    | 'rate'
    | 'token';

export interface Query {
    __typename: 'Query';
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
    ampUpdate?: Maybe<AmpUpdate>;
    ampUpdates: Array<AmpUpdate>;
    balancer?: Maybe<Balancer>;
    balancerSnapshot?: Maybe<BalancerSnapshot>;
    balancerSnapshots: Array<BalancerSnapshot>;
    balancers: Array<Balancer>;
    block?: Maybe<Block>;
    blocks: Array<Block>;
    gradualWeightUpdate?: Maybe<GradualWeightUpdate>;
    gradualWeightUpdates: Array<GradualWeightUpdate>;
    investment?: Maybe<Investment>;
    investments: Array<Investment>;
    joinExit?: Maybe<JoinExit>;
    joinExits: Array<JoinExit>;
    latestPrice?: Maybe<LatestPrice>;
    latestPrices: Array<LatestPrice>;
    pool?: Maybe<Pool>;
    poolHistoricalLiquidities: Array<PoolHistoricalLiquidity>;
    poolHistoricalLiquidity?: Maybe<PoolHistoricalLiquidity>;
    poolShare?: Maybe<PoolShare>;
    poolShares: Array<PoolShare>;
    poolSnapshot?: Maybe<PoolSnapshot>;
    poolSnapshots: Array<PoolSnapshot>;
    poolToken?: Maybe<PoolToken>;
    poolTokens: Array<PoolToken>;
    pools: Array<Pool>;
    priceRateProvider?: Maybe<PriceRateProvider>;
    priceRateProviders: Array<PriceRateProvider>;
    swap?: Maybe<Swap>;
    swaps: Array<Swap>;
    token?: Maybe<Token>;
    tokenPrice?: Maybe<TokenPrice>;
    tokenPrices: Array<TokenPrice>;
    tokenSnapshot?: Maybe<TokenSnapshot>;
    tokenSnapshots: Array<TokenSnapshot>;
    tokens: Array<Token>;
    tradePair?: Maybe<TradePair>;
    tradePairSnapshot?: Maybe<TradePairSnapshot>;
    tradePairSnapshots: Array<TradePairSnapshot>;
    tradePairs: Array<TradePair>;
    user?: Maybe<User>;
    userInternalBalance?: Maybe<UserInternalBalance>;
    userInternalBalances: Array<UserInternalBalance>;
    users: Array<User>;
}

export interface Query_MetaArgs {
    block?: Maybe<Block_Height>;
}

export interface QueryAmpUpdateArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAmpUpdatesArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<AmpUpdate_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<AmpUpdate_Filter>;
}

export interface QueryBalancerArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryBalancerSnapshotArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryBalancerSnapshotsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<BalancerSnapshot_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<BalancerSnapshot_Filter>;
}

export interface QueryBalancersArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Balancer_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<Balancer_Filter>;
}

export interface QueryBlockArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryBlocksArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Block_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<Block_Filter>;
}

export interface QueryGradualWeightUpdateArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGradualWeightUpdatesArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<GradualWeightUpdate_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<GradualWeightUpdate_Filter>;
}

export interface QueryInvestmentArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryInvestmentsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Investment_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<Investment_Filter>;
}

export interface QueryJoinExitArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryJoinExitsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<JoinExit_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<JoinExit_Filter>;
}

export interface QueryLatestPriceArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryLatestPricesArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<LatestPrice_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<LatestPrice_Filter>;
}

export interface QueryPoolArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolHistoricalLiquiditiesArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PoolHistoricalLiquidity_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<PoolHistoricalLiquidity_Filter>;
}

export interface QueryPoolHistoricalLiquidityArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolShareArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolSharesArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PoolShare_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<PoolShare_Filter>;
}

export interface QueryPoolSnapshotArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolSnapshotsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PoolSnapshot_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<PoolSnapshot_Filter>;
}

export interface QueryPoolTokenArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPoolTokensArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PoolToken_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<PoolToken_Filter>;
}

export interface QueryPoolsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Pool_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<Pool_Filter>;
}

export interface QueryPriceRateProviderArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryPriceRateProvidersArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PriceRateProvider_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<PriceRateProvider_Filter>;
}

export interface QuerySwapArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QuerySwapsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Swap_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<Swap_Filter>;
}

export interface QueryTokenArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTokenPriceArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTokenPricesArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<TokenPrice_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<TokenPrice_Filter>;
}

export interface QueryTokenSnapshotArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTokenSnapshotsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<TokenSnapshot_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<TokenSnapshot_Filter>;
}

export interface QueryTokensArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Token_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<Token_Filter>;
}

export interface QueryTradePairArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTradePairSnapshotArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTradePairSnapshotsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<TradePairSnapshot_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<TradePairSnapshot_Filter>;
}

export interface QueryTradePairsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<TradePair_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<TradePair_Filter>;
}

export interface QueryUserArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryUserInternalBalanceArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryUserInternalBalancesArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<UserInternalBalance_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<UserInternalBalance_Filter>;
}

export interface QueryUsersArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<User_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<User_Filter>;
}

export interface Subscription {
    __typename: 'Subscription';
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
    ampUpdate?: Maybe<AmpUpdate>;
    ampUpdates: Array<AmpUpdate>;
    balancer?: Maybe<Balancer>;
    balancerSnapshot?: Maybe<BalancerSnapshot>;
    balancerSnapshots: Array<BalancerSnapshot>;
    balancers: Array<Balancer>;
    block?: Maybe<Block>;
    blocks: Array<Block>;
    gradualWeightUpdate?: Maybe<GradualWeightUpdate>;
    gradualWeightUpdates: Array<GradualWeightUpdate>;
    investment?: Maybe<Investment>;
    investments: Array<Investment>;
    joinExit?: Maybe<JoinExit>;
    joinExits: Array<JoinExit>;
    latestPrice?: Maybe<LatestPrice>;
    latestPrices: Array<LatestPrice>;
    pool?: Maybe<Pool>;
    poolHistoricalLiquidities: Array<PoolHistoricalLiquidity>;
    poolHistoricalLiquidity?: Maybe<PoolHistoricalLiquidity>;
    poolShare?: Maybe<PoolShare>;
    poolShares: Array<PoolShare>;
    poolSnapshot?: Maybe<PoolSnapshot>;
    poolSnapshots: Array<PoolSnapshot>;
    poolToken?: Maybe<PoolToken>;
    poolTokens: Array<PoolToken>;
    pools: Array<Pool>;
    priceRateProvider?: Maybe<PriceRateProvider>;
    priceRateProviders: Array<PriceRateProvider>;
    swap?: Maybe<Swap>;
    swaps: Array<Swap>;
    token?: Maybe<Token>;
    tokenPrice?: Maybe<TokenPrice>;
    tokenPrices: Array<TokenPrice>;
    tokenSnapshot?: Maybe<TokenSnapshot>;
    tokenSnapshots: Array<TokenSnapshot>;
    tokens: Array<Token>;
    tradePair?: Maybe<TradePair>;
    tradePairSnapshot?: Maybe<TradePairSnapshot>;
    tradePairSnapshots: Array<TradePairSnapshot>;
    tradePairs: Array<TradePair>;
    user?: Maybe<User>;
    userInternalBalance?: Maybe<UserInternalBalance>;
    userInternalBalances: Array<UserInternalBalance>;
    users: Array<User>;
}

export interface Subscription_MetaArgs {
    block?: Maybe<Block_Height>;
}

export interface SubscriptionAmpUpdateArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAmpUpdatesArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<AmpUpdate_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<AmpUpdate_Filter>;
}

export interface SubscriptionBalancerArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionBalancerSnapshotArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionBalancerSnapshotsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<BalancerSnapshot_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<BalancerSnapshot_Filter>;
}

export interface SubscriptionBalancersArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Balancer_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<Balancer_Filter>;
}

export interface SubscriptionBlockArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionBlocksArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Block_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<Block_Filter>;
}

export interface SubscriptionGradualWeightUpdateArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGradualWeightUpdatesArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<GradualWeightUpdate_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<GradualWeightUpdate_Filter>;
}

export interface SubscriptionInvestmentArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionInvestmentsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Investment_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<Investment_Filter>;
}

export interface SubscriptionJoinExitArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionJoinExitsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<JoinExit_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<JoinExit_Filter>;
}

export interface SubscriptionLatestPriceArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionLatestPricesArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<LatestPrice_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<LatestPrice_Filter>;
}

export interface SubscriptionPoolArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolHistoricalLiquiditiesArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PoolHistoricalLiquidity_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<PoolHistoricalLiquidity_Filter>;
}

export interface SubscriptionPoolHistoricalLiquidityArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolShareArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolSharesArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PoolShare_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<PoolShare_Filter>;
}

export interface SubscriptionPoolSnapshotArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolSnapshotsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PoolSnapshot_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<PoolSnapshot_Filter>;
}

export interface SubscriptionPoolTokenArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPoolTokensArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PoolToken_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<PoolToken_Filter>;
}

export interface SubscriptionPoolsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Pool_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<Pool_Filter>;
}

export interface SubscriptionPriceRateProviderArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionPriceRateProvidersArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PriceRateProvider_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<PriceRateProvider_Filter>;
}

export interface SubscriptionSwapArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionSwapsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Swap_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<Swap_Filter>;
}

export interface SubscriptionTokenArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTokenPriceArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTokenPricesArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<TokenPrice_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<TokenPrice_Filter>;
}

export interface SubscriptionTokenSnapshotArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTokenSnapshotsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<TokenSnapshot_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<TokenSnapshot_Filter>;
}

export interface SubscriptionTokensArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Token_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<Token_Filter>;
}

export interface SubscriptionTradePairArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTradePairSnapshotArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTradePairSnapshotsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<TradePairSnapshot_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<TradePairSnapshot_Filter>;
}

export interface SubscriptionTradePairsArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<TradePair_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<TradePair_Filter>;
}

export interface SubscriptionUserArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionUserInternalBalanceArgs {
    block?: Maybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionUserInternalBalancesArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<UserInternalBalance_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<UserInternalBalance_Filter>;
}

export interface SubscriptionUsersArgs {
    block?: Maybe<Block_Height>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<User_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: Maybe<User_Filter>;
}

export interface Swap {
    __typename: 'Swap';
    caller: Scalars['Bytes'];
    id: Scalars['ID'];
    poolId: Pool;
    timestamp: Scalars['Int'];
    tokenAmountIn: Scalars['BigDecimal'];
    tokenAmountOut: Scalars['BigDecimal'];
    tokenIn: Scalars['Bytes'];
    tokenInSym: Scalars['String'];
    tokenOut: Scalars['Bytes'];
    tokenOutSym: Scalars['String'];
    tx: Scalars['Bytes'];
    userAddress: User;
    valueUSD: Scalars['BigDecimal'];
}

export interface Swap_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    caller?: Maybe<Scalars['Bytes']>;
    caller_contains?: Maybe<Scalars['Bytes']>;
    caller_in?: Maybe<Array<Scalars['Bytes']>>;
    caller_not?: Maybe<Scalars['Bytes']>;
    caller_not_contains?: Maybe<Scalars['Bytes']>;
    caller_not_in?: Maybe<Array<Scalars['Bytes']>>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    poolId?: Maybe<Scalars['String']>;
    poolId_?: Maybe<Pool_Filter>;
    poolId_contains?: Maybe<Scalars['String']>;
    poolId_contains_nocase?: Maybe<Scalars['String']>;
    poolId_ends_with?: Maybe<Scalars['String']>;
    poolId_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_gt?: Maybe<Scalars['String']>;
    poolId_gte?: Maybe<Scalars['String']>;
    poolId_in?: Maybe<Array<Scalars['String']>>;
    poolId_lt?: Maybe<Scalars['String']>;
    poolId_lte?: Maybe<Scalars['String']>;
    poolId_not?: Maybe<Scalars['String']>;
    poolId_not_contains?: Maybe<Scalars['String']>;
    poolId_not_contains_nocase?: Maybe<Scalars['String']>;
    poolId_not_ends_with?: Maybe<Scalars['String']>;
    poolId_not_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_not_in?: Maybe<Array<Scalars['String']>>;
    poolId_not_starts_with?: Maybe<Scalars['String']>;
    poolId_not_starts_with_nocase?: Maybe<Scalars['String']>;
    poolId_starts_with?: Maybe<Scalars['String']>;
    poolId_starts_with_nocase?: Maybe<Scalars['String']>;
    timestamp?: Maybe<Scalars['Int']>;
    timestamp_gt?: Maybe<Scalars['Int']>;
    timestamp_gte?: Maybe<Scalars['Int']>;
    timestamp_in?: Maybe<Array<Scalars['Int']>>;
    timestamp_lt?: Maybe<Scalars['Int']>;
    timestamp_lte?: Maybe<Scalars['Int']>;
    timestamp_not?: Maybe<Scalars['Int']>;
    timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
    tokenAmountIn?: Maybe<Scalars['BigDecimal']>;
    tokenAmountIn_gt?: Maybe<Scalars['BigDecimal']>;
    tokenAmountIn_gte?: Maybe<Scalars['BigDecimal']>;
    tokenAmountIn_in?: Maybe<Array<Scalars['BigDecimal']>>;
    tokenAmountIn_lt?: Maybe<Scalars['BigDecimal']>;
    tokenAmountIn_lte?: Maybe<Scalars['BigDecimal']>;
    tokenAmountIn_not?: Maybe<Scalars['BigDecimal']>;
    tokenAmountIn_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    tokenAmountOut?: Maybe<Scalars['BigDecimal']>;
    tokenAmountOut_gt?: Maybe<Scalars['BigDecimal']>;
    tokenAmountOut_gte?: Maybe<Scalars['BigDecimal']>;
    tokenAmountOut_in?: Maybe<Array<Scalars['BigDecimal']>>;
    tokenAmountOut_lt?: Maybe<Scalars['BigDecimal']>;
    tokenAmountOut_lte?: Maybe<Scalars['BigDecimal']>;
    tokenAmountOut_not?: Maybe<Scalars['BigDecimal']>;
    tokenAmountOut_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    tokenIn?: Maybe<Scalars['Bytes']>;
    tokenInSym?: Maybe<Scalars['String']>;
    tokenInSym_contains?: Maybe<Scalars['String']>;
    tokenInSym_contains_nocase?: Maybe<Scalars['String']>;
    tokenInSym_ends_with?: Maybe<Scalars['String']>;
    tokenInSym_ends_with_nocase?: Maybe<Scalars['String']>;
    tokenInSym_gt?: Maybe<Scalars['String']>;
    tokenInSym_gte?: Maybe<Scalars['String']>;
    tokenInSym_in?: Maybe<Array<Scalars['String']>>;
    tokenInSym_lt?: Maybe<Scalars['String']>;
    tokenInSym_lte?: Maybe<Scalars['String']>;
    tokenInSym_not?: Maybe<Scalars['String']>;
    tokenInSym_not_contains?: Maybe<Scalars['String']>;
    tokenInSym_not_contains_nocase?: Maybe<Scalars['String']>;
    tokenInSym_not_ends_with?: Maybe<Scalars['String']>;
    tokenInSym_not_ends_with_nocase?: Maybe<Scalars['String']>;
    tokenInSym_not_in?: Maybe<Array<Scalars['String']>>;
    tokenInSym_not_starts_with?: Maybe<Scalars['String']>;
    tokenInSym_not_starts_with_nocase?: Maybe<Scalars['String']>;
    tokenInSym_starts_with?: Maybe<Scalars['String']>;
    tokenInSym_starts_with_nocase?: Maybe<Scalars['String']>;
    tokenIn_contains?: Maybe<Scalars['Bytes']>;
    tokenIn_in?: Maybe<Array<Scalars['Bytes']>>;
    tokenIn_not?: Maybe<Scalars['Bytes']>;
    tokenIn_not_contains?: Maybe<Scalars['Bytes']>;
    tokenIn_not_in?: Maybe<Array<Scalars['Bytes']>>;
    tokenOut?: Maybe<Scalars['Bytes']>;
    tokenOutSym?: Maybe<Scalars['String']>;
    tokenOutSym_contains?: Maybe<Scalars['String']>;
    tokenOutSym_contains_nocase?: Maybe<Scalars['String']>;
    tokenOutSym_ends_with?: Maybe<Scalars['String']>;
    tokenOutSym_ends_with_nocase?: Maybe<Scalars['String']>;
    tokenOutSym_gt?: Maybe<Scalars['String']>;
    tokenOutSym_gte?: Maybe<Scalars['String']>;
    tokenOutSym_in?: Maybe<Array<Scalars['String']>>;
    tokenOutSym_lt?: Maybe<Scalars['String']>;
    tokenOutSym_lte?: Maybe<Scalars['String']>;
    tokenOutSym_not?: Maybe<Scalars['String']>;
    tokenOutSym_not_contains?: Maybe<Scalars['String']>;
    tokenOutSym_not_contains_nocase?: Maybe<Scalars['String']>;
    tokenOutSym_not_ends_with?: Maybe<Scalars['String']>;
    tokenOutSym_not_ends_with_nocase?: Maybe<Scalars['String']>;
    tokenOutSym_not_in?: Maybe<Array<Scalars['String']>>;
    tokenOutSym_not_starts_with?: Maybe<Scalars['String']>;
    tokenOutSym_not_starts_with_nocase?: Maybe<Scalars['String']>;
    tokenOutSym_starts_with?: Maybe<Scalars['String']>;
    tokenOutSym_starts_with_nocase?: Maybe<Scalars['String']>;
    tokenOut_contains?: Maybe<Scalars['Bytes']>;
    tokenOut_in?: Maybe<Array<Scalars['Bytes']>>;
    tokenOut_not?: Maybe<Scalars['Bytes']>;
    tokenOut_not_contains?: Maybe<Scalars['Bytes']>;
    tokenOut_not_in?: Maybe<Array<Scalars['Bytes']>>;
    tx?: Maybe<Scalars['Bytes']>;
    tx_contains?: Maybe<Scalars['Bytes']>;
    tx_in?: Maybe<Array<Scalars['Bytes']>>;
    tx_not?: Maybe<Scalars['Bytes']>;
    tx_not_contains?: Maybe<Scalars['Bytes']>;
    tx_not_in?: Maybe<Array<Scalars['Bytes']>>;
    userAddress?: Maybe<Scalars['String']>;
    userAddress_?: Maybe<User_Filter>;
    userAddress_contains?: Maybe<Scalars['String']>;
    userAddress_contains_nocase?: Maybe<Scalars['String']>;
    userAddress_ends_with?: Maybe<Scalars['String']>;
    userAddress_ends_with_nocase?: Maybe<Scalars['String']>;
    userAddress_gt?: Maybe<Scalars['String']>;
    userAddress_gte?: Maybe<Scalars['String']>;
    userAddress_in?: Maybe<Array<Scalars['String']>>;
    userAddress_lt?: Maybe<Scalars['String']>;
    userAddress_lte?: Maybe<Scalars['String']>;
    userAddress_not?: Maybe<Scalars['String']>;
    userAddress_not_contains?: Maybe<Scalars['String']>;
    userAddress_not_contains_nocase?: Maybe<Scalars['String']>;
    userAddress_not_ends_with?: Maybe<Scalars['String']>;
    userAddress_not_ends_with_nocase?: Maybe<Scalars['String']>;
    userAddress_not_in?: Maybe<Array<Scalars['String']>>;
    userAddress_not_starts_with?: Maybe<Scalars['String']>;
    userAddress_not_starts_with_nocase?: Maybe<Scalars['String']>;
    userAddress_starts_with?: Maybe<Scalars['String']>;
    userAddress_starts_with_nocase?: Maybe<Scalars['String']>;
    valueUSD?: Maybe<Scalars['BigDecimal']>;
    valueUSD_gt?: Maybe<Scalars['BigDecimal']>;
    valueUSD_gte?: Maybe<Scalars['BigDecimal']>;
    valueUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
    valueUSD_lt?: Maybe<Scalars['BigDecimal']>;
    valueUSD_lte?: Maybe<Scalars['BigDecimal']>;
    valueUSD_not?: Maybe<Scalars['BigDecimal']>;
    valueUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
}

export type Swap_OrderBy =
    | 'caller'
    | 'id'
    | 'poolId'
    | 'timestamp'
    | 'tokenAmountIn'
    | 'tokenAmountOut'
    | 'tokenIn'
    | 'tokenInSym'
    | 'tokenOut'
    | 'tokenOutSym'
    | 'tx'
    | 'userAddress'
    | 'valueUSD';

export interface Token {
    __typename: 'Token';
    address: Scalars['String'];
    decimals: Scalars['Int'];
    id: Scalars['ID'];
    latestPrice?: Maybe<LatestPrice>;
    name?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    totalBalanceNotional: Scalars['BigDecimal'];
    totalBalanceUSD: Scalars['BigDecimal'];
    totalSwapCount: Scalars['BigInt'];
    totalVolumeNotional: Scalars['BigDecimal'];
    totalVolumeUSD: Scalars['BigDecimal'];
}

export interface TokenPrice {
    __typename: 'TokenPrice';
    amount: Scalars['BigDecimal'];
    asset: Scalars['Bytes'];
    block: Scalars['BigInt'];
    id: Scalars['ID'];
    poolId: Pool;
    price: Scalars['BigDecimal'];
    priceUSD: Scalars['BigDecimal'];
    pricingAsset: Scalars['Bytes'];
    timestamp: Scalars['Int'];
}

export interface TokenPrice_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    amount?: Maybe<Scalars['BigDecimal']>;
    amount_gt?: Maybe<Scalars['BigDecimal']>;
    amount_gte?: Maybe<Scalars['BigDecimal']>;
    amount_in?: Maybe<Array<Scalars['BigDecimal']>>;
    amount_lt?: Maybe<Scalars['BigDecimal']>;
    amount_lte?: Maybe<Scalars['BigDecimal']>;
    amount_not?: Maybe<Scalars['BigDecimal']>;
    amount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    asset?: Maybe<Scalars['Bytes']>;
    asset_contains?: Maybe<Scalars['Bytes']>;
    asset_in?: Maybe<Array<Scalars['Bytes']>>;
    asset_not?: Maybe<Scalars['Bytes']>;
    asset_not_contains?: Maybe<Scalars['Bytes']>;
    asset_not_in?: Maybe<Array<Scalars['Bytes']>>;
    block?: Maybe<Scalars['BigInt']>;
    block_gt?: Maybe<Scalars['BigInt']>;
    block_gte?: Maybe<Scalars['BigInt']>;
    block_in?: Maybe<Array<Scalars['BigInt']>>;
    block_lt?: Maybe<Scalars['BigInt']>;
    block_lte?: Maybe<Scalars['BigInt']>;
    block_not?: Maybe<Scalars['BigInt']>;
    block_not_in?: Maybe<Array<Scalars['BigInt']>>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    poolId?: Maybe<Scalars['String']>;
    poolId_?: Maybe<Pool_Filter>;
    poolId_contains?: Maybe<Scalars['String']>;
    poolId_contains_nocase?: Maybe<Scalars['String']>;
    poolId_ends_with?: Maybe<Scalars['String']>;
    poolId_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_gt?: Maybe<Scalars['String']>;
    poolId_gte?: Maybe<Scalars['String']>;
    poolId_in?: Maybe<Array<Scalars['String']>>;
    poolId_lt?: Maybe<Scalars['String']>;
    poolId_lte?: Maybe<Scalars['String']>;
    poolId_not?: Maybe<Scalars['String']>;
    poolId_not_contains?: Maybe<Scalars['String']>;
    poolId_not_contains_nocase?: Maybe<Scalars['String']>;
    poolId_not_ends_with?: Maybe<Scalars['String']>;
    poolId_not_ends_with_nocase?: Maybe<Scalars['String']>;
    poolId_not_in?: Maybe<Array<Scalars['String']>>;
    poolId_not_starts_with?: Maybe<Scalars['String']>;
    poolId_not_starts_with_nocase?: Maybe<Scalars['String']>;
    poolId_starts_with?: Maybe<Scalars['String']>;
    poolId_starts_with_nocase?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['BigDecimal']>;
    priceUSD?: Maybe<Scalars['BigDecimal']>;
    priceUSD_gt?: Maybe<Scalars['BigDecimal']>;
    priceUSD_gte?: Maybe<Scalars['BigDecimal']>;
    priceUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
    priceUSD_lt?: Maybe<Scalars['BigDecimal']>;
    priceUSD_lte?: Maybe<Scalars['BigDecimal']>;
    priceUSD_not?: Maybe<Scalars['BigDecimal']>;
    priceUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    price_gt?: Maybe<Scalars['BigDecimal']>;
    price_gte?: Maybe<Scalars['BigDecimal']>;
    price_in?: Maybe<Array<Scalars['BigDecimal']>>;
    price_lt?: Maybe<Scalars['BigDecimal']>;
    price_lte?: Maybe<Scalars['BigDecimal']>;
    price_not?: Maybe<Scalars['BigDecimal']>;
    price_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    pricingAsset?: Maybe<Scalars['Bytes']>;
    pricingAsset_contains?: Maybe<Scalars['Bytes']>;
    pricingAsset_in?: Maybe<Array<Scalars['Bytes']>>;
    pricingAsset_not?: Maybe<Scalars['Bytes']>;
    pricingAsset_not_contains?: Maybe<Scalars['Bytes']>;
    pricingAsset_not_in?: Maybe<Array<Scalars['Bytes']>>;
    timestamp?: Maybe<Scalars['Int']>;
    timestamp_gt?: Maybe<Scalars['Int']>;
    timestamp_gte?: Maybe<Scalars['Int']>;
    timestamp_in?: Maybe<Array<Scalars['Int']>>;
    timestamp_lt?: Maybe<Scalars['Int']>;
    timestamp_lte?: Maybe<Scalars['Int']>;
    timestamp_not?: Maybe<Scalars['Int']>;
    timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
}

export type TokenPrice_OrderBy =
    | 'amount'
    | 'asset'
    | 'block'
    | 'id'
    | 'poolId'
    | 'price'
    | 'priceUSD'
    | 'pricingAsset'
    | 'timestamp';

export interface TokenSnapshot {
    __typename: 'TokenSnapshot';
    id: Scalars['ID'];
    timestamp: Scalars['Int'];
    token: Token;
    totalBalanceNotional: Scalars['BigDecimal'];
    totalBalanceUSD: Scalars['BigDecimal'];
    totalSwapCount: Scalars['BigInt'];
    totalVolumeNotional: Scalars['BigDecimal'];
    totalVolumeUSD: Scalars['BigDecimal'];
}

export interface TokenSnapshot_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    timestamp?: Maybe<Scalars['Int']>;
    timestamp_gt?: Maybe<Scalars['Int']>;
    timestamp_gte?: Maybe<Scalars['Int']>;
    timestamp_in?: Maybe<Array<Scalars['Int']>>;
    timestamp_lt?: Maybe<Scalars['Int']>;
    timestamp_lte?: Maybe<Scalars['Int']>;
    timestamp_not?: Maybe<Scalars['Int']>;
    timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
    token?: Maybe<Scalars['String']>;
    token_?: Maybe<Token_Filter>;
    token_contains?: Maybe<Scalars['String']>;
    token_contains_nocase?: Maybe<Scalars['String']>;
    token_ends_with?: Maybe<Scalars['String']>;
    token_ends_with_nocase?: Maybe<Scalars['String']>;
    token_gt?: Maybe<Scalars['String']>;
    token_gte?: Maybe<Scalars['String']>;
    token_in?: Maybe<Array<Scalars['String']>>;
    token_lt?: Maybe<Scalars['String']>;
    token_lte?: Maybe<Scalars['String']>;
    token_not?: Maybe<Scalars['String']>;
    token_not_contains?: Maybe<Scalars['String']>;
    token_not_contains_nocase?: Maybe<Scalars['String']>;
    token_not_ends_with?: Maybe<Scalars['String']>;
    token_not_ends_with_nocase?: Maybe<Scalars['String']>;
    token_not_in?: Maybe<Array<Scalars['String']>>;
    token_not_starts_with?: Maybe<Scalars['String']>;
    token_not_starts_with_nocase?: Maybe<Scalars['String']>;
    token_starts_with?: Maybe<Scalars['String']>;
    token_starts_with_nocase?: Maybe<Scalars['String']>;
    totalBalanceNotional?: Maybe<Scalars['BigDecimal']>;
    totalBalanceNotional_gt?: Maybe<Scalars['BigDecimal']>;
    totalBalanceNotional_gte?: Maybe<Scalars['BigDecimal']>;
    totalBalanceNotional_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalBalanceNotional_lt?: Maybe<Scalars['BigDecimal']>;
    totalBalanceNotional_lte?: Maybe<Scalars['BigDecimal']>;
    totalBalanceNotional_not?: Maybe<Scalars['BigDecimal']>;
    totalBalanceNotional_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalBalanceUSD?: Maybe<Scalars['BigDecimal']>;
    totalBalanceUSD_gt?: Maybe<Scalars['BigDecimal']>;
    totalBalanceUSD_gte?: Maybe<Scalars['BigDecimal']>;
    totalBalanceUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalBalanceUSD_lt?: Maybe<Scalars['BigDecimal']>;
    totalBalanceUSD_lte?: Maybe<Scalars['BigDecimal']>;
    totalBalanceUSD_not?: Maybe<Scalars['BigDecimal']>;
    totalBalanceUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapCount?: Maybe<Scalars['BigInt']>;
    totalSwapCount_gt?: Maybe<Scalars['BigInt']>;
    totalSwapCount_gte?: Maybe<Scalars['BigInt']>;
    totalSwapCount_in?: Maybe<Array<Scalars['BigInt']>>;
    totalSwapCount_lt?: Maybe<Scalars['BigInt']>;
    totalSwapCount_lte?: Maybe<Scalars['BigInt']>;
    totalSwapCount_not?: Maybe<Scalars['BigInt']>;
    totalSwapCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
    totalVolumeNotional?: Maybe<Scalars['BigDecimal']>;
    totalVolumeNotional_gt?: Maybe<Scalars['BigDecimal']>;
    totalVolumeNotional_gte?: Maybe<Scalars['BigDecimal']>;
    totalVolumeNotional_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalVolumeNotional_lt?: Maybe<Scalars['BigDecimal']>;
    totalVolumeNotional_lte?: Maybe<Scalars['BigDecimal']>;
    totalVolumeNotional_not?: Maybe<Scalars['BigDecimal']>;
    totalVolumeNotional_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalVolumeUSD?: Maybe<Scalars['BigDecimal']>;
    totalVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
    totalVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
    totalVolumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
    totalVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
    totalVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
    totalVolumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
}

export type TokenSnapshot_OrderBy =
    | 'id'
    | 'timestamp'
    | 'token'
    | 'totalBalanceNotional'
    | 'totalBalanceUSD'
    | 'totalSwapCount'
    | 'totalVolumeNotional'
    | 'totalVolumeUSD';

export interface Token_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    address?: Maybe<Scalars['String']>;
    address_contains?: Maybe<Scalars['String']>;
    address_contains_nocase?: Maybe<Scalars['String']>;
    address_ends_with?: Maybe<Scalars['String']>;
    address_ends_with_nocase?: Maybe<Scalars['String']>;
    address_gt?: Maybe<Scalars['String']>;
    address_gte?: Maybe<Scalars['String']>;
    address_in?: Maybe<Array<Scalars['String']>>;
    address_lt?: Maybe<Scalars['String']>;
    address_lte?: Maybe<Scalars['String']>;
    address_not?: Maybe<Scalars['String']>;
    address_not_contains?: Maybe<Scalars['String']>;
    address_not_contains_nocase?: Maybe<Scalars['String']>;
    address_not_ends_with?: Maybe<Scalars['String']>;
    address_not_ends_with_nocase?: Maybe<Scalars['String']>;
    address_not_in?: Maybe<Array<Scalars['String']>>;
    address_not_starts_with?: Maybe<Scalars['String']>;
    address_not_starts_with_nocase?: Maybe<Scalars['String']>;
    address_starts_with?: Maybe<Scalars['String']>;
    address_starts_with_nocase?: Maybe<Scalars['String']>;
    decimals?: Maybe<Scalars['Int']>;
    decimals_gt?: Maybe<Scalars['Int']>;
    decimals_gte?: Maybe<Scalars['Int']>;
    decimals_in?: Maybe<Array<Scalars['Int']>>;
    decimals_lt?: Maybe<Scalars['Int']>;
    decimals_lte?: Maybe<Scalars['Int']>;
    decimals_not?: Maybe<Scalars['Int']>;
    decimals_not_in?: Maybe<Array<Scalars['Int']>>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    latestPrice?: Maybe<Scalars['String']>;
    latestPrice_?: Maybe<LatestPrice_Filter>;
    latestPrice_contains?: Maybe<Scalars['String']>;
    latestPrice_contains_nocase?: Maybe<Scalars['String']>;
    latestPrice_ends_with?: Maybe<Scalars['String']>;
    latestPrice_ends_with_nocase?: Maybe<Scalars['String']>;
    latestPrice_gt?: Maybe<Scalars['String']>;
    latestPrice_gte?: Maybe<Scalars['String']>;
    latestPrice_in?: Maybe<Array<Scalars['String']>>;
    latestPrice_lt?: Maybe<Scalars['String']>;
    latestPrice_lte?: Maybe<Scalars['String']>;
    latestPrice_not?: Maybe<Scalars['String']>;
    latestPrice_not_contains?: Maybe<Scalars['String']>;
    latestPrice_not_contains_nocase?: Maybe<Scalars['String']>;
    latestPrice_not_ends_with?: Maybe<Scalars['String']>;
    latestPrice_not_ends_with_nocase?: Maybe<Scalars['String']>;
    latestPrice_not_in?: Maybe<Array<Scalars['String']>>;
    latestPrice_not_starts_with?: Maybe<Scalars['String']>;
    latestPrice_not_starts_with_nocase?: Maybe<Scalars['String']>;
    latestPrice_starts_with?: Maybe<Scalars['String']>;
    latestPrice_starts_with_nocase?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    name_contains?: Maybe<Scalars['String']>;
    name_contains_nocase?: Maybe<Scalars['String']>;
    name_ends_with?: Maybe<Scalars['String']>;
    name_ends_with_nocase?: Maybe<Scalars['String']>;
    name_gt?: Maybe<Scalars['String']>;
    name_gte?: Maybe<Scalars['String']>;
    name_in?: Maybe<Array<Scalars['String']>>;
    name_lt?: Maybe<Scalars['String']>;
    name_lte?: Maybe<Scalars['String']>;
    name_not?: Maybe<Scalars['String']>;
    name_not_contains?: Maybe<Scalars['String']>;
    name_not_contains_nocase?: Maybe<Scalars['String']>;
    name_not_ends_with?: Maybe<Scalars['String']>;
    name_not_ends_with_nocase?: Maybe<Scalars['String']>;
    name_not_in?: Maybe<Array<Scalars['String']>>;
    name_not_starts_with?: Maybe<Scalars['String']>;
    name_not_starts_with_nocase?: Maybe<Scalars['String']>;
    name_starts_with?: Maybe<Scalars['String']>;
    name_starts_with_nocase?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    symbol_contains?: Maybe<Scalars['String']>;
    symbol_contains_nocase?: Maybe<Scalars['String']>;
    symbol_ends_with?: Maybe<Scalars['String']>;
    symbol_ends_with_nocase?: Maybe<Scalars['String']>;
    symbol_gt?: Maybe<Scalars['String']>;
    symbol_gte?: Maybe<Scalars['String']>;
    symbol_in?: Maybe<Array<Scalars['String']>>;
    symbol_lt?: Maybe<Scalars['String']>;
    symbol_lte?: Maybe<Scalars['String']>;
    symbol_not?: Maybe<Scalars['String']>;
    symbol_not_contains?: Maybe<Scalars['String']>;
    symbol_not_contains_nocase?: Maybe<Scalars['String']>;
    symbol_not_ends_with?: Maybe<Scalars['String']>;
    symbol_not_ends_with_nocase?: Maybe<Scalars['String']>;
    symbol_not_in?: Maybe<Array<Scalars['String']>>;
    symbol_not_starts_with?: Maybe<Scalars['String']>;
    symbol_not_starts_with_nocase?: Maybe<Scalars['String']>;
    symbol_starts_with?: Maybe<Scalars['String']>;
    symbol_starts_with_nocase?: Maybe<Scalars['String']>;
    totalBalanceNotional?: Maybe<Scalars['BigDecimal']>;
    totalBalanceNotional_gt?: Maybe<Scalars['BigDecimal']>;
    totalBalanceNotional_gte?: Maybe<Scalars['BigDecimal']>;
    totalBalanceNotional_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalBalanceNotional_lt?: Maybe<Scalars['BigDecimal']>;
    totalBalanceNotional_lte?: Maybe<Scalars['BigDecimal']>;
    totalBalanceNotional_not?: Maybe<Scalars['BigDecimal']>;
    totalBalanceNotional_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalBalanceUSD?: Maybe<Scalars['BigDecimal']>;
    totalBalanceUSD_gt?: Maybe<Scalars['BigDecimal']>;
    totalBalanceUSD_gte?: Maybe<Scalars['BigDecimal']>;
    totalBalanceUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalBalanceUSD_lt?: Maybe<Scalars['BigDecimal']>;
    totalBalanceUSD_lte?: Maybe<Scalars['BigDecimal']>;
    totalBalanceUSD_not?: Maybe<Scalars['BigDecimal']>;
    totalBalanceUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapCount?: Maybe<Scalars['BigInt']>;
    totalSwapCount_gt?: Maybe<Scalars['BigInt']>;
    totalSwapCount_gte?: Maybe<Scalars['BigInt']>;
    totalSwapCount_in?: Maybe<Array<Scalars['BigInt']>>;
    totalSwapCount_lt?: Maybe<Scalars['BigInt']>;
    totalSwapCount_lte?: Maybe<Scalars['BigInt']>;
    totalSwapCount_not?: Maybe<Scalars['BigInt']>;
    totalSwapCount_not_in?: Maybe<Array<Scalars['BigInt']>>;
    totalVolumeNotional?: Maybe<Scalars['BigDecimal']>;
    totalVolumeNotional_gt?: Maybe<Scalars['BigDecimal']>;
    totalVolumeNotional_gte?: Maybe<Scalars['BigDecimal']>;
    totalVolumeNotional_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalVolumeNotional_lt?: Maybe<Scalars['BigDecimal']>;
    totalVolumeNotional_lte?: Maybe<Scalars['BigDecimal']>;
    totalVolumeNotional_not?: Maybe<Scalars['BigDecimal']>;
    totalVolumeNotional_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalVolumeUSD?: Maybe<Scalars['BigDecimal']>;
    totalVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
    totalVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
    totalVolumeUSD_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
    totalVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
    totalVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
    totalVolumeUSD_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
}

export type Token_OrderBy =
    | 'address'
    | 'decimals'
    | 'id'
    | 'latestPrice'
    | 'name'
    | 'symbol'
    | 'totalBalanceNotional'
    | 'totalBalanceUSD'
    | 'totalSwapCount'
    | 'totalVolumeNotional'
    | 'totalVolumeUSD';

export interface TradePair {
    __typename: 'TradePair';
    /** Token Address - Token Address */
    id: Scalars['ID'];
    token0: Token;
    token1: Token;
    totalSwapFee: Scalars['BigDecimal'];
    totalSwapVolume: Scalars['BigDecimal'];
}

export interface TradePairSnapshot {
    __typename: 'TradePairSnapshot';
    id: Scalars['ID'];
    pair: TradePair;
    timestamp: Scalars['Int'];
    totalSwapFee: Scalars['BigDecimal'];
    totalSwapVolume: Scalars['BigDecimal'];
}

export interface TradePairSnapshot_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    pair?: Maybe<Scalars['String']>;
    pair_?: Maybe<TradePair_Filter>;
    pair_contains?: Maybe<Scalars['String']>;
    pair_contains_nocase?: Maybe<Scalars['String']>;
    pair_ends_with?: Maybe<Scalars['String']>;
    pair_ends_with_nocase?: Maybe<Scalars['String']>;
    pair_gt?: Maybe<Scalars['String']>;
    pair_gte?: Maybe<Scalars['String']>;
    pair_in?: Maybe<Array<Scalars['String']>>;
    pair_lt?: Maybe<Scalars['String']>;
    pair_lte?: Maybe<Scalars['String']>;
    pair_not?: Maybe<Scalars['String']>;
    pair_not_contains?: Maybe<Scalars['String']>;
    pair_not_contains_nocase?: Maybe<Scalars['String']>;
    pair_not_ends_with?: Maybe<Scalars['String']>;
    pair_not_ends_with_nocase?: Maybe<Scalars['String']>;
    pair_not_in?: Maybe<Array<Scalars['String']>>;
    pair_not_starts_with?: Maybe<Scalars['String']>;
    pair_not_starts_with_nocase?: Maybe<Scalars['String']>;
    pair_starts_with?: Maybe<Scalars['String']>;
    pair_starts_with_nocase?: Maybe<Scalars['String']>;
    timestamp?: Maybe<Scalars['Int']>;
    timestamp_gt?: Maybe<Scalars['Int']>;
    timestamp_gte?: Maybe<Scalars['Int']>;
    timestamp_in?: Maybe<Array<Scalars['Int']>>;
    timestamp_lt?: Maybe<Scalars['Int']>;
    timestamp_lte?: Maybe<Scalars['Int']>;
    timestamp_not?: Maybe<Scalars['Int']>;
    timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
    totalSwapFee?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_gt?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_gte?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapFee_lt?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_lte?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_not?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapVolume?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_gt?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_gte?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapVolume_lt?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_lte?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_not?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
}

export type TradePairSnapshot_OrderBy = 'id' | 'pair' | 'timestamp' | 'totalSwapFee' | 'totalSwapVolume';

export interface TradePair_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    token0?: Maybe<Scalars['String']>;
    token0_?: Maybe<Token_Filter>;
    token0_contains?: Maybe<Scalars['String']>;
    token0_contains_nocase?: Maybe<Scalars['String']>;
    token0_ends_with?: Maybe<Scalars['String']>;
    token0_ends_with_nocase?: Maybe<Scalars['String']>;
    token0_gt?: Maybe<Scalars['String']>;
    token0_gte?: Maybe<Scalars['String']>;
    token0_in?: Maybe<Array<Scalars['String']>>;
    token0_lt?: Maybe<Scalars['String']>;
    token0_lte?: Maybe<Scalars['String']>;
    token0_not?: Maybe<Scalars['String']>;
    token0_not_contains?: Maybe<Scalars['String']>;
    token0_not_contains_nocase?: Maybe<Scalars['String']>;
    token0_not_ends_with?: Maybe<Scalars['String']>;
    token0_not_ends_with_nocase?: Maybe<Scalars['String']>;
    token0_not_in?: Maybe<Array<Scalars['String']>>;
    token0_not_starts_with?: Maybe<Scalars['String']>;
    token0_not_starts_with_nocase?: Maybe<Scalars['String']>;
    token0_starts_with?: Maybe<Scalars['String']>;
    token0_starts_with_nocase?: Maybe<Scalars['String']>;
    token1?: Maybe<Scalars['String']>;
    token1_?: Maybe<Token_Filter>;
    token1_contains?: Maybe<Scalars['String']>;
    token1_contains_nocase?: Maybe<Scalars['String']>;
    token1_ends_with?: Maybe<Scalars['String']>;
    token1_ends_with_nocase?: Maybe<Scalars['String']>;
    token1_gt?: Maybe<Scalars['String']>;
    token1_gte?: Maybe<Scalars['String']>;
    token1_in?: Maybe<Array<Scalars['String']>>;
    token1_lt?: Maybe<Scalars['String']>;
    token1_lte?: Maybe<Scalars['String']>;
    token1_not?: Maybe<Scalars['String']>;
    token1_not_contains?: Maybe<Scalars['String']>;
    token1_not_contains_nocase?: Maybe<Scalars['String']>;
    token1_not_ends_with?: Maybe<Scalars['String']>;
    token1_not_ends_with_nocase?: Maybe<Scalars['String']>;
    token1_not_in?: Maybe<Array<Scalars['String']>>;
    token1_not_starts_with?: Maybe<Scalars['String']>;
    token1_not_starts_with_nocase?: Maybe<Scalars['String']>;
    token1_starts_with?: Maybe<Scalars['String']>;
    token1_starts_with_nocase?: Maybe<Scalars['String']>;
    totalSwapFee?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_gt?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_gte?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapFee_lt?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_lte?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_not?: Maybe<Scalars['BigDecimal']>;
    totalSwapFee_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapVolume?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_gt?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_gte?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_in?: Maybe<Array<Scalars['BigDecimal']>>;
    totalSwapVolume_lt?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_lte?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_not?: Maybe<Scalars['BigDecimal']>;
    totalSwapVolume_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
}

export type TradePair_OrderBy = 'id' | 'token0' | 'token1' | 'totalSwapFee' | 'totalSwapVolume';

export interface User {
    __typename: 'User';
    id: Scalars['ID'];
    sharesOwned?: Maybe<Array<PoolShare>>;
    swaps?: Maybe<Array<Swap>>;
    userInternalBalances?: Maybe<Array<UserInternalBalance>>;
}

export interface UserSharesOwnedArgs {
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PoolShare_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<PoolShare_Filter>;
}

export interface UserSwapsArgs {
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Swap_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<Swap_Filter>;
}

export interface UserUserInternalBalancesArgs {
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<UserInternalBalance_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    skip?: Maybe<Scalars['Int']>;
    where?: Maybe<UserInternalBalance_Filter>;
}

export interface UserInternalBalance {
    __typename: 'UserInternalBalance';
    balance: Scalars['BigDecimal'];
    id: Scalars['ID'];
    token: Scalars['Bytes'];
    userAddress?: Maybe<User>;
}

export interface UserInternalBalance_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    balance?: Maybe<Scalars['BigDecimal']>;
    balance_gt?: Maybe<Scalars['BigDecimal']>;
    balance_gte?: Maybe<Scalars['BigDecimal']>;
    balance_in?: Maybe<Array<Scalars['BigDecimal']>>;
    balance_lt?: Maybe<Scalars['BigDecimal']>;
    balance_lte?: Maybe<Scalars['BigDecimal']>;
    balance_not?: Maybe<Scalars['BigDecimal']>;
    balance_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    token?: Maybe<Scalars['Bytes']>;
    token_contains?: Maybe<Scalars['Bytes']>;
    token_in?: Maybe<Array<Scalars['Bytes']>>;
    token_not?: Maybe<Scalars['Bytes']>;
    token_not_contains?: Maybe<Scalars['Bytes']>;
    token_not_in?: Maybe<Array<Scalars['Bytes']>>;
    userAddress?: Maybe<Scalars['String']>;
    userAddress_?: Maybe<User_Filter>;
    userAddress_contains?: Maybe<Scalars['String']>;
    userAddress_contains_nocase?: Maybe<Scalars['String']>;
    userAddress_ends_with?: Maybe<Scalars['String']>;
    userAddress_ends_with_nocase?: Maybe<Scalars['String']>;
    userAddress_gt?: Maybe<Scalars['String']>;
    userAddress_gte?: Maybe<Scalars['String']>;
    userAddress_in?: Maybe<Array<Scalars['String']>>;
    userAddress_lt?: Maybe<Scalars['String']>;
    userAddress_lte?: Maybe<Scalars['String']>;
    userAddress_not?: Maybe<Scalars['String']>;
    userAddress_not_contains?: Maybe<Scalars['String']>;
    userAddress_not_contains_nocase?: Maybe<Scalars['String']>;
    userAddress_not_ends_with?: Maybe<Scalars['String']>;
    userAddress_not_ends_with_nocase?: Maybe<Scalars['String']>;
    userAddress_not_in?: Maybe<Array<Scalars['String']>>;
    userAddress_not_starts_with?: Maybe<Scalars['String']>;
    userAddress_not_starts_with_nocase?: Maybe<Scalars['String']>;
    userAddress_starts_with?: Maybe<Scalars['String']>;
    userAddress_starts_with_nocase?: Maybe<Scalars['String']>;
}

export type UserInternalBalance_OrderBy = 'balance' | 'id' | 'token' | 'userAddress';

export interface User_Filter {
    /** Filter for the block changed event. */
    _change_block?: Maybe<BlockChangedFilter>;
    id?: Maybe<Scalars['ID']>;
    id_gt?: Maybe<Scalars['ID']>;
    id_gte?: Maybe<Scalars['ID']>;
    id_in?: Maybe<Array<Scalars['ID']>>;
    id_lt?: Maybe<Scalars['ID']>;
    id_lte?: Maybe<Scalars['ID']>;
    id_not?: Maybe<Scalars['ID']>;
    id_not_in?: Maybe<Array<Scalars['ID']>>;
    sharesOwned_?: Maybe<PoolShare_Filter>;
    swaps_?: Maybe<Swap_Filter>;
    userInternalBalances_?: Maybe<UserInternalBalance_Filter>;
}

export type User_OrderBy = 'id' | 'sharesOwned' | 'swaps' | 'userInternalBalances';

export interface _Block_ {
    __typename: '_Block_';
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']>;
    /** The block number */
    number: Scalars['Int'];
}

/** The type for the top-level _meta field */
export interface _Meta_ {
    __typename: '_Meta_';
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     *
     */
    block: _Block_;
    /** The deployment ID */
    deployment: Scalars['String'];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean'];
}

export type _SubgraphErrorPolicy_ =
    /** Data will be returned even if the subgraph has indexing errors */
    | 'allow'
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    | 'deny';

export type GetProtocolDataQueryVariables = Exact<{
    startTimestamp: Scalars['Int'];
    block24: Block_Height;
    block48: Block_Height;
}>;

export type GetProtocolDataQuery = {
    __typename: 'Query';
    balancers: Array<{
        __typename: 'Balancer';
        totalLiquidity: string;
        totalSwapCount: string;
        totalSwapFee: string;
        totalSwapVolume: string;
        poolCount: number;
    }>;
    balancers24: Array<{
        __typename: 'Balancer';
        totalLiquidity: string;
        totalSwapCount: string;
        totalSwapFee: string;
        totalSwapVolume: string;
        poolCount: number;
    }>;
    balancers48: Array<{
        __typename: 'Balancer';
        totalLiquidity: string;
        totalSwapCount: string;
        totalSwapFee: string;
        totalSwapVolume: string;
        poolCount: number;
    }>;
    balancerSnapshots: Array<{
        __typename: 'BalancerSnapshot';
        id: string;
        timestamp: number;
        poolCount: number;
        totalLiquidity: string;
        totalSwapCount: string;
        totalSwapVolume: string;
        totalSwapFee: string;
    }>;
    whaleSwaps: Array<{
        __typename: 'Swap';
        id: string;
        caller: string;
        tokenIn: string;
        tokenInSym: string;
        tokenOut: string;
        tokenOutSym: string;
        tokenAmountIn: string;
        tokenAmountOut: string;
        timestamp: number;
        tx: string;
        poolId: { __typename: 'Pool'; id: string; name?: string | null | undefined; address: string; swapFee: string };
        userAddress: { __typename: 'User'; id: string };
    }>;
};

export type GetTokenDataQueryVariables = Exact<{
    block24: Block_Height;
    blockWeek: Block_Height;
}>;

export type GetTokenDataQuery = {
    __typename: 'Query';
    tokens: Array<{
        __typename: 'Token';
        id: string;
        address: string;
        decimals: number;
        name?: string | null | undefined;
        symbol?: string | null | undefined;
        totalBalanceUSD: string;
        totalBalanceNotional: string;
        totalVolumeUSD: string;
        totalVolumeNotional: string;
        totalSwapCount: string;
        latestPrice?:
            | {
                  __typename: 'LatestPrice';
                  asset: string;
                  pricingAsset: string;
                  price: string;
                  poolId: { __typename: 'Pool'; id: string };
              }
            | null
            | undefined;
    }>;
    prices: Array<{
        __typename: 'LatestPrice';
        asset: string;
        pricingAsset: string;
        price: string;
        poolId: { __typename: 'Pool'; id: string };
    }>;
    tokens24: Array<{
        __typename: 'Token';
        id: string;
        address: string;
        decimals: number;
        name?: string | null | undefined;
        symbol?: string | null | undefined;
        totalBalanceUSD: string;
        totalBalanceNotional: string;
        totalVolumeUSD: string;
        totalVolumeNotional: string;
        totalSwapCount: string;
        latestPrice?:
            | {
                  __typename: 'LatestPrice';
                  asset: string;
                  pricingAsset: string;
                  price: string;
                  poolId: { __typename: 'Pool'; id: string };
              }
            | null
            | undefined;
    }>;
    prices24: Array<{
        __typename: 'LatestPrice';
        asset: string;
        pricingAsset: string;
        price: string;
        poolId: { __typename: 'Pool'; id: string };
    }>;
    tokensWeek: Array<{
        __typename: 'Token';
        id: string;
        address: string;
        decimals: number;
        name?: string | null | undefined;
        symbol?: string | null | undefined;
        totalBalanceUSD: string;
        totalBalanceNotional: string;
        totalVolumeUSD: string;
        totalVolumeNotional: string;
        totalSwapCount: string;
        latestPrice?:
            | {
                  __typename: 'LatestPrice';
                  asset: string;
                  pricingAsset: string;
                  price: string;
                  poolId: { __typename: 'Pool'; id: string };
              }
            | null
            | undefined;
    }>;
    pricesWeek: Array<{
        __typename: 'LatestPrice';
        asset: string;
        pricingAsset: string;
        price: string;
        poolId: { __typename: 'Pool'; id: string };
    }>;
};

export type GetTokenPageDataQueryVariables = Exact<{
    address: Scalars['String'];
    startTimestamp: Scalars['Int'];
}>;

export type GetTokenPageDataQuery = {
    __typename: 'Query';
    tokenSnapshots: Array<{
        __typename: 'TokenSnapshot';
        id: string;
        timestamp: number;
        totalBalanceUSD: string;
        totalBalanceNotional: string;
        totalVolumeUSD: string;
        totalVolumeNotional: string;
        totalSwapCount: string;
    }>;
};

export type GetTransactionDataQueryVariables = Exact<{
    addresses: Array<Scalars['Bytes']> | Scalars['Bytes'];
    poolIds: Array<Scalars['String']> | Scalars['String'];
    startTimestamp: Scalars['Int'];
}>;

export type GetTransactionDataQuery = {
    __typename: 'Query';
    swapsIn: Array<{
        __typename: 'Swap';
        id: string;
        caller: string;
        tokenIn: string;
        tokenInSym: string;
        tokenOut: string;
        tokenOutSym: string;
        tokenAmountIn: string;
        tokenAmountOut: string;
        timestamp: number;
        tx: string;
        poolId: { __typename: 'Pool'; id: string; name?: string | null | undefined; address: string; swapFee: string };
        userAddress: { __typename: 'User'; id: string };
    }>;
    swapsOut: Array<{
        __typename: 'Swap';
        id: string;
        caller: string;
        tokenIn: string;
        tokenInSym: string;
        tokenOut: string;
        tokenOutSym: string;
        tokenAmountIn: string;
        tokenAmountOut: string;
        timestamp: number;
        tx: string;
        poolId: { __typename: 'Pool'; id: string; name?: string | null | undefined; address: string; swapFee: string };
        userAddress: { __typename: 'User'; id: string };
    }>;
    joinExits: Array<{
        __typename: 'JoinExit';
        amounts: Array<string>;
        id: string;
        sender: string;
        timestamp: number;
        tx: string;
        type: InvestType;
        user: { __typename: 'User'; id: string };
        pool: { __typename: 'Pool'; id: string; tokensList: Array<string> };
    }>;
};

export type TokenSnapshotFragment = {
    __typename: 'TokenSnapshot';
    id: string;
    timestamp: number;
    totalBalanceUSD: string;
    totalBalanceNotional: string;
    totalVolumeUSD: string;
    totalVolumeNotional: string;
    totalSwapCount: string;
};

export type GetPoolDataQueryVariables = Exact<{
    block24: Block_Height;
    block48: Block_Height;
    blockWeek: Block_Height;
}>;

export type GetPoolDataQuery = {
    __typename: 'Query';
    pools: Array<{
        __typename: 'Pool';
        id: string;
        address: string;
        poolType?: string | null | undefined;
        symbol?: string | null | undefined;
        name?: string | null | undefined;
        swapFee: string;
        totalWeight?: string | null | undefined;
        totalSwapVolume: string;
        totalSwapFee: string;
        totalLiquidity: string;
        totalShares: string;
        swapsCount: string;
        holdersCount: string;
        createTime: number;
        owner?: string | null | undefined;
        strategyType: number;
        swapEnabled: boolean;
        tokens?:
            | Array<{
                  __typename: 'PoolToken';
                  id: string;
                  symbol: string;
                  name: string;
                  decimals: number;
                  address: string;
                  balance: string;
                  weight?: string | null | undefined;
                  priceRate: string;
                  poolId: { __typename: 'Pool'; id: string; address: string };
              }>
            | null
            | undefined;
    }>;
    pools24: Array<{
        __typename: 'Pool';
        id: string;
        address: string;
        poolType?: string | null | undefined;
        symbol?: string | null | undefined;
        name?: string | null | undefined;
        swapFee: string;
        totalWeight?: string | null | undefined;
        totalSwapVolume: string;
        totalSwapFee: string;
        totalLiquidity: string;
        totalShares: string;
        swapsCount: string;
        holdersCount: string;
        createTime: number;
        owner?: string | null | undefined;
        strategyType: number;
        swapEnabled: boolean;
        tokens?:
            | Array<{
                  __typename: 'PoolToken';
                  id: string;
                  symbol: string;
                  name: string;
                  decimals: number;
                  address: string;
                  balance: string;
                  weight?: string | null | undefined;
                  priceRate: string;
                  poolId: { __typename: 'Pool'; id: string; address: string };
              }>
            | null
            | undefined;
    }>;
    pools48: Array<{
        __typename: 'Pool';
        id: string;
        address: string;
        poolType?: string | null | undefined;
        symbol?: string | null | undefined;
        name?: string | null | undefined;
        swapFee: string;
        totalWeight?: string | null | undefined;
        totalSwapVolume: string;
        totalSwapFee: string;
        totalLiquidity: string;
        totalShares: string;
        swapsCount: string;
        holdersCount: string;
        createTime: number;
        owner?: string | null | undefined;
        strategyType: number;
        swapEnabled: boolean;
        tokens?:
            | Array<{
                  __typename: 'PoolToken';
                  id: string;
                  symbol: string;
                  name: string;
                  decimals: number;
                  address: string;
                  balance: string;
                  weight?: string | null | undefined;
                  priceRate: string;
                  poolId: { __typename: 'Pool'; id: string; address: string };
              }>
            | null
            | undefined;
    }>;
    poolsWeek: Array<{
        __typename: 'Pool';
        id: string;
        address: string;
        poolType?: string | null | undefined;
        symbol?: string | null | undefined;
        name?: string | null | undefined;
        swapFee: string;
        totalWeight?: string | null | undefined;
        totalSwapVolume: string;
        totalSwapFee: string;
        totalLiquidity: string;
        totalShares: string;
        swapsCount: string;
        holdersCount: string;
        createTime: number;
        owner?: string | null | undefined;
        strategyType: number;
        swapEnabled: boolean;
        tokens?:
            | Array<{
                  __typename: 'PoolToken';
                  id: string;
                  symbol: string;
                  name: string;
                  decimals: number;
                  address: string;
                  balance: string;
                  weight?: string | null | undefined;
                  priceRate: string;
                  poolId: { __typename: 'Pool'; id: string; address: string };
              }>
            | null
            | undefined;
    }>;
    prices: Array<{
        __typename: 'LatestPrice';
        asset: string;
        pricingAsset: string;
        price: string;
        poolId: { __typename: 'Pool'; id: string };
    }>;
};

export type GetUserWalletPoolDataQueryVariables = Exact<{
    userAddress: Scalars['String'];
    block: Scalars['Int'];
}>;

export type GetUserWalletPoolDataQuery = {
    __typename: 'Query';
    poolShares: Array<{
        __typename: 'PoolShare';
        balance: string;
        poolId: { __typename: 'Pool'; id: string; totalLiquidity: string; totalShares: string };
    }>;
};

export type GetPoolChartDataQueryVariables = Exact<{
    poolId: Scalars['String'];
    startTimestamp: Scalars['Int'];
}>;

export type GetPoolChartDataQuery = {
    __typename: 'Query';
    poolSnapshots: Array<{
        __typename: 'PoolSnapshot';
        id: string;
        amounts: Array<string>;
        totalShares: string;
        swapVolume: string;
        swapFees: string;
        timestamp: number;
        totalSwapVolume: string;
        totalSwapFee: string;
        totalLiquidity: string;
        swapsCount: string;
        holdersCount: string;
        pool: { __typename: 'Pool'; id: string };
    }>;
};

export type BalancerPoolSwapFeeSnapshotQueryVariables = Exact<{
    startTimestamp: Scalars['Int'];
    endTimeStamp: Scalars['Int'];
}>;

export type BalancerPoolSwapFeeSnapshotQuery = {
    __typename: 'Query';
    poolSnapshots: Array<{
        __typename: 'PoolSnapshot';
        id: string;
        amounts: Array<string>;
        totalShares: string;
        swapVolume: string;
        swapFees: string;
        timestamp: number;
        totalSwapVolume: string;
        totalSwapFee: string;
        totalLiquidity: string;
        swapsCount: string;
        holdersCount: string;
        pool: { __typename: 'Pool'; id: string };
    }>;
};

export type LatestPriceFragment = {
    __typename: 'LatestPrice';
    asset: string;
    pricingAsset: string;
    price: string;
    poolId: { __typename: 'Pool'; id: string };
};

export type BalancerProtocolDataQueryVariables = Exact<{
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Balancer_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Balancer_Filter>;
    block?: Maybe<Block_Height>;
}>;

export type BalancerProtocolDataQuery = {
    __typename: 'Query';
    balancers: Array<{
        __typename: 'Balancer';
        id: string;
        totalLiquidity: string;
        totalSwapVolume: string;
        totalSwapFee: string;
        poolCount: number;
        totalSwapCount: string;
    }>;
};

export type BalancerUserQueryVariables = Exact<{
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
}>;

export type BalancerUserQuery = {
    __typename: 'Query';
    user?:
        | {
              __typename: 'User';
              id: string;
              sharesOwned?:
                  | Array<{ __typename: 'PoolShare'; balance: string; poolId: { __typename: 'Pool'; id: string } }>
                  | null
                  | undefined;
          }
        | null
        | undefined;
};

export type BalancerUsersQueryVariables = Exact<{
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<User_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<User_Filter>;
    block?: Maybe<Block_Height>;
}>;

export type BalancerUsersQuery = {
    __typename: 'Query';
    users: Array<{
        __typename: 'User';
        id: string;
        sharesOwned?:
            | Array<{ __typename: 'PoolShare'; balance: string; poolId: { __typename: 'Pool'; id: string } }>
            | null
            | undefined;
    }>;
};

export type UserFragment = {
    __typename: 'User';
    id: string;
    sharesOwned?:
        | Array<{ __typename: 'PoolShare'; balance: string; poolId: { __typename: 'Pool'; id: string } }>
        | null
        | undefined;
};

export type BalancerTokenPricesQueryVariables = Exact<{
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<TokenPrice_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<TokenPrice_Filter>;
    block?: Maybe<Block_Height>;
}>;

export type BalancerTokenPricesQuery = {
    __typename: 'Query';
    tokenPrices: Array<{
        __typename: 'TokenPrice';
        id: string;
        asset: string;
        amount: string;
        pricingAsset: string;
        price: string;
        block: string;
        timestamp: number;
        poolId: { __typename: 'Pool'; id: string };
    }>;
};

export type BalancerChartTokenPricesQueryVariables = Exact<{
    asset: Scalars['Bytes'];
}>;

export type BalancerChartTokenPricesQuery = {
    __typename: 'Query';
    prices1: Array<{ __typename: 'TokenPrice'; id: string; timestamp: number; price: string; amount: string }>;
    prices2: Array<{ __typename: 'TokenPrice'; id: string; timestamp: number; price: string; amount: string }>;
    prices3: Array<{ __typename: 'TokenPrice'; id: string; timestamp: number; price: string; amount: string }>;
    prices4: Array<{ __typename: 'TokenPrice'; id: string; timestamp: number; price: string; amount: string }>;
    prices5: Array<{ __typename: 'TokenPrice'; id: string; timestamp: number; price: string; amount: string }>;
    prices6: Array<{ __typename: 'TokenPrice'; id: string; timestamp: number; price: string; amount: string }>;
};

export type BalancerChartTokenPriceFragment = {
    __typename: 'TokenPrice';
    id: string;
    timestamp: number;
    price: string;
    amount: string;
};

export type BalancerTokenPriceFragment = {
    __typename: 'TokenPrice';
    id: string;
    asset: string;
    amount: string;
    pricingAsset: string;
    price: string;
    block: string;
    timestamp: number;
    poolId: { __typename: 'Pool'; id: string };
};

export type BalancerPoolFragment = {
    __typename: 'Pool';
    id: string;
    address: string;
    poolType?: string | null | undefined;
    symbol?: string | null | undefined;
    name?: string | null | undefined;
    swapFee: string;
    totalWeight?: string | null | undefined;
    totalSwapVolume: string;
    totalSwapFee: string;
    totalLiquidity: string;
    totalShares: string;
    swapsCount: string;
    holdersCount: string;
    createTime: number;
    owner?: string | null | undefined;
    strategyType: number;
    swapEnabled: boolean;
    tokens?:
        | Array<{
              __typename: 'PoolToken';
              id: string;
              symbol: string;
              name: string;
              decimals: number;
              address: string;
              balance: string;
              weight?: string | null | undefined;
              priceRate: string;
              poolId: { __typename: 'Pool'; id: string; address: string };
          }>
        | null
        | undefined;
};

export type BalancerPoolTokenFragment = {
    __typename: 'PoolToken';
    id: string;
    symbol: string;
    name: string;
    decimals: number;
    address: string;
    balance: string;
    weight?: string | null | undefined;
    priceRate: string;
    poolId: { __typename: 'Pool'; id: string; address: string };
};

export type GetBalancerPoolsQueryVariables = Exact<{
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Pool_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Pool_Filter>;
    block?: Maybe<Block_Height>;
}>;

export type GetBalancerPoolsQuery = {
    __typename: 'Query';
    pools: Array<{
        __typename: 'Pool';
        id: string;
        address: string;
        poolType?: string | null | undefined;
        symbol?: string | null | undefined;
        name?: string | null | undefined;
        swapFee: string;
        totalWeight?: string | null | undefined;
        totalSwapVolume: string;
        totalSwapFee: string;
        totalLiquidity: string;
        totalShares: string;
        swapsCount: string;
        holdersCount: string;
        createTime: number;
        owner?: string | null | undefined;
        strategyType: number;
        swapEnabled: boolean;
        tokens?:
            | Array<{
                  __typename: 'PoolToken';
                  id: string;
                  symbol: string;
                  name: string;
                  decimals: number;
                  address: string;
                  balance: string;
                  weight?: string | null | undefined;
                  priceRate: string;
                  poolId: { __typename: 'Pool'; id: string; address: string };
              }>
            | null
            | undefined;
    }>;
};

export type GetBalancerPoolQueryVariables = Exact<{
    id: Scalars['ID'];
    block?: Maybe<Block_Height>;
}>;

export type GetBalancerPoolQuery = {
    __typename: 'Query';
    pool?:
        | {
              __typename: 'Pool';
              id: string;
              address: string;
              poolType?: string | null | undefined;
              symbol?: string | null | undefined;
              name?: string | null | undefined;
              swapFee: string;
              totalWeight?: string | null | undefined;
              totalSwapVolume: string;
              totalSwapFee: string;
              totalLiquidity: string;
              totalShares: string;
              swapsCount: string;
              holdersCount: string;
              createTime: number;
              owner?: string | null | undefined;
              strategyType: number;
              swapEnabled: boolean;
              tokens?:
                  | Array<{
                        __typename: 'PoolToken';
                        id: string;
                        symbol: string;
                        name: string;
                        decimals: number;
                        address: string;
                        balance: string;
                        weight?: string | null | undefined;
                        priceRate: string;
                        poolId: { __typename: 'Pool'; id: string; address: string };
                    }>
                  | null
                  | undefined;
          }
        | null
        | undefined;
};

export type BalancerPoolTokensQueryVariables = Exact<{
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PoolToken_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<PoolToken_Filter>;
    block?: Maybe<Block_Height>;
}>;

export type BalancerPoolTokensQuery = {
    __typename: 'Query';
    poolTokens: Array<{
        __typename: 'PoolToken';
        id: string;
        symbol: string;
        name: string;
        decimals: number;
        address: string;
        balance: string;
        weight?: string | null | undefined;
        priceRate: string;
        poolId: { __typename: 'Pool'; id: string; address: string };
    }>;
};

export type BalancerPoolHistoricalLiquiditiesQueryVariables = Exact<{
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PoolHistoricalLiquidity_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<PoolHistoricalLiquidity_Filter>;
    block?: Maybe<Block_Height>;
}>;

export type BalancerPoolHistoricalLiquiditiesQuery = {
    __typename: 'Query';
    poolHistoricalLiquidities: Array<{
        __typename: 'PoolHistoricalLiquidity';
        id: string;
        poolTotalShares: string;
        poolLiquidity: string;
        poolShareValue: string;
        pricingAsset: string;
        block: string;
        poolId: { __typename: 'Pool'; id: string };
    }>;
};

export type BalancerPoolSnapshotsQueryVariables = Exact<{
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<PoolSnapshot_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<PoolSnapshot_Filter>;
    block?: Maybe<Block_Height>;
}>;

export type BalancerPoolSnapshotsQuery = {
    __typename: 'Query';
    poolSnapshots: Array<{
        __typename: 'PoolSnapshot';
        id: string;
        totalShares: string;
        swapVolume: string;
        swapFees: string;
        timestamp: number;
        pool: { __typename: 'Pool'; id: string };
    }>;
};

export type BalancerPoolSnapshotFragment = {
    __typename: 'PoolSnapshot';
    id: string;
    totalShares: string;
    swapVolume: string;
    swapFees: string;
    timestamp: number;
    pool: { __typename: 'Pool'; id: string };
};

export type BalancerLatestPricesQueryVariables = Exact<{
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<LatestPrice_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<LatestPrice_Filter>;
    block?: Maybe<Block_Height>;
}>;

export type BalancerLatestPricesQuery = {
    __typename: 'Query';
    latestPrices: Array<{
        __typename: 'LatestPrice';
        id: string;
        asset: string;
        price: string;
        pricingAsset: string;
        poolId: { __typename: 'Pool'; id: string };
    }>;
};

export type BalancerJoinExitsQueryVariables = Exact<{
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<JoinExit_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<JoinExit_Filter>;
    block?: Maybe<Block_Height>;
}>;

export type BalancerJoinExitsQuery = {
    __typename: 'Query';
    joinExits: Array<{
        __typename: 'JoinExit';
        amounts: Array<string>;
        id: string;
        sender: string;
        timestamp: number;
        tx: string;
        type: InvestType;
        user: { __typename: 'User'; id: string };
        pool: { __typename: 'Pool'; id: string; tokensList: Array<string> };
    }>;
};

export type BalancerJoinExitFragment = {
    __typename: 'JoinExit';
    amounts: Array<string>;
    id: string;
    sender: string;
    timestamp: number;
    tx: string;
    type: InvestType;
    user: { __typename: 'User'; id: string };
    pool: { __typename: 'Pool'; id: string; tokensList: Array<string> };
};

export type BalancePortfolioDataQueryVariables = Exact<{
    id: Scalars['ID'];
    previousBlockNumber: Scalars['Int'];
}>;

export type BalancePortfolioDataQuery = {
    __typename: 'Query';
    user?:
        | {
              __typename: 'User';
              id: string;
              sharesOwned?:
                  | Array<{ __typename: 'PoolShare'; balance: string; poolId: { __typename: 'Pool'; id: string } }>
                  | null
                  | undefined;
          }
        | null
        | undefined;
    pools: Array<{
        __typename: 'Pool';
        id: string;
        address: string;
        poolType?: string | null | undefined;
        symbol?: string | null | undefined;
        name?: string | null | undefined;
        swapFee: string;
        totalWeight?: string | null | undefined;
        totalSwapVolume: string;
        totalSwapFee: string;
        totalLiquidity: string;
        totalShares: string;
        swapsCount: string;
        holdersCount: string;
        createTime: number;
        owner?: string | null | undefined;
        strategyType: number;
        swapEnabled: boolean;
        tokens?:
            | Array<{
                  __typename: 'PoolToken';
                  id: string;
                  symbol: string;
                  name: string;
                  decimals: number;
                  address: string;
                  balance: string;
                  weight?: string | null | undefined;
                  priceRate: string;
                  poolId: { __typename: 'Pool'; id: string; address: string };
              }>
            | null
            | undefined;
    }>;
    previousUser?:
        | {
              __typename: 'User';
              id: string;
              sharesOwned?:
                  | Array<{ __typename: 'PoolShare'; balance: string; poolId: { __typename: 'Pool'; id: string } }>
                  | null
                  | undefined;
          }
        | null
        | undefined;
    previousPools: Array<{
        __typename: 'Pool';
        id: string;
        address: string;
        poolType?: string | null | undefined;
        symbol?: string | null | undefined;
        name?: string | null | undefined;
        swapFee: string;
        totalWeight?: string | null | undefined;
        totalSwapVolume: string;
        totalSwapFee: string;
        totalLiquidity: string;
        totalShares: string;
        swapsCount: string;
        holdersCount: string;
        createTime: number;
        owner?: string | null | undefined;
        strategyType: number;
        swapEnabled: boolean;
        tokens?:
            | Array<{
                  __typename: 'PoolToken';
                  id: string;
                  symbol: string;
                  name: string;
                  decimals: number;
                  address: string;
                  balance: string;
                  weight?: string | null | undefined;
                  priceRate: string;
                  poolId: { __typename: 'Pool'; id: string; address: string };
              }>
            | null
            | undefined;
    }>;
};

export type BalancerSwapsQueryVariables = Exact<{
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Swap_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Swap_Filter>;
    block?: Maybe<Block_Height>;
}>;

export type BalancerSwapsQuery = {
    __typename: 'Query';
    swaps: Array<{
        __typename: 'Swap';
        id: string;
        caller: string;
        tokenIn: string;
        tokenInSym: string;
        tokenOut: string;
        tokenOutSym: string;
        tokenAmountIn: string;
        tokenAmountOut: string;
        timestamp: number;
        tx: string;
        poolId: { __typename: 'Pool'; id: string; name?: string | null | undefined; address: string; swapFee: string };
        userAddress: { __typename: 'User'; id: string };
    }>;
};

export type BalancerSwapFragment = {
    __typename: 'Swap';
    id: string;
    caller: string;
    tokenIn: string;
    tokenInSym: string;
    tokenOut: string;
    tokenOutSym: string;
    tokenAmountIn: string;
    tokenAmountOut: string;
    timestamp: number;
    tx: string;
    poolId: { __typename: 'Pool'; id: string; name?: string | null | undefined; address: string; swapFee: string };
    userAddress: { __typename: 'User'; id: string };
};

export type GetBalancerTokensQueryVariables = Exact<{
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<Token_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<Token_Filter>;
    block?: Maybe<Block_Height>;
}>;

export type GetBalancerTokensQuery = {
    __typename: 'Query';
    tokens: Array<{
        __typename: 'Token';
        id: string;
        address: string;
        decimals: number;
        name?: string | null | undefined;
        symbol?: string | null | undefined;
        totalBalanceUSD: string;
        totalBalanceNotional: string;
        totalVolumeUSD: string;
        totalVolumeNotional: string;
        totalSwapCount: string;
        latestPrice?:
            | {
                  __typename: 'LatestPrice';
                  asset: string;
                  pricingAsset: string;
                  price: string;
                  poolId: { __typename: 'Pool'; id: string };
              }
            | null
            | undefined;
    }>;
};

export type BalancerTokenFragment = {
    __typename: 'Token';
    id: string;
    address: string;
    decimals: number;
    name?: string | null | undefined;
    symbol?: string | null | undefined;
    totalBalanceUSD: string;
    totalBalanceNotional: string;
    totalVolumeUSD: string;
    totalVolumeNotional: string;
    totalSwapCount: string;
    latestPrice?:
        | {
              __typename: 'LatestPrice';
              asset: string;
              pricingAsset: string;
              price: string;
              poolId: { __typename: 'Pool'; id: string };
          }
        | null
        | undefined;
};

export type BalancerTradePairsQueryVariables = Exact<{
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<TradePair_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<TradePair_Filter>;
    block?: Maybe<Block_Height>;
}>;

export type BalancerTradePairsQuery = {
    __typename: 'Query';
    tradePairs: Array<{
        __typename: 'TradePair';
        id: string;
        totalSwapVolume: string;
        totalSwapFee: string;
        token0: {
            __typename: 'Token';
            id: string;
            address: string;
            decimals: number;
            name?: string | null | undefined;
            symbol?: string | null | undefined;
            totalBalanceUSD: string;
            totalBalanceNotional: string;
            totalVolumeUSD: string;
            totalVolumeNotional: string;
            totalSwapCount: string;
            latestPrice?:
                | {
                      __typename: 'LatestPrice';
                      asset: string;
                      pricingAsset: string;
                      price: string;
                      poolId: { __typename: 'Pool'; id: string };
                  }
                | null
                | undefined;
        };
        token1: {
            __typename: 'Token';
            id: string;
            address: string;
            decimals: number;
            name?: string | null | undefined;
            symbol?: string | null | undefined;
            totalBalanceUSD: string;
            totalBalanceNotional: string;
            totalVolumeUSD: string;
            totalVolumeNotional: string;
            totalSwapCount: string;
            latestPrice?:
                | {
                      __typename: 'LatestPrice';
                      asset: string;
                      pricingAsset: string;
                      price: string;
                      poolId: { __typename: 'Pool'; id: string };
                  }
                | null
                | undefined;
        };
    }>;
};

export type BalancerTradePairFragment = {
    __typename: 'TradePair';
    id: string;
    totalSwapVolume: string;
    totalSwapFee: string;
    token0: {
        __typename: 'Token';
        id: string;
        address: string;
        decimals: number;
        name?: string | null | undefined;
        symbol?: string | null | undefined;
        totalBalanceUSD: string;
        totalBalanceNotional: string;
        totalVolumeUSD: string;
        totalVolumeNotional: string;
        totalSwapCount: string;
        latestPrice?:
            | {
                  __typename: 'LatestPrice';
                  asset: string;
                  pricingAsset: string;
                  price: string;
                  poolId: { __typename: 'Pool'; id: string };
              }
            | null
            | undefined;
    };
    token1: {
        __typename: 'Token';
        id: string;
        address: string;
        decimals: number;
        name?: string | null | undefined;
        symbol?: string | null | undefined;
        totalBalanceUSD: string;
        totalBalanceNotional: string;
        totalVolumeUSD: string;
        totalVolumeNotional: string;
        totalSwapCount: string;
        latestPrice?:
            | {
                  __typename: 'LatestPrice';
                  asset: string;
                  pricingAsset: string;
                  price: string;
                  poolId: { __typename: 'Pool'; id: string };
              }
            | null
            | undefined;
    };
};

export type GetBalancerSnapshotsQueryVariables = Exact<{
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<BalancerSnapshot_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<BalancerSnapshot_Filter>;
    block?: Maybe<Block_Height>;
}>;

export type GetBalancerSnapshotsQuery = {
    __typename: 'Query';
    balancerSnapshots: Array<{
        __typename: 'BalancerSnapshot';
        id: string;
        timestamp: number;
        poolCount: number;
        totalLiquidity: string;
        totalSwapCount: string;
        totalSwapVolume: string;
        totalSwapFee: string;
    }>;
};

export type BalancerSnapshotFragment = {
    __typename: 'BalancerSnapshot';
    id: string;
    timestamp: number;
    poolCount: number;
    totalLiquidity: string;
    totalSwapCount: string;
    totalSwapVolume: string;
    totalSwapFee: string;
};

export type GetLatestPricesQueryVariables = Exact<{
    skip?: Maybe<Scalars['Int']>;
    first?: Maybe<Scalars['Int']>;
    orderBy?: Maybe<LatestPrice_OrderBy>;
    orderDirection?: Maybe<OrderDirection>;
    where?: Maybe<LatestPrice_Filter>;
    block?: Maybe<Block_Height>;
}>;

export type GetLatestPricesQuery = {
    __typename: 'Query';
    latestPrices: Array<{
        __typename: 'LatestPrice';
        asset: string;
        pricingAsset: string;
        price: string;
        poolId: { __typename: 'Pool'; id: string };
    }>;
};

export type GetLatestBlockQueryVariables = Exact<{ [key: string]: never }>;

export type GetLatestBlockQuery = {
    __typename: 'Query';
    blocks: Array<{ __typename: 'Block'; id: string; number: string; timestamp: string }>;
};

export const TokenSnapshotFragmentDoc = gql`
    fragment TokenSnapshot on TokenSnapshot {
        id
        timestamp
        totalBalanceUSD
        totalBalanceNotional
        totalVolumeUSD
        totalVolumeNotional
        totalSwapCount
    }
`;
export const LatestPriceFragmentDoc = gql`
    fragment LatestPrice on LatestPrice {
        asset
        pricingAsset
        price
        poolId {
            id
        }
    }
`;
export const UserFragmentDoc = gql`
    fragment User on User {
        id
        sharesOwned(first: 1000) {
            balance
            poolId {
                id
            }
        }
    }
`;
export const BalancerChartTokenPriceFragmentDoc = gql`
    fragment BalancerChartTokenPrice on TokenPrice {
        id
        timestamp
        price
        amount
    }
`;
export const BalancerTokenPriceFragmentDoc = gql`
    fragment BalancerTokenPrice on TokenPrice {
        id
        poolId {
            id
        }
        asset
        amount
        pricingAsset
        price
        block
        timestamp
    }
`;
export const BalancerPoolTokenFragmentDoc = gql`
    fragment BalancerPoolToken on PoolToken {
        id
        symbol
        name
        decimals
        address
        balance
        weight
        priceRate
        poolId {
            id
            address
        }
    }
`;
export const BalancerPoolFragmentDoc = gql`
    fragment BalancerPool on Pool {
        id
        address
        poolType
        symbol
        name
        swapFee
        totalWeight
        totalSwapVolume
        totalSwapFee
        totalLiquidity
        totalShares
        swapsCount
        holdersCount
        createTime
        owner
        strategyType
        swapEnabled
        tokens(first: 1000) {
            ...BalancerPoolToken
        }
    }
    ${BalancerPoolTokenFragmentDoc}
`;
export const BalancerPoolSnapshotFragmentDoc = gql`
    fragment BalancerPoolSnapshot on PoolSnapshot {
        id
        pool {
            id
        }
        totalShares
        swapVolume
        swapFees
        timestamp
    }
`;
export const BalancerJoinExitFragmentDoc = gql`
    fragment BalancerJoinExit on JoinExit {
        amounts
        id
        sender
        timestamp
        tx
        type
        user {
            id
        }
        pool {
            id
            tokensList
        }
    }
`;
export const BalancerSwapFragmentDoc = gql`
    fragment BalancerSwap on Swap {
        id
        caller
        tokenIn
        tokenInSym
        tokenOut
        tokenOutSym
        tokenAmountIn
        tokenAmountOut
        poolId {
            id
            name
            address
            swapFee
        }
        userAddress {
            id
        }
        timestamp
        tx
    }
`;
export const BalancerTokenFragmentDoc = gql`
    fragment BalancerToken on Token {
        id
        address
        decimals
        name
        symbol
        totalBalanceUSD
        totalBalanceNotional
        totalVolumeUSD
        totalVolumeNotional
        totalSwapCount
        latestPrice {
            asset
            pricingAsset
            price
            poolId {
                id
            }
        }
    }
`;
export const BalancerTradePairFragmentDoc = gql`
    fragment BalancerTradePair on TradePair {
        id
        token0 {
            ...BalancerToken
        }
        token1 {
            ...BalancerToken
        }
        totalSwapVolume
        totalSwapFee
    }
    ${BalancerTokenFragmentDoc}
`;
export const BalancerSnapshotFragmentDoc = gql`
    fragment BalancerSnapshot on BalancerSnapshot {
        id
        timestamp
        poolCount
        totalLiquidity
        totalSwapCount
        totalSwapVolume
        totalSwapFee
    }
`;
export const GetProtocolDataDocument = gql`
    query GetProtocolData($startTimestamp: Int!, $block24: Block_height!, $block48: Block_height!) {
        balancers(first: 1) {
            totalLiquidity
            totalSwapCount
            totalSwapFee
            totalSwapVolume
            poolCount
        }
        balancers24: balancers(first: 1, block: $block24) {
            totalLiquidity
            totalSwapCount
            totalSwapFee
            totalSwapVolume
            poolCount
        }
        balancers48: balancers(first: 1, block: $block48) {
            totalLiquidity
            totalSwapCount
            totalSwapFee
            totalSwapVolume
            poolCount
        }
        balancerSnapshots(
            first: 1000
            orderBy: timestamp
            orderDirection: asc
            where: { timestamp_gte: $startTimestamp }
        ) {
            ...BalancerSnapshot
        }
        whaleSwaps: swaps(first: 100, orderBy: timestamp, orderDirection: desc, where: { valueUSD_gte: "10000" }) {
            ...BalancerSwap
        }
    }
    ${BalancerSnapshotFragmentDoc}
    ${BalancerSwapFragmentDoc}
`;

/**
 * __useGetProtocolDataQuery__
 *
 * To run a query within a React component, call `useGetProtocolDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProtocolDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProtocolDataQuery({
 *   variables: {
 *      startTimestamp: // value for 'startTimestamp'
 *      block24: // value for 'block24'
 *      block48: // value for 'block48'
 *   },
 * });
 */
export function useGetProtocolDataQuery(
    baseOptions: Apollo.QueryHookOptions<GetProtocolDataQuery, GetProtocolDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetProtocolDataQuery, GetProtocolDataQueryVariables>(GetProtocolDataDocument, options);
}
export function useGetProtocolDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetProtocolDataQuery, GetProtocolDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetProtocolDataQuery, GetProtocolDataQueryVariables>(GetProtocolDataDocument, options);
}
export type GetProtocolDataQueryHookResult = ReturnType<typeof useGetProtocolDataQuery>;
export type GetProtocolDataLazyQueryHookResult = ReturnType<typeof useGetProtocolDataLazyQuery>;
export type GetProtocolDataQueryResult = Apollo.QueryResult<GetProtocolDataQuery, GetProtocolDataQueryVariables>;
export const GetTokenDataDocument = gql`
    query GetTokenData($block24: Block_height!, $blockWeek: Block_height!) {
        tokens: tokens(first: 1000, orderBy: totalBalanceUSD, orderDirection: desc) {
            ...BalancerToken
        }
        prices: latestPrices(first: 1000) {
            ...LatestPrice
        }
        tokens24: tokens(first: 1000, orderBy: totalBalanceUSD, orderDirection: desc, block: $block24) {
            ...BalancerToken
        }
        prices24: latestPrices(first: 1000, block: $block24) {
            ...LatestPrice
        }
        tokensWeek: tokens(first: 1000, orderBy: totalBalanceUSD, orderDirection: desc, block: $blockWeek) {
            ...BalancerToken
        }
        pricesWeek: latestPrices(first: 1000, block: $blockWeek) {
            ...LatestPrice
        }
    }
    ${BalancerTokenFragmentDoc}
    ${LatestPriceFragmentDoc}
`;

/**
 * __useGetTokenDataQuery__
 *
 * To run a query within a React component, call `useGetTokenDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenDataQuery({
 *   variables: {
 *      block24: // value for 'block24'
 *      blockWeek: // value for 'blockWeek'
 *   },
 * });
 */
export function useGetTokenDataQuery(
    baseOptions: Apollo.QueryHookOptions<GetTokenDataQuery, GetTokenDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetTokenDataQuery, GetTokenDataQueryVariables>(GetTokenDataDocument, options);
}
export function useGetTokenDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetTokenDataQuery, GetTokenDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetTokenDataQuery, GetTokenDataQueryVariables>(GetTokenDataDocument, options);
}
export type GetTokenDataQueryHookResult = ReturnType<typeof useGetTokenDataQuery>;
export type GetTokenDataLazyQueryHookResult = ReturnType<typeof useGetTokenDataLazyQuery>;
export type GetTokenDataQueryResult = Apollo.QueryResult<GetTokenDataQuery, GetTokenDataQueryVariables>;
export const GetTokenPageDataDocument = gql`
    query GetTokenPageData($address: String!, $startTimestamp: Int!) {
        tokenSnapshots(
            first: 1000
            orderBy: timestamp
            orderDirection: asc
            where: { token: $address, timestamp_gte: $startTimestamp }
        ) {
            ...TokenSnapshot
        }
    }
    ${TokenSnapshotFragmentDoc}
`;

/**
 * __useGetTokenPageDataQuery__
 *
 * To run a query within a React component, call `useGetTokenPageDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenPageDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenPageDataQuery({
 *   variables: {
 *      address: // value for 'address'
 *      startTimestamp: // value for 'startTimestamp'
 *   },
 * });
 */
export function useGetTokenPageDataQuery(
    baseOptions: Apollo.QueryHookOptions<GetTokenPageDataQuery, GetTokenPageDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetTokenPageDataQuery, GetTokenPageDataQueryVariables>(GetTokenPageDataDocument, options);
}
export function useGetTokenPageDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetTokenPageDataQuery, GetTokenPageDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetTokenPageDataQuery, GetTokenPageDataQueryVariables>(
        GetTokenPageDataDocument,
        options,
    );
}
export type GetTokenPageDataQueryHookResult = ReturnType<typeof useGetTokenPageDataQuery>;
export type GetTokenPageDataLazyQueryHookResult = ReturnType<typeof useGetTokenPageDataLazyQuery>;
export type GetTokenPageDataQueryResult = Apollo.QueryResult<GetTokenPageDataQuery, GetTokenPageDataQueryVariables>;
export const GetTransactionDataDocument = gql`
    query GetTransactionData($addresses: [Bytes!]!, $poolIds: [String!]!, $startTimestamp: Int!) {
        swapsIn: swaps(
            first: 1000
            orderBy: timestamp
            orderDirection: desc
            where: { tokenIn_in: $addresses, poolId_in: $poolIds, timestamp_gte: $startTimestamp }
        ) {
            ...BalancerSwap
        }
        swapsOut: swaps(
            first: 1000
            orderBy: timestamp
            orderDirection: desc
            where: { tokenOut_in: $addresses, poolId_in: $poolIds, timestamp_gte: $startTimestamp }
        ) {
            ...BalancerSwap
        }
        joinExits(
            first: 150
            orderBy: timestamp
            orderDirection: desc
            where: { pool_in: $poolIds, timestamp_gte: $startTimestamp }
        ) {
            ...BalancerJoinExit
        }
    }
    ${BalancerSwapFragmentDoc}
    ${BalancerJoinExitFragmentDoc}
`;

/**
 * __useGetTransactionDataQuery__
 *
 * To run a query within a React component, call `useGetTransactionDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionDataQuery({
 *   variables: {
 *      addresses: // value for 'addresses'
 *      poolIds: // value for 'poolIds'
 *      startTimestamp: // value for 'startTimestamp'
 *   },
 * });
 */
export function useGetTransactionDataQuery(
    baseOptions: Apollo.QueryHookOptions<GetTransactionDataQuery, GetTransactionDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetTransactionDataQuery, GetTransactionDataQueryVariables>(
        GetTransactionDataDocument,
        options,
    );
}
export function useGetTransactionDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionDataQuery, GetTransactionDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetTransactionDataQuery, GetTransactionDataQueryVariables>(
        GetTransactionDataDocument,
        options,
    );
}
export type GetTransactionDataQueryHookResult = ReturnType<typeof useGetTransactionDataQuery>;
export type GetTransactionDataLazyQueryHookResult = ReturnType<typeof useGetTransactionDataLazyQuery>;
export type GetTransactionDataQueryResult = Apollo.QueryResult<
    GetTransactionDataQuery,
    GetTransactionDataQueryVariables
>;
export const GetPoolDataDocument = gql`
    query GetPoolData($block24: Block_height!, $block48: Block_height!, $blockWeek: Block_height!) {
        pools(first: 1000, orderBy: totalLiquidity, orderDirection: desc, where: { totalLiquidity_gt: "0.01" }) {
            ...BalancerPool
        }
        pools24: pools(
            first: 1000
            orderBy: totalLiquidity
            orderDirection: desc
            where: { totalLiquidity_gt: "0.01" }
            block: $block24
        ) {
            ...BalancerPool
        }
        pools48: pools(
            first: 1000
            orderBy: totalLiquidity
            orderDirection: desc
            where: { totalLiquidity_gt: "0.01" }
            block: $block48
        ) {
            ...BalancerPool
        }
        poolsWeek: pools(
            first: 1000
            orderBy: totalLiquidity
            orderDirection: desc
            where: { totalLiquidity_gt: "0.01" }
            block: $blockWeek
        ) {
            ...BalancerPool
        }
        prices: latestPrices(first: 1000) {
            ...LatestPrice
        }
    }
    ${BalancerPoolFragmentDoc}
    ${LatestPriceFragmentDoc}
`;

/**
 * __useGetPoolDataQuery__
 *
 * To run a query within a React component, call `useGetPoolDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoolDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoolDataQuery({
 *   variables: {
 *      block24: // value for 'block24'
 *      block48: // value for 'block48'
 *      blockWeek: // value for 'blockWeek'
 *   },
 * });
 */
export function useGetPoolDataQuery(baseOptions: Apollo.QueryHookOptions<GetPoolDataQuery, GetPoolDataQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetPoolDataQuery, GetPoolDataQueryVariables>(GetPoolDataDocument, options);
}
export function useGetPoolDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetPoolDataQuery, GetPoolDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetPoolDataQuery, GetPoolDataQueryVariables>(GetPoolDataDocument, options);
}
export type GetPoolDataQueryHookResult = ReturnType<typeof useGetPoolDataQuery>;
export type GetPoolDataLazyQueryHookResult = ReturnType<typeof useGetPoolDataLazyQuery>;
export type GetPoolDataQueryResult = Apollo.QueryResult<GetPoolDataQuery, GetPoolDataQueryVariables>;
export const GetUserWalletPoolDataDocument = gql`
    query GetUserWalletPoolData($userAddress: String!, $block: Int!) {
        poolShares(block: { number: $block }, first: 1000, where: { userAddress: $userAddress, balance_gt: 0 }) {
            balance
            poolId {
                id
                totalLiquidity
                totalShares
            }
        }
    }
`;

/**
 * __useGetUserWalletPoolDataQuery__
 *
 * To run a query within a React component, call `useGetUserWalletPoolDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserWalletPoolDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserWalletPoolDataQuery({
 *   variables: {
 *      userAddress: // value for 'userAddress'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetUserWalletPoolDataQuery(
    baseOptions: Apollo.QueryHookOptions<GetUserWalletPoolDataQuery, GetUserWalletPoolDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetUserWalletPoolDataQuery, GetUserWalletPoolDataQueryVariables>(
        GetUserWalletPoolDataDocument,
        options,
    );
}
export function useGetUserWalletPoolDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetUserWalletPoolDataQuery, GetUserWalletPoolDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetUserWalletPoolDataQuery, GetUserWalletPoolDataQueryVariables>(
        GetUserWalletPoolDataDocument,
        options,
    );
}
export type GetUserWalletPoolDataQueryHookResult = ReturnType<typeof useGetUserWalletPoolDataQuery>;
export type GetUserWalletPoolDataLazyQueryHookResult = ReturnType<typeof useGetUserWalletPoolDataLazyQuery>;
export type GetUserWalletPoolDataQueryResult = Apollo.QueryResult<
    GetUserWalletPoolDataQuery,
    GetUserWalletPoolDataQueryVariables
>;
export const GetPoolChartDataDocument = gql`
    query GetPoolChartData($poolId: String!, $startTimestamp: Int!) {
        poolSnapshots(
            first: 1000
            orderBy: timestamp
            orderDirection: asc
            where: { pool: $poolId, timestamp_gte: $startTimestamp }
        ) {
            id
            amounts
            totalShares
            swapVolume
            swapFees
            timestamp
            totalSwapVolume
            totalSwapFee
            totalLiquidity
            swapsCount
            holdersCount
            pool {
                id
            }
        }
    }
`;

/**
 * __useGetPoolChartDataQuery__
 *
 * To run a query within a React component, call `useGetPoolChartDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoolChartDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoolChartDataQuery({
 *   variables: {
 *      poolId: // value for 'poolId'
 *      startTimestamp: // value for 'startTimestamp'
 *   },
 * });
 */
export function useGetPoolChartDataQuery(
    baseOptions: Apollo.QueryHookOptions<GetPoolChartDataQuery, GetPoolChartDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetPoolChartDataQuery, GetPoolChartDataQueryVariables>(GetPoolChartDataDocument, options);
}
export function useGetPoolChartDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetPoolChartDataQuery, GetPoolChartDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetPoolChartDataQuery, GetPoolChartDataQueryVariables>(
        GetPoolChartDataDocument,
        options,
    );
}
export type GetPoolChartDataQueryHookResult = ReturnType<typeof useGetPoolChartDataQuery>;
export type GetPoolChartDataLazyQueryHookResult = ReturnType<typeof useGetPoolChartDataLazyQuery>;
export type GetPoolChartDataQueryResult = Apollo.QueryResult<GetPoolChartDataQuery, GetPoolChartDataQueryVariables>;
export const BalancerPoolSwapFeeSnapshotDocument = gql`
    query BalancerPoolSwapFeeSnapshot($startTimestamp: Int!, $endTimeStamp: Int!) {
        poolSnapshots(
            first: 1000
            orderBy: swapFees
            orderDirection: desc
            where: { timestamp_in: [$startTimestamp, $endTimeStamp] }
        ) {
            id
            amounts
            totalShares
            swapVolume
            swapFees
            timestamp
            totalSwapVolume
            totalSwapFee
            totalLiquidity
            swapsCount
            holdersCount
            pool {
                id
            }
        }
    }
`;

/**
 * __useBalancerPoolSwapFeeSnapshotQuery__
 *
 * To run a query within a React component, call `useBalancerPoolSwapFeeSnapshotQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerPoolSwapFeeSnapshotQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerPoolSwapFeeSnapshotQuery({
 *   variables: {
 *      startTimestamp: // value for 'startTimestamp'
 *      endTimeStamp: // value for 'endTimeStamp'
 *   },
 * });
 */
export function useBalancerPoolSwapFeeSnapshotQuery(
    baseOptions: Apollo.QueryHookOptions<BalancerPoolSwapFeeSnapshotQuery, BalancerPoolSwapFeeSnapshotQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<BalancerPoolSwapFeeSnapshotQuery, BalancerPoolSwapFeeSnapshotQueryVariables>(
        BalancerPoolSwapFeeSnapshotDocument,
        options,
    );
}
export function useBalancerPoolSwapFeeSnapshotLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        BalancerPoolSwapFeeSnapshotQuery,
        BalancerPoolSwapFeeSnapshotQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<BalancerPoolSwapFeeSnapshotQuery, BalancerPoolSwapFeeSnapshotQueryVariables>(
        BalancerPoolSwapFeeSnapshotDocument,
        options,
    );
}
export type BalancerPoolSwapFeeSnapshotQueryHookResult = ReturnType<typeof useBalancerPoolSwapFeeSnapshotQuery>;
export type BalancerPoolSwapFeeSnapshotLazyQueryHookResult = ReturnType<typeof useBalancerPoolSwapFeeSnapshotLazyQuery>;
export type BalancerPoolSwapFeeSnapshotQueryResult = Apollo.QueryResult<
    BalancerPoolSwapFeeSnapshotQuery,
    BalancerPoolSwapFeeSnapshotQueryVariables
>;
export const BalancerProtocolDataDocument = gql`
    query BalancerProtocolData(
        $skip: Int
        $first: Int
        $orderBy: Balancer_orderBy
        $orderDirection: OrderDirection
        $where: Balancer_filter
        $block: Block_height
    ) {
        balancers(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            id
            totalLiquidity
            totalSwapVolume
            totalSwapFee
            poolCount
            totalSwapCount
        }
    }
`;

/**
 * __useBalancerProtocolDataQuery__
 *
 * To run a query within a React component, call `useBalancerProtocolDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerProtocolDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerProtocolDataQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerProtocolDataQuery(
    baseOptions?: Apollo.QueryHookOptions<BalancerProtocolDataQuery, BalancerProtocolDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<BalancerProtocolDataQuery, BalancerProtocolDataQueryVariables>(
        BalancerProtocolDataDocument,
        options,
    );
}
export function useBalancerProtocolDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<BalancerProtocolDataQuery, BalancerProtocolDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<BalancerProtocolDataQuery, BalancerProtocolDataQueryVariables>(
        BalancerProtocolDataDocument,
        options,
    );
}
export type BalancerProtocolDataQueryHookResult = ReturnType<typeof useBalancerProtocolDataQuery>;
export type BalancerProtocolDataLazyQueryHookResult = ReturnType<typeof useBalancerProtocolDataLazyQuery>;
export type BalancerProtocolDataQueryResult = Apollo.QueryResult<
    BalancerProtocolDataQuery,
    BalancerProtocolDataQueryVariables
>;
export const BalancerUserDocument = gql`
    query BalancerUser($id: ID!, $block: Block_height) {
        user(id: $id, block: $block) {
            ...User
        }
    }
    ${UserFragmentDoc}
`;

/**
 * __useBalancerUserQuery__
 *
 * To run a query within a React component, call `useBalancerUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerUserQuery(
    baseOptions: Apollo.QueryHookOptions<BalancerUserQuery, BalancerUserQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<BalancerUserQuery, BalancerUserQueryVariables>(BalancerUserDocument, options);
}
export function useBalancerUserLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<BalancerUserQuery, BalancerUserQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<BalancerUserQuery, BalancerUserQueryVariables>(BalancerUserDocument, options);
}
export type BalancerUserQueryHookResult = ReturnType<typeof useBalancerUserQuery>;
export type BalancerUserLazyQueryHookResult = ReturnType<typeof useBalancerUserLazyQuery>;
export type BalancerUserQueryResult = Apollo.QueryResult<BalancerUserQuery, BalancerUserQueryVariables>;
export const BalancerUsersDocument = gql`
    query BalancerUsers(
        $skip: Int
        $first: Int
        $orderBy: User_orderBy
        $orderDirection: OrderDirection
        $where: User_filter
        $block: Block_height
    ) {
        users(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            ...User
        }
    }
    ${UserFragmentDoc}
`;

/**
 * __useBalancerUsersQuery__
 *
 * To run a query within a React component, call `useBalancerUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerUsersQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerUsersQuery(
    baseOptions?: Apollo.QueryHookOptions<BalancerUsersQuery, BalancerUsersQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<BalancerUsersQuery, BalancerUsersQueryVariables>(BalancerUsersDocument, options);
}
export function useBalancerUsersLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<BalancerUsersQuery, BalancerUsersQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<BalancerUsersQuery, BalancerUsersQueryVariables>(BalancerUsersDocument, options);
}
export type BalancerUsersQueryHookResult = ReturnType<typeof useBalancerUsersQuery>;
export type BalancerUsersLazyQueryHookResult = ReturnType<typeof useBalancerUsersLazyQuery>;
export type BalancerUsersQueryResult = Apollo.QueryResult<BalancerUsersQuery, BalancerUsersQueryVariables>;
export const BalancerTokenPricesDocument = gql`
    query BalancerTokenPrices(
        $skip: Int
        $first: Int
        $orderBy: TokenPrice_orderBy
        $orderDirection: OrderDirection
        $where: TokenPrice_filter
        $block: Block_height
    ) {
        tokenPrices(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            ...BalancerTokenPrice
        }
    }
    ${BalancerTokenPriceFragmentDoc}
`;

/**
 * __useBalancerTokenPricesQuery__
 *
 * To run a query within a React component, call `useBalancerTokenPricesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerTokenPricesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerTokenPricesQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerTokenPricesQuery(
    baseOptions?: Apollo.QueryHookOptions<BalancerTokenPricesQuery, BalancerTokenPricesQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<BalancerTokenPricesQuery, BalancerTokenPricesQueryVariables>(
        BalancerTokenPricesDocument,
        options,
    );
}
export function useBalancerTokenPricesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<BalancerTokenPricesQuery, BalancerTokenPricesQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<BalancerTokenPricesQuery, BalancerTokenPricesQueryVariables>(
        BalancerTokenPricesDocument,
        options,
    );
}
export type BalancerTokenPricesQueryHookResult = ReturnType<typeof useBalancerTokenPricesQuery>;
export type BalancerTokenPricesLazyQueryHookResult = ReturnType<typeof useBalancerTokenPricesLazyQuery>;
export type BalancerTokenPricesQueryResult = Apollo.QueryResult<
    BalancerTokenPricesQuery,
    BalancerTokenPricesQueryVariables
>;
export const BalancerChartTokenPricesDocument = gql`
    query BalancerChartTokenPrices($asset: Bytes!) {
        prices1: tokenPrices(skip: 0, first: 1000, orderBy: timestamp, orderDirection: desc, where: { asset: $asset }) {
            ...BalancerChartTokenPrice
        }
        prices2: tokenPrices(
            skip: 1000
            first: 1000
            orderBy: timestamp
            orderDirection: desc
            where: { asset: $asset }
        ) {
            ...BalancerChartTokenPrice
        }
        prices3: tokenPrices(
            skip: 2000
            first: 1000
            orderBy: timestamp
            orderDirection: desc
            where: { asset: $asset }
        ) {
            ...BalancerChartTokenPrice
        }
        prices4: tokenPrices(
            skip: 3000
            first: 1000
            orderBy: timestamp
            orderDirection: desc
            where: { asset: $asset }
        ) {
            ...BalancerChartTokenPrice
        }
        prices5: tokenPrices(
            skip: 4000
            first: 1000
            orderBy: timestamp
            orderDirection: desc
            where: { asset: $asset }
        ) {
            ...BalancerChartTokenPrice
        }
        prices6: tokenPrices(
            skip: 5000
            first: 1000
            orderBy: timestamp
            orderDirection: desc
            where: { asset: $asset }
        ) {
            ...BalancerChartTokenPrice
        }
    }
    ${BalancerChartTokenPriceFragmentDoc}
`;

/**
 * __useBalancerChartTokenPricesQuery__
 *
 * To run a query within a React component, call `useBalancerChartTokenPricesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerChartTokenPricesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerChartTokenPricesQuery({
 *   variables: {
 *      asset: // value for 'asset'
 *   },
 * });
 */
export function useBalancerChartTokenPricesQuery(
    baseOptions: Apollo.QueryHookOptions<BalancerChartTokenPricesQuery, BalancerChartTokenPricesQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<BalancerChartTokenPricesQuery, BalancerChartTokenPricesQueryVariables>(
        BalancerChartTokenPricesDocument,
        options,
    );
}
export function useBalancerChartTokenPricesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<BalancerChartTokenPricesQuery, BalancerChartTokenPricesQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<BalancerChartTokenPricesQuery, BalancerChartTokenPricesQueryVariables>(
        BalancerChartTokenPricesDocument,
        options,
    );
}
export type BalancerChartTokenPricesQueryHookResult = ReturnType<typeof useBalancerChartTokenPricesQuery>;
export type BalancerChartTokenPricesLazyQueryHookResult = ReturnType<typeof useBalancerChartTokenPricesLazyQuery>;
export type BalancerChartTokenPricesQueryResult = Apollo.QueryResult<
    BalancerChartTokenPricesQuery,
    BalancerChartTokenPricesQueryVariables
>;
export const GetBalancerPoolsDocument = gql`
    query GetBalancerPools(
        $skip: Int
        $first: Int
        $orderBy: Pool_orderBy
        $orderDirection: OrderDirection
        $where: Pool_filter
        $block: Block_height
    ) {
        pools(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            ...BalancerPool
        }
    }
    ${BalancerPoolFragmentDoc}
`;

/**
 * __useGetBalancerPoolsQuery__
 *
 * To run a query within a React component, call `useGetBalancerPoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBalancerPoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBalancerPoolsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetBalancerPoolsQuery(
    baseOptions?: Apollo.QueryHookOptions<GetBalancerPoolsQuery, GetBalancerPoolsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetBalancerPoolsQuery, GetBalancerPoolsQueryVariables>(GetBalancerPoolsDocument, options);
}
export function useGetBalancerPoolsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetBalancerPoolsQuery, GetBalancerPoolsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetBalancerPoolsQuery, GetBalancerPoolsQueryVariables>(
        GetBalancerPoolsDocument,
        options,
    );
}
export type GetBalancerPoolsQueryHookResult = ReturnType<typeof useGetBalancerPoolsQuery>;
export type GetBalancerPoolsLazyQueryHookResult = ReturnType<typeof useGetBalancerPoolsLazyQuery>;
export type GetBalancerPoolsQueryResult = Apollo.QueryResult<GetBalancerPoolsQuery, GetBalancerPoolsQueryVariables>;
export const GetBalancerPoolDocument = gql`
    query GetBalancerPool($id: ID!, $block: Block_height) {
        pool(id: $id, block: $block) {
            ...BalancerPool
        }
    }
    ${BalancerPoolFragmentDoc}
`;

/**
 * __useGetBalancerPoolQuery__
 *
 * To run a query within a React component, call `useGetBalancerPoolQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBalancerPoolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBalancerPoolQuery({
 *   variables: {
 *      id: // value for 'id'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetBalancerPoolQuery(
    baseOptions: Apollo.QueryHookOptions<GetBalancerPoolQuery, GetBalancerPoolQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetBalancerPoolQuery, GetBalancerPoolQueryVariables>(GetBalancerPoolDocument, options);
}
export function useGetBalancerPoolLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetBalancerPoolQuery, GetBalancerPoolQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetBalancerPoolQuery, GetBalancerPoolQueryVariables>(GetBalancerPoolDocument, options);
}
export type GetBalancerPoolQueryHookResult = ReturnType<typeof useGetBalancerPoolQuery>;
export type GetBalancerPoolLazyQueryHookResult = ReturnType<typeof useGetBalancerPoolLazyQuery>;
export type GetBalancerPoolQueryResult = Apollo.QueryResult<GetBalancerPoolQuery, GetBalancerPoolQueryVariables>;
export const BalancerPoolTokensDocument = gql`
    query BalancerPoolTokens(
        $skip: Int
        $first: Int
        $orderBy: PoolToken_orderBy
        $orderDirection: OrderDirection
        $where: PoolToken_filter
        $block: Block_height
    ) {
        poolTokens(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            ...BalancerPoolToken
        }
    }
    ${BalancerPoolTokenFragmentDoc}
`;

/**
 * __useBalancerPoolTokensQuery__
 *
 * To run a query within a React component, call `useBalancerPoolTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerPoolTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerPoolTokensQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerPoolTokensQuery(
    baseOptions?: Apollo.QueryHookOptions<BalancerPoolTokensQuery, BalancerPoolTokensQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<BalancerPoolTokensQuery, BalancerPoolTokensQueryVariables>(
        BalancerPoolTokensDocument,
        options,
    );
}
export function useBalancerPoolTokensLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<BalancerPoolTokensQuery, BalancerPoolTokensQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<BalancerPoolTokensQuery, BalancerPoolTokensQueryVariables>(
        BalancerPoolTokensDocument,
        options,
    );
}
export type BalancerPoolTokensQueryHookResult = ReturnType<typeof useBalancerPoolTokensQuery>;
export type BalancerPoolTokensLazyQueryHookResult = ReturnType<typeof useBalancerPoolTokensLazyQuery>;
export type BalancerPoolTokensQueryResult = Apollo.QueryResult<
    BalancerPoolTokensQuery,
    BalancerPoolTokensQueryVariables
>;
export const BalancerPoolHistoricalLiquiditiesDocument = gql`
    query BalancerPoolHistoricalLiquidities(
        $skip: Int
        $first: Int
        $orderBy: PoolHistoricalLiquidity_orderBy
        $orderDirection: OrderDirection
        $where: PoolHistoricalLiquidity_filter
        $block: Block_height
    ) {
        poolHistoricalLiquidities(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            id
            poolId {
                id
            }
            poolTotalShares
            poolLiquidity
            poolShareValue
            pricingAsset
            block
        }
    }
`;

/**
 * __useBalancerPoolHistoricalLiquiditiesQuery__
 *
 * To run a query within a React component, call `useBalancerPoolHistoricalLiquiditiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerPoolHistoricalLiquiditiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerPoolHistoricalLiquiditiesQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerPoolHistoricalLiquiditiesQuery(
    baseOptions?: Apollo.QueryHookOptions<
        BalancerPoolHistoricalLiquiditiesQuery,
        BalancerPoolHistoricalLiquiditiesQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<BalancerPoolHistoricalLiquiditiesQuery, BalancerPoolHistoricalLiquiditiesQueryVariables>(
        BalancerPoolHistoricalLiquiditiesDocument,
        options,
    );
}
export function useBalancerPoolHistoricalLiquiditiesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        BalancerPoolHistoricalLiquiditiesQuery,
        BalancerPoolHistoricalLiquiditiesQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<BalancerPoolHistoricalLiquiditiesQuery, BalancerPoolHistoricalLiquiditiesQueryVariables>(
        BalancerPoolHistoricalLiquiditiesDocument,
        options,
    );
}
export type BalancerPoolHistoricalLiquiditiesQueryHookResult = ReturnType<
    typeof useBalancerPoolHistoricalLiquiditiesQuery
>;
export type BalancerPoolHistoricalLiquiditiesLazyQueryHookResult = ReturnType<
    typeof useBalancerPoolHistoricalLiquiditiesLazyQuery
>;
export type BalancerPoolHistoricalLiquiditiesQueryResult = Apollo.QueryResult<
    BalancerPoolHistoricalLiquiditiesQuery,
    BalancerPoolHistoricalLiquiditiesQueryVariables
>;
export const BalancerPoolSnapshotsDocument = gql`
    query BalancerPoolSnapshots(
        $skip: Int
        $first: Int
        $orderBy: PoolSnapshot_orderBy
        $orderDirection: OrderDirection
        $where: PoolSnapshot_filter
        $block: Block_height
    ) {
        poolSnapshots(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            ...BalancerPoolSnapshot
        }
    }
    ${BalancerPoolSnapshotFragmentDoc}
`;

/**
 * __useBalancerPoolSnapshotsQuery__
 *
 * To run a query within a React component, call `useBalancerPoolSnapshotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerPoolSnapshotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerPoolSnapshotsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerPoolSnapshotsQuery(
    baseOptions?: Apollo.QueryHookOptions<BalancerPoolSnapshotsQuery, BalancerPoolSnapshotsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<BalancerPoolSnapshotsQuery, BalancerPoolSnapshotsQueryVariables>(
        BalancerPoolSnapshotsDocument,
        options,
    );
}
export function useBalancerPoolSnapshotsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<BalancerPoolSnapshotsQuery, BalancerPoolSnapshotsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<BalancerPoolSnapshotsQuery, BalancerPoolSnapshotsQueryVariables>(
        BalancerPoolSnapshotsDocument,
        options,
    );
}
export type BalancerPoolSnapshotsQueryHookResult = ReturnType<typeof useBalancerPoolSnapshotsQuery>;
export type BalancerPoolSnapshotsLazyQueryHookResult = ReturnType<typeof useBalancerPoolSnapshotsLazyQuery>;
export type BalancerPoolSnapshotsQueryResult = Apollo.QueryResult<
    BalancerPoolSnapshotsQuery,
    BalancerPoolSnapshotsQueryVariables
>;
export const BalancerLatestPricesDocument = gql`
    query BalancerLatestPrices(
        $skip: Int
        $first: Int
        $orderBy: LatestPrice_orderBy
        $orderDirection: OrderDirection
        $where: LatestPrice_filter
        $block: Block_height
    ) {
        latestPrices(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            id
            asset
            price
            poolId {
                id
            }
            pricingAsset
        }
    }
`;

/**
 * __useBalancerLatestPricesQuery__
 *
 * To run a query within a React component, call `useBalancerLatestPricesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerLatestPricesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerLatestPricesQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerLatestPricesQuery(
    baseOptions?: Apollo.QueryHookOptions<BalancerLatestPricesQuery, BalancerLatestPricesQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<BalancerLatestPricesQuery, BalancerLatestPricesQueryVariables>(
        BalancerLatestPricesDocument,
        options,
    );
}
export function useBalancerLatestPricesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<BalancerLatestPricesQuery, BalancerLatestPricesQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<BalancerLatestPricesQuery, BalancerLatestPricesQueryVariables>(
        BalancerLatestPricesDocument,
        options,
    );
}
export type BalancerLatestPricesQueryHookResult = ReturnType<typeof useBalancerLatestPricesQuery>;
export type BalancerLatestPricesLazyQueryHookResult = ReturnType<typeof useBalancerLatestPricesLazyQuery>;
export type BalancerLatestPricesQueryResult = Apollo.QueryResult<
    BalancerLatestPricesQuery,
    BalancerLatestPricesQueryVariables
>;
export const BalancerJoinExitsDocument = gql`
    query BalancerJoinExits(
        $skip: Int
        $first: Int
        $orderBy: JoinExit_orderBy
        $orderDirection: OrderDirection
        $where: JoinExit_filter
        $block: Block_height
    ) {
        joinExits(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            ...BalancerJoinExit
        }
    }
    ${BalancerJoinExitFragmentDoc}
`;

/**
 * __useBalancerJoinExitsQuery__
 *
 * To run a query within a React component, call `useBalancerJoinExitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerJoinExitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerJoinExitsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerJoinExitsQuery(
    baseOptions?: Apollo.QueryHookOptions<BalancerJoinExitsQuery, BalancerJoinExitsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<BalancerJoinExitsQuery, BalancerJoinExitsQueryVariables>(BalancerJoinExitsDocument, options);
}
export function useBalancerJoinExitsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<BalancerJoinExitsQuery, BalancerJoinExitsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<BalancerJoinExitsQuery, BalancerJoinExitsQueryVariables>(
        BalancerJoinExitsDocument,
        options,
    );
}
export type BalancerJoinExitsQueryHookResult = ReturnType<typeof useBalancerJoinExitsQuery>;
export type BalancerJoinExitsLazyQueryHookResult = ReturnType<typeof useBalancerJoinExitsLazyQuery>;
export type BalancerJoinExitsQueryResult = Apollo.QueryResult<BalancerJoinExitsQuery, BalancerJoinExitsQueryVariables>;
export const BalancePortfolioDataDocument = gql`
    query BalancePortfolioData($id: ID!, $previousBlockNumber: Int!) {
        user(id: $id) {
            ...User
        }
        pools(first: 1000, where: { totalShares_gt: "0" }) {
            ...BalancerPool
        }
        previousUser: user(id: $id, block: { number: $previousBlockNumber }) {
            ...User
        }
        previousPools: pools(first: 1000, where: { totalShares_gt: "0" }, block: { number: $previousBlockNumber }) {
            ...BalancerPool
        }
    }
    ${UserFragmentDoc}
    ${BalancerPoolFragmentDoc}
`;

/**
 * __useBalancePortfolioDataQuery__
 *
 * To run a query within a React component, call `useBalancePortfolioDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancePortfolioDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancePortfolioDataQuery({
 *   variables: {
 *      id: // value for 'id'
 *      previousBlockNumber: // value for 'previousBlockNumber'
 *   },
 * });
 */
export function useBalancePortfolioDataQuery(
    baseOptions: Apollo.QueryHookOptions<BalancePortfolioDataQuery, BalancePortfolioDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<BalancePortfolioDataQuery, BalancePortfolioDataQueryVariables>(
        BalancePortfolioDataDocument,
        options,
    );
}
export function useBalancePortfolioDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<BalancePortfolioDataQuery, BalancePortfolioDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<BalancePortfolioDataQuery, BalancePortfolioDataQueryVariables>(
        BalancePortfolioDataDocument,
        options,
    );
}
export type BalancePortfolioDataQueryHookResult = ReturnType<typeof useBalancePortfolioDataQuery>;
export type BalancePortfolioDataLazyQueryHookResult = ReturnType<typeof useBalancePortfolioDataLazyQuery>;
export type BalancePortfolioDataQueryResult = Apollo.QueryResult<
    BalancePortfolioDataQuery,
    BalancePortfolioDataQueryVariables
>;
export const BalancerSwapsDocument = gql`
    query BalancerSwaps(
        $skip: Int
        $first: Int
        $orderBy: Swap_orderBy
        $orderDirection: OrderDirection
        $where: Swap_filter
        $block: Block_height
    ) {
        swaps(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            ...BalancerSwap
        }
    }
    ${BalancerSwapFragmentDoc}
`;

/**
 * __useBalancerSwapsQuery__
 *
 * To run a query within a React component, call `useBalancerSwapsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerSwapsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerSwapsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerSwapsQuery(
    baseOptions?: Apollo.QueryHookOptions<BalancerSwapsQuery, BalancerSwapsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<BalancerSwapsQuery, BalancerSwapsQueryVariables>(BalancerSwapsDocument, options);
}
export function useBalancerSwapsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<BalancerSwapsQuery, BalancerSwapsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<BalancerSwapsQuery, BalancerSwapsQueryVariables>(BalancerSwapsDocument, options);
}
export type BalancerSwapsQueryHookResult = ReturnType<typeof useBalancerSwapsQuery>;
export type BalancerSwapsLazyQueryHookResult = ReturnType<typeof useBalancerSwapsLazyQuery>;
export type BalancerSwapsQueryResult = Apollo.QueryResult<BalancerSwapsQuery, BalancerSwapsQueryVariables>;
export const GetBalancerTokensDocument = gql`
    query GetBalancerTokens(
        $skip: Int
        $first: Int
        $orderBy: Token_orderBy
        $orderDirection: OrderDirection
        $where: Token_filter
        $block: Block_height
    ) {
        tokens(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            ...BalancerToken
        }
    }
    ${BalancerTokenFragmentDoc}
`;

/**
 * __useGetBalancerTokensQuery__
 *
 * To run a query within a React component, call `useGetBalancerTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBalancerTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBalancerTokensQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetBalancerTokensQuery(
    baseOptions?: Apollo.QueryHookOptions<GetBalancerTokensQuery, GetBalancerTokensQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetBalancerTokensQuery, GetBalancerTokensQueryVariables>(GetBalancerTokensDocument, options);
}
export function useGetBalancerTokensLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetBalancerTokensQuery, GetBalancerTokensQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetBalancerTokensQuery, GetBalancerTokensQueryVariables>(
        GetBalancerTokensDocument,
        options,
    );
}
export type GetBalancerTokensQueryHookResult = ReturnType<typeof useGetBalancerTokensQuery>;
export type GetBalancerTokensLazyQueryHookResult = ReturnType<typeof useGetBalancerTokensLazyQuery>;
export type GetBalancerTokensQueryResult = Apollo.QueryResult<GetBalancerTokensQuery, GetBalancerTokensQueryVariables>;
export const BalancerTradePairsDocument = gql`
    query BalancerTradePairs(
        $skip: Int
        $first: Int
        $orderBy: TradePair_orderBy
        $orderDirection: OrderDirection
        $where: TradePair_filter
        $block: Block_height
    ) {
        tradePairs(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            ...BalancerTradePair
        }
    }
    ${BalancerTradePairFragmentDoc}
`;

/**
 * __useBalancerTradePairsQuery__
 *
 * To run a query within a React component, call `useBalancerTradePairsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBalancerTradePairsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBalancerTradePairsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useBalancerTradePairsQuery(
    baseOptions?: Apollo.QueryHookOptions<BalancerTradePairsQuery, BalancerTradePairsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<BalancerTradePairsQuery, BalancerTradePairsQueryVariables>(
        BalancerTradePairsDocument,
        options,
    );
}
export function useBalancerTradePairsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<BalancerTradePairsQuery, BalancerTradePairsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<BalancerTradePairsQuery, BalancerTradePairsQueryVariables>(
        BalancerTradePairsDocument,
        options,
    );
}
export type BalancerTradePairsQueryHookResult = ReturnType<typeof useBalancerTradePairsQuery>;
export type BalancerTradePairsLazyQueryHookResult = ReturnType<typeof useBalancerTradePairsLazyQuery>;
export type BalancerTradePairsQueryResult = Apollo.QueryResult<
    BalancerTradePairsQuery,
    BalancerTradePairsQueryVariables
>;
export const GetBalancerSnapshotsDocument = gql`
    query GetBalancerSnapshots(
        $skip: Int
        $first: Int
        $orderBy: BalancerSnapshot_orderBy
        $orderDirection: OrderDirection
        $where: BalancerSnapshot_filter
        $block: Block_height
    ) {
        balancerSnapshots(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            ...BalancerSnapshot
        }
    }
    ${BalancerSnapshotFragmentDoc}
`;

/**
 * __useGetBalancerSnapshotsQuery__
 *
 * To run a query within a React component, call `useGetBalancerSnapshotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBalancerSnapshotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBalancerSnapshotsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetBalancerSnapshotsQuery(
    baseOptions?: Apollo.QueryHookOptions<GetBalancerSnapshotsQuery, GetBalancerSnapshotsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetBalancerSnapshotsQuery, GetBalancerSnapshotsQueryVariables>(
        GetBalancerSnapshotsDocument,
        options,
    );
}
export function useGetBalancerSnapshotsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetBalancerSnapshotsQuery, GetBalancerSnapshotsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetBalancerSnapshotsQuery, GetBalancerSnapshotsQueryVariables>(
        GetBalancerSnapshotsDocument,
        options,
    );
}
export type GetBalancerSnapshotsQueryHookResult = ReturnType<typeof useGetBalancerSnapshotsQuery>;
export type GetBalancerSnapshotsLazyQueryHookResult = ReturnType<typeof useGetBalancerSnapshotsLazyQuery>;
export type GetBalancerSnapshotsQueryResult = Apollo.QueryResult<
    GetBalancerSnapshotsQuery,
    GetBalancerSnapshotsQueryVariables
>;
export const GetLatestPricesDocument = gql`
    query GetLatestPrices(
        $skip: Int
        $first: Int
        $orderBy: LatestPrice_orderBy
        $orderDirection: OrderDirection
        $where: LatestPrice_filter
        $block: Block_height
    ) {
        latestPrices(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            ...LatestPrice
        }
    }
    ${LatestPriceFragmentDoc}
`;

/**
 * __useGetLatestPricesQuery__
 *
 * To run a query within a React component, call `useGetLatestPricesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestPricesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestPricesQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      block: // value for 'block'
 *   },
 * });
 */
export function useGetLatestPricesQuery(
    baseOptions?: Apollo.QueryHookOptions<GetLatestPricesQuery, GetLatestPricesQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetLatestPricesQuery, GetLatestPricesQueryVariables>(GetLatestPricesDocument, options);
}
export function useGetLatestPricesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetLatestPricesQuery, GetLatestPricesQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetLatestPricesQuery, GetLatestPricesQueryVariables>(GetLatestPricesDocument, options);
}
export type GetLatestPricesQueryHookResult = ReturnType<typeof useGetLatestPricesQuery>;
export type GetLatestPricesLazyQueryHookResult = ReturnType<typeof useGetLatestPricesLazyQuery>;
export type GetLatestPricesQueryResult = Apollo.QueryResult<GetLatestPricesQuery, GetLatestPricesQueryVariables>;
export const GetLatestBlockDocument = gql`
    query GetLatestBlock {
        blocks(first: 1, orderBy: timestamp, orderDirection: desc) {
            id
            number
            timestamp
        }
    }
`;

/**
 * __useGetLatestBlockQuery__
 *
 * To run a query within a React component, call `useGetLatestBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestBlockQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLatestBlockQuery(
    baseOptions?: Apollo.QueryHookOptions<GetLatestBlockQuery, GetLatestBlockQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetLatestBlockQuery, GetLatestBlockQueryVariables>(GetLatestBlockDocument, options);
}
export function useGetLatestBlockLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetLatestBlockQuery, GetLatestBlockQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetLatestBlockQuery, GetLatestBlockQueryVariables>(GetLatestBlockDocument, options);
}
export type GetLatestBlockQueryHookResult = ReturnType<typeof useGetLatestBlockQuery>;
export type GetLatestBlockLazyQueryHookResult = ReturnType<typeof useGetLatestBlockLazyQuery>;
export type GetLatestBlockQueryResult = Apollo.QueryResult<GetLatestBlockQuery, GetLatestBlockQueryVariables>;
