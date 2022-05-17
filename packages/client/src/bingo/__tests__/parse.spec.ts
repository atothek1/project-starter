import { rawInput } from "./fixture";
import { parseRawInput } from "../parse";


describe("parseRawInput()", () => {
    test("parse raw string input to ParseResult", () => {
        const result = parseRawInput(rawInput);

        const expected = [
            7,
            4,
            9,
            5,
            11,
            17,
            23,
            2,
            0,
            14,
            21,
            24,
            10,
            16,
            13,
            6,
            15,
            25,
            12,
            22,
            18,
            20,
            8,
            19,
            3,
            26,
            1
        ].map( val => val.toString() );

        expect(result.calledNumbers).toStrictEqual(expected);
        expect(result.cards).toHaveLength(5);
        expect(result.cards[0]?.grid).toHaveLength(5);
    });
});
