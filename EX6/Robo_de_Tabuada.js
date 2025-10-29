/**
 * Multiplication Table Script
 *
 * Requirements:
 * Write a JavaScript program capable of calculating the multiplication table
 * for a specific number (from 1 to 20).
 * The program should start by asking for the number to be used in calculations,
 * then save all multiplication
 * results from 1 to 20 using the provided number into a string variable.
 * After that, the program should display these results and finish.
 */

// User Information Collection
let number = parseInt(
  prompt("Digite um número para ver a tabuada de multiplicação (1 a 20):")
);
let multiplicationTable = [];

// Multiplication Table Calculation
for (let i = 1; i <= 20; i++) {
  let result = number * i;
  multiplicationTable.push(`${number} x ${i} = ${result}`);
}
// Output
alert("Tabuada de Multiplicação:\n" + multiplicationTable.join("\n"));
1;
