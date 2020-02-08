import React from 'react';
import { SkinToneKey } from './types';
export interface SkinToneProps {
    active: boolean;
    children?: React.ReactNode;
    onSelect: (skinTone: SkinToneKey, event: React.MouseEvent<HTMLButtonElement>) => void;
    skinTone: SkinToneKey;
}
export default function SkinTone({ active, children, skinTone, onSelect }: SkinToneProps): JSX.Element;
//# sourceMappingURL=SkinTone.d.ts.map