import React from 'react';
export interface SearchBarProps {
    autoFocus: boolean;
    onChange: (query: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    searchQuery: string;
}
export default function SearchBar({ autoFocus, searchQuery, onChange, onKeyUp }: SearchBarProps): JSX.Element;
//# sourceMappingURL=SearchBar.d.ts.map