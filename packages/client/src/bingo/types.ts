export interface BingoCard {
    readonly grid: string[][];
}

export interface ParseResult {
    readonly calledNumbers: string[];
    readonly cards: BingoCard[];
}