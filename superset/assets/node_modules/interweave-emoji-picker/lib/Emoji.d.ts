import React from 'react';
import { CanonicalEmoji } from 'interweave-emoji';
export interface EmojiProps {
    active: boolean;
    emoji: CanonicalEmoji;
    onEnter: (emoji: CanonicalEmoji, event: React.MouseEvent<HTMLButtonElement>) => void;
    onLeave: (emoji: CanonicalEmoji, event: React.MouseEvent<HTMLButtonElement>) => void;
    onSelect: (emoji: CanonicalEmoji, event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Emoji({ active, emoji, onEnter, onLeave, onSelect }: EmojiProps): JSX.Element;
//# sourceMappingURL=Emoji.d.ts.map