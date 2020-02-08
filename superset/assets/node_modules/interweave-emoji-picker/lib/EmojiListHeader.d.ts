import React from 'react';
import { CommonMode, GroupKey } from './types';
export interface EmojiListHeaderProps {
    clearIcon?: React.ReactNode;
    commonMode: CommonMode;
    group: GroupKey;
    onClear: () => void;
    skinTonePalette?: React.ReactNode;
    sticky?: boolean;
}
export default function EmojiListHeader({ clearIcon, commonMode, group, skinTonePalette, sticky, onClear, }: EmojiListHeaderProps): JSX.Element;
//# sourceMappingURL=EmojiListHeader.d.ts.map