"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xor = xor;
// TODO: Nothing
// Console Clear
console.clear();
// Functions
/**
 * **XOR calculation** between 2 sequence of bits
 *
 * - Arrays must contain `0` or `1` values
 *
 * @param source is the source bit sequence
 * @param key is the XOR key
 * @returns **XORred bit sequence**
 * @throws {Error} if either one or both sequences are empty
 */
function xor(source, key) {
    var _a, _b;
    if (source.length == 0 || key.length == 0) {
        throw new Error("Gli array non possono essere vuoti");
    }
    let result = [];
    // Normalization
    const length = Math.max(source.length, key.length);
    for (let i = 0; i < length; i++) {
        const n_source = (_a = source[source.length - length + i]) !== null && _a !== void 0 ? _a : 0;
        const n_key = (_b = key[key.length - length + i]) !== null && _b !== void 0 ? _b : 0;
        result.push((n_source ^ n_key));
    }
    return result;
}
// Tests
/*
    Crash!
    console.log(xor([],[]))
    console.log(xor([0,1,1,1,1],[]))
*/
console.log(xor([0, 1, 1, 1, 0], [1, 1, 0, 0, 1]));
console.log(xor([1, 1, 1, 0, 0, 0], [1, 1]));
console.log(xor([0, 1], [1, 0, 0, 1, 1, 1]));
