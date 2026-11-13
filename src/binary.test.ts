import {describe, expect, test, ExpectTypeOf, expectTypeOf} from "vitest";
import {Binary, xor} from "./binary";

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