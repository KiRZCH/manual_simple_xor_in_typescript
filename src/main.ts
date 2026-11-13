// Imports
import {Binary, xor} from "./binary";

// Functions

/**
 * **arrayDimensionInteger**
 *
 * let you choose an integer.
 * @param question
 * @returns number
 * @returns null
 * @throws {Error} local-managed
 */
function arrayDimensionInteger(question: string): number | null {
    while (true) {
        const answer: string | null = prompt(question)
        // If press "cancel" it interrupts the request
        if (answer === null) return null

        try {
            const value: number = Number(answer)
            if (!Number.isInteger(value) || value <= 0) {
                throw new Error("Inserisci un numero intero maggiore di 0.")
            }
            return value
        } catch (error) {
            alert(error instanceof Error ? error.message : "Valore non valido.")
        }
    }
}


/**
 * **bitDimensionInteger**
 *
 * let you choose a bit. (0 or 1)
 * @param question
 * @returns Binary
 * @returns null
 * @throws {Error} local-managed
 */
function bitDimensionInteger(question: string): Binary | null {
    while (true) {
        const answer: string | null = prompt(question);

        // Annulla l'inserimento senza generare un errore.
        if (answer === null) return null;

        try {
            const value: number = Number(answer.trim());

            if (answer.trim() === "" || (value !== 0 && value !== 1)) {
                throw new Error("Inserisci 0 oppure 1.");
            }

            return value;
        } catch (error) {
            alert(error instanceof Error ? error.message : "Valore non valido.");
        }
    }
}


/**
 * **main**
 *
 * @import {Binary, xor} from "./binary.ts"
 *
 * @returns nothing
 */
function main(): void {
    const countsBits1: number | null = arrayDimensionInteger("Quanti bit per array1?")
    if (countsBits1 === null) return;
    const countsBits2: number | null = arrayDimensionInteger("Quanti bits per array2?")
    if (countsBits2 === null) return;

    const binArray: Binary[][] = [[],[]]

    for (let i: number = 0; i < countsBits1; i++) {
        const bit: Binary | null = bitDimensionInteger(`Array 1, bit ${i + 1}:`)
        if (bit === null) return;
        binArray[0].push(bit)
    }
    for (let j: number = 0; j < countsBits2; j++) {
        const bit: Binary | null = bitDimensionInteger(`Array 2, bit ${j + 1}:`)
        if (bit === null) return;
        binArray[1].push(bit)
    }


    const xorResult: Binary[] = xor(binArray[0], binArray[1])
    console.log(`XOR\n Array1: ${binArray[0]}\nChiave: ${binArray[1]}Xorred:\n${xorResult}`)
}

main();

