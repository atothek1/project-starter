import { parseRawInput } from "../parse";
import { BingoCard } from "../types";
import { rawInput } from "./fixture";


function resolve( card: BingoCard, value: string ): BingoCard {
    return card.grid.map
}

test("", () => {
    const data = parseRawInput( rawInput );
    const card = data.cards[0];
    data.calledNumbers.forEach( ( val: string ) => {
        resolve( card, val );
    } )

});

