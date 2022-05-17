import { BingoCard, ParseResult } from "./types";

function filterEmptyString(line: string): boolean {
    return line.length > 0;
}

function parseCards(lines: string[]): BingoCard[] {
    const result = lines.reduce((res: string[][], line, idx) => {
        const a = line.split(" ").filter(filterEmptyString);
        res.push(a);
        return res;
    }, []);

    return [{ grid: result }];
}

export function parseRawInput(input: string): ParseResult {
    const result: ParseResult = {
        calledNumbers: [],
        cards: []
    };

    const lines = input.split("\n").filter(filterEmptyString);
    const calledNumbers = lines.shift()?.split(",");
    // possible validation

    const cards = parseCards(lines);
    return {...result, calledNumbers, cards};
}