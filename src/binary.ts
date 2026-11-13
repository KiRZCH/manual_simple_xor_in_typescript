// TODO: Nothing
// Console Clear
// console.clear()

// Types

export type Binary = 0 | 1

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

export function xor(source: Binary[], key: Binary[]): Binary[] {
    if (source.length == 0 || key.length == 0) {
        throw new Error("Arrays cannot be empty")
    }
    let result: Binary[] = []
    // Normalization
    const length: number = Math.max(source.length, key.length)
    for (let i: number = 0; i < length; i++) {
        const n_source: Binary = source[source.length - length + i] ?? 0
        const n_key: Binary = key[key.length - length + i] ?? 0
        result.push(n_source != n_key ? 1 as Binary : 0 as Binary)
    }
    return result
}

// Tests
/*
    Crash!
    console.log(xor([],[]))
    console.log(xor([0,1,1,1,1],[]))

console.log(xor([0,1,1,1,0],[1,1,0,0,1]))
console.log(xor([1,1,1,0,0,0],[1,1]))
console.log(xor([0,1],[1,0,0,1,1,1]))
*/