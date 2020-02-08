export interface CombinePatternsOptions {
    capture?: boolean;
    flags?: string;
    join?: string;
    match?: string;
    nonCapture?: boolean;
}
export declare function combinePatterns(patterns: RegExp[], options?: CombinePatternsOptions): RegExp;
export declare const VALID_ALNUM_CHARS: RegExp;
export declare const VALID_PATH_CHARS: RegExp;
export declare const URL_SCHEME: RegExp;
export declare const URL_AUTH: RegExp;
export declare const URL_HOST: RegExp;
export declare const URL_PORT: RegExp;
export declare const URL_PATH: RegExp;
export declare const URL_QUERY: RegExp;
export declare const URL_FRAGMENT: RegExp;
export declare const URL_PATTERN: RegExp;
export declare const IP_V4_PART: RegExp;
export declare const IP_V4: RegExp;
export declare const IP_PATTERN: RegExp;
export declare const HASHTAG_PATTERN: RegExp;
export declare const EMAIL_USERNAME_PART: RegExp;
export declare const EMAIL_USERNAME: RegExp;
export declare const EMAIL_PATTERN: RegExp;
export declare const EMAIL_DISTINCT_PATTERN: RegExp;
export declare const TOP_LEVEL_TLDS: string[];
//# sourceMappingURL=constants.d.ts.map