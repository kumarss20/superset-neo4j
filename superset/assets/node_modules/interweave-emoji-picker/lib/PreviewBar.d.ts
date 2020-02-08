import React from 'react';
import { CanonicalEmoji } from 'interweave-emoji';
export interface PreviewBarProps {
    emoji?: CanonicalEmoji | null;
    hideEmoticon: boolean;
    hideShortcodes: boolean;
    noPreview?: React.ReactNode;
}
export default function PreviewBar({ emoji, hideEmoticon, hideShortcodes, noPreview, }: PreviewBarProps): JSX.Element;
//# sourceMappingURL=PreviewBar.d.ts.map