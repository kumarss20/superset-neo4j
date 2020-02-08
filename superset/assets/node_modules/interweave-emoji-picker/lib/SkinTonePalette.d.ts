import React from 'react';
import { SkinToneKey } from './types';
export interface SkinTonePaletteProps {
    activeSkinTone: SkinToneKey;
    icons: {
        [key: string]: React.ReactNode;
    };
    onSelect: (skinTone: SkinToneKey, event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function SkinTonePalette({ activeSkinTone, icons, onSelect }: SkinTonePaletteProps): JSX.Element;
//# sourceMappingURL=SkinTonePalette.d.ts.map