import React from 'react';
import { ListChildComponentProps } from 'react-window';
import { CanonicalEmoji } from 'interweave-emoji';
import { CommonMode } from './types';
export declare type VirtualRow = string | CanonicalEmoji[];
export interface EmojiListRowProps {
    activeEmoji?: CanonicalEmoji | null;
    clearIcon?: React.ReactNode;
    commonMode: CommonMode;
    onClear: () => void;
    onEnterEmoji: (emoji: CanonicalEmoji, event: React.MouseEvent<HTMLButtonElement>) => void;
    onLeaveEmoji: (emoji: CanonicalEmoji, event: React.MouseEvent<HTMLButtonElement>) => void;
    onSelectEmoji: (emoji: CanonicalEmoji, event: React.MouseEvent<HTMLButtonElement>) => void;
    skinTonePalette?: React.ReactNode;
}
export default function EmojiListRow({ data, index, style, activeEmoji, clearIcon, commonMode, skinTonePalette, onClear, onEnterEmoji, onLeaveEmoji, onSelectEmoji, }: ListChildComponentProps & EmojiListRowProps): JSX.Element;
//# sourceMappingURL=EmojiListRow.d.ts.map