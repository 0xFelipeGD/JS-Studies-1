/**
 * Palindrome Checker Script
 *
 * Requirements:
 * Write a JavaScript program that can identify if a word is a palindrome.
 * A palindrome is a word that when read backwards has the same letters
 * in the same order. The program should start by asking for a word to be
 * entered and then display a message saying whether that word is or is
 * not a palindrome. If it is not a palindrome, the program should show
 * the word read from left to right and from right to left.
 */

// User Information Collection
let word = prompt("Digite uma palavra:");

// Palindrome Check - Method Chaining Explanation
/*
This demonstrates method chaining to reverse a string:
1. split("") - converts string to array of characters
2. reverse() - reverses the array in-place
3. join("") - combines array back to string
Example: "hello" → ["h","e","l","l","o"] → ["o","l","l","e","h"] → "olleh"
*/
let reversedWord = word.split("").reverse().join("");
if (word === reversedWord) {
  alert(`A palavra "${word}" é um palíndromo!`);
} else {
  alert(
    `A palavra "${word}" não é um palíndromo.\n` +
      `Lida de frente para trás: "${word}"\n` +
      `Lida de trás para frente: "${reversedWord}"`
  );
}
