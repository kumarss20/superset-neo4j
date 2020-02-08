import { Emoji, Hexcode } from 'emojibase';
import { CanonicalEmoji } from './types';
export declare function resetInstances(): void;
export default class EmojiDataManager {
    EMOJIS: {
        [hexcode: string]: CanonicalEmoji;
    };
    EMOTICON_TO_HEXCODE: {
        [emoticon: string]: Hexcode;
    };
    SHORTCODE_TO_HEXCODE: {
        [shortcode: string]: Hexcode;
    };
    UNICODE_TO_HEXCODE: {
        [unicode: string]: Hexcode;
    };
    data: CanonicalEmoji[];
    flatData: CanonicalEmoji[];
    locale: string;
    constructor(locale?: string);
    /**
     * Return or create a singleton instance per locale.
     */
    static getInstance(locale?: string): EmojiDataManager;
    /**
     * Return dataset as a list.
     */
    getData(): CanonicalEmoji[];
    /**
     * Return dataset as a flattened list.
     */
    getFlatData(): CanonicalEmoji[];
    /**
     * Package the emoji object with additional data,
     * while also extracting and partitioning relevant information.
     */
    packageEmoji(baseEmoji: Emoji): CanonicalEmoji;
    /**
     * Parse and generate emoji datasets.
     */
    parseEmojiData(data: Emoji[]): CanonicalEmoji[];
}
//# sourceMappingURL=EmojiDataManager.d.ts.map