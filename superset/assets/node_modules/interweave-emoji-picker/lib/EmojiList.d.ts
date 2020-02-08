import React from 'react';
import { EmojiListRowProps } from './EmojiListRow';
import { GroupKey, GroupEmojiMap } from './types';
export interface IndicesMap {
    [key: string]: number;
}
export interface EmojiListProps extends EmojiListRowProps {
    activeGroup: GroupKey;
    columnCount: number;
    columnPadding?: number;
    groupedEmojis: GroupEmojiMap;
    hideGroupHeaders: boolean;
    noResults?: React.ReactNode;
    onScroll: () => void;
    onScrollGroup: (group: GroupKey) => void;
    rowCount: number;
    rowPadding?: number;
    scrollToGroup?: GroupKey | '';
    stickyGroupHeader?: boolean;
}
export default function EmojiList({ activeGroup, columnCount, columnPadding, groupedEmojis, hideGroupHeaders, noResults, rowCount, rowPadding, scrollToGroup, stickyGroupHeader, onScroll, onScrollGroup, ...rowProps }: EmojiListProps): JSX.Element;
//# sourceMappingURL=EmojiList.d.ts.map