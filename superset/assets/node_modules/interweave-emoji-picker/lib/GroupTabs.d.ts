import React from 'react';
import { CanonicalEmoji } from 'interweave-emoji';
import { CommonMode, GroupKey } from './types';
export interface GroupTabsProps {
    activeGroup: GroupKey;
    commonEmojis: CanonicalEmoji[];
    commonMode: CommonMode;
    icons: {
        [key: string]: React.ReactNode;
    };
    onSelect: (group: GroupKey, event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function GroupTabs({ activeGroup, commonEmojis, commonMode, icons, onSelect, }: GroupTabsProps): JSX.Element;
//# sourceMappingURL=GroupTabs.d.ts.map