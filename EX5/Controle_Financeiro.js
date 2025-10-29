/**
 * Financial Control Script
 *
 * Requirements:
 * Write a JavaScript program that starts by asking for the initial amount of money available
 * and then displays this amount on screen along with options to add money, remove money,
 * and exit.
 * When clicking the add money option, the program should ask for the amount to be
 * added, sum this value with the initial amount, and then show the menu again with the money
 * amount and options.
 * The remove money option should do the same but subtracting the value.
 * The exit option should terminate the program.
 */

// User Information Collection
let availableMoney = parseFloat(prompt("Qual é o valor inicial disponível?"));
let option;

do {
  // Menu Display
  option = prompt(
    `Valor disponível: $ ${availableMoney.toFixed(
      2
    )}\n\nEscolha uma opção:\n1 - Adicionar Fundos\n2 - Remover Fundos\n3 - Sair`
  );

  if (option === "1") {
    const addAmount = parseFloat(prompt("Qual o valor a ser adicionado?"));
    if (!isNaN(addAmount) && addAmount > 0) {
      availableMoney += addAmount;
    } else {
      alert("Por favor, insira um valor válido e positivo.");
    }
  } else if (option === "2") {
    const removeAmount = parseFloat(prompt("Qual o valor a ser removido?"));
    if (!isNaN(removeAmount) && removeAmount > 0) {
      if (removeAmount > availableMoney) {
        alert("Saldo insuficiente para essa operação.");
      } else {
        availableMoney -= removeAmount;
      }
    } else {
      alert("Por favor, insira um valor válido e positivo.");
    }
  } else if (option === "3") {
    alert("Saindo do sistema...");
  } else {
    alert("Opção inválida. Tente novamente.");
  }
} while (option !== "3");
