import React from 'react';
import { CommonMode, GroupKey } from './types';
export interface GroupProps {
    active: boolean;
    children: React.ReactNode;
    commonMode: CommonMode;
    group: GroupKey;
    onSelect: (group: GroupKey, event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Group({ active, children, commonMode, group, onSelect }: GroupProps): JSX.Element;
//# sourceMappingURL=Group.d.ts.map