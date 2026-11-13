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

    test("returns the expected type", () => {
        expectTypeOf(xor([1,1], [1,0]))
            .toEqualTypeOf<Binary[]>();
    })

    test("XOR between two arrays of the same length", () => {
        expect(xor([0,1,1,1,0], [1,1,0,0,1]))
            .toEqual([1,0,1,1,1]);
    });

    test("XOR between two arrays of different lengths", () => {
        expect(xor([1,0,1], [1]))
            .toEqual([1,0,0]);
    });

    test("XOR between two identical arrays", () => {
        expect(xor([1,0,1], [1,0,1]))
            .toEqual([0,0,0])
    });

    test("XOR between two empty arrays", () => {
        expect(() => xor([],[]))
            .toThrow(Error)
    });

    test("XOR between an empty source and a non-empty key", () => {
        expect(() => xor([],[1,0,1,1]))
            .toThrow(Error)
    });

    test("XOR between a non-empty source and an empty key", () => {
        expect(() => xor([1,0,1,1],[]))
            .toThrow(Error)
    });
});