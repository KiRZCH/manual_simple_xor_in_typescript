import {describe, expect, test, expectTypeOf} from "vitest";
import {Binary, xor} from "./binary";

/**
 * **TEST FOR THE XOR FUNCTION**
 *
 * @import {Binary} from "./binary.ts"
 *
 * @import {xor} from "./binary.ts"
 *
 * @import {describe, expect, test, expectTypeOf} from "vitest"
 *
 * 1. Test: I expect the right type to be output
 *
 * 2. Test: XOR between 2 arrays with same length
 *
 * 3. Test: XOR between 2 arrays with different length
 *
 * 4. Test: XOR between 2 arrays with same values
 *
 * 5. Test: XOR between 2 empty arrays
 *
 * 6. Test: XOR between an empty source and a non-empty key
 *
 * 7. Test: XOR between a non-empty source and an empty key
 *
 * @returns nothing
 * @returns {Error}
 */
describe("XOR", () => {

    test("Mi aspetto che restituisca il giusto tipo", () => {
        expectTypeOf(xor([1,1], [1,0]))
            .toEqualTypeOf<Binary[]>();
    })

    test("XOR tra due array della stessa lunghezza", () => {
        expect(xor([0,1,1,1,0], [1,1,0,0,1]))
            .toEqual([1,0,1,1,1]);
    });

    test("XOR tra due array di lunghezza diversa", () => {
        expect(xor([1,0,1], [1]))
            .toEqual([1,0,0]);
    });

    test("XOR tra due array identici", () => {
        expect(xor([1,0,1], [1,0,1]))
            .toEqual([0,0,0])
    });

    test("XOR tra due array vuoti", () => {
        expect(() => xor([],[]))
            .toThrow(Error)
    });

    test("XOR tra sorgente vuota e chiave non", () => {
        expect(() => xor([],[1,0,1,1]))
            .toThrow(Error)
    });

    test("XOR tra chiave vuota e sorgente non", () => {
        expect(() => xor([1,0,1,1],[]))
            .toThrow(Error)
    });
});