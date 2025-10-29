/**
 * Interactive User Information and Math Operations Application
 * Collects user personal data and performs basic mathematical calculations
 */

// User Information Collection
let firstName = prompt("Qual é o seu primeiro nome?");
let lastName = prompt("Qual é o seu sobrenome?");
let fieldOfStudy = prompt("Qual é o seu campo de estudo?");
let birthYear = parseInt(prompt("Qual é o seu ano de nascimento?"));

// Age calculation
let CURRENT_YEAR = 2025;
let currentAge = CURRENT_YEAR - birthYear;

// Display user information
alert(
  `Olá ${firstName} ${lastName}, você tem ${currentAge} anos e estuda ${fieldOfStudy}.`
);

// Mathematical Operations Section
alert("Agora vamos realizar as operações matemáticas!");

// Number input collection
let firstNumber = parseFloat(prompt("Digite o primeiro número:"));
let secondNumber = parseFloat(prompt("Digite o segundo número:"));

// Mathematical calculations
let sum = firstNumber + secondNumber;
let subtraction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;

// Display calculation results
alert(
  `A soma dos números é ${sum}, a subtração é ${subtraction}, a multiplicação é ${multiplication} e a divisão é ${division}.`
);
