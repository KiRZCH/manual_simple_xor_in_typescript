"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const binary_1 = require("./binary");
(0, vitest_1.describe)("XOR", () => {
    (0, vitest_1.test)("Mi aspetto che restituisca il giusto tipo", () => {
        (0, vitest_1.expectTypeOf)((0, binary_1.xor)([1, 1], [1, 0]))
            .toEqualTypeOf();
    });
    (0, vitest_1.test)("XOR tra due array della stessa lunghezza", () => {
        (0, vitest_1.expect)((0, binary_1.xor)([0, 1, 1, 1, 0], [1, 1, 0, 0, 1]))
            .toEqual([1, 0, 1, 1, 1]);
    });
    (0, vitest_1.test)("XOR tra due array di lunghezza diversa", () => {
        (0, vitest_1.expect)((0, binary_1.xor)([1, 0, 1], [1]))
            .toEqual([1, 0, 0]);
    });
    (0, vitest_1.test)("XOR tra due array identici", () => {
        (0, vitest_1.expect)((0, binary_1.xor)([1, 0, 1], [1, 0, 1]))
            .toEqual([0, 0, 0]);
    });
    (0, vitest_1.test)("XOR tra due array vuoti", () => {
        (0, vitest_1.expect)(() => (0, binary_1.xor)([], []))
            .toThrow(Error);
    });
    (0, vitest_1.test)("XOR tra sorgente vuota e chiave non", () => {
        (0, vitest_1.expect)(() => (0, binary_1.xor)([], [1, 0, 1, 1]))
            .toThrow(Error);
    });
    (0, vitest_1.test)("XOR tra chiave vuota e sorgente non", () => {
        (0, vitest_1.expect)(() => (0, binary_1.xor)([1, 0, 1, 1], []))
            .toThrow(Error);
    });
});
