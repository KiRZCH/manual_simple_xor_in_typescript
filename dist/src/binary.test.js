"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const binary_1 = require("./binary");
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
(0, vitest_1.describe)("XOR", () => {
    (0, vitest_1.test)("returns the expected type", () => {
        (0, vitest_1.expectTypeOf)((0, binary_1.xor)([1, 1], [1, 0]))
            .toEqualTypeOf();
    });
    (0, vitest_1.test)("XOR between two arrays of the same length", () => {
        (0, vitest_1.expect)((0, binary_1.xor)([0, 1, 1, 1, 0], [1, 1, 0, 0, 1]))
            .toEqual([1, 0, 1, 1, 1]);
    });
    (0, vitest_1.test)("XOR between two arrays of different lengths", () => {
        (0, vitest_1.expect)((0, binary_1.xor)([1, 0, 1], [1]))
            .toEqual([1, 0, 0]);
    });
    (0, vitest_1.test)("XOR between two identical arrays", () => {
        (0, vitest_1.expect)((0, binary_1.xor)([1, 0, 1], [1, 0, 1]))
            .toEqual([0, 0, 0]);
    });
    (0, vitest_1.test)("XOR between two empty arrays", () => {
        (0, vitest_1.expect)(() => (0, binary_1.xor)([], []))
            .toThrow(Error);
    });
    (0, vitest_1.test)("XOR between an empty source and a non-empty key", () => {
        (0, vitest_1.expect)(() => (0, binary_1.xor)([], [1, 0, 1, 1]))
            .toThrow(Error);
    });
    (0, vitest_1.test)("XOR between a non-empty source and an empty key", () => {
        (0, vitest_1.expect)(() => (0, binary_1.xor)([1, 0, 1, 1], []))
            .toThrow(Error);
    });
});
