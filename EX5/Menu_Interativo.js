/**
 * Interactive Menu Script
 *
 * Requirements:
 * Write a JavaScript program that simulates an interactive menu with 5 different options.
 * The program should start by showing the 5 available options. The first four options
 * don't need any specific functionality, the last option should be "Exit".
 *
 * When clicking on any of the first four options, a message should be displayed on the
 * screen indicating which option was chosen, and then the program should display the
 * menu with the 5 options again. This should continue happening until the user chooses
 * the "Exit" option. When selecting it, a message saying that the system is being
 * closed should be displayed on the screen and then the program is finished.
 */

// Declaration of variable
let option;

// Menu Loop
do {
  option = prompt(
    "Opção 1: Fazer algo legal\nOpção 2: Fazer algo divertido\nOpção 3: Fazer algo educativo\nOpção 4: Fazer algo relaxante\nOpção 5: Sair"
  );
  switch (option) {
    case "1":
      alert("Você escolheu a Opção 1: Fazer algo legal");
      break;
    case "2":
      alert("Você escolheu a Opção 2: Fazer algo divertido");
      break;
    case "3":
      alert("Você escolheu a Opção 3: Fazer algo educativo");
      break;
    case "4":
      alert("Você escolheu a Opção 4: Fazer algo relaxante");
      break;
    case "5":
      alert("Saindo do sistema...");
      break;
    default:
      alert("Opção inválida, por favor escolha novamente.");
  }
} while (option !== "5");
