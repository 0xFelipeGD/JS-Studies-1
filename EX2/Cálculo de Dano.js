/**
 * Damage Calculation Script
 *
 * Requirements:
 * Write a program that allows you to enter the name and attack power of a character,
 * then the name, health points, defense power of another character and whether they
 * have a shield, and then calculate the amount of damage caused based on the following rules:
 *
 * - If the attack power is greater than the defense and the defender does not have a shield,
 *   the damage caused will be equal to the difference between attack and defense.
 *
 * - If the attack power is greater than the defense and the defender has a shield,
 *   the damage caused will be equal to half the difference between attack and defense.
 *
 * - If the attack power is less than or equal to the defense, the damage caused will be 0.
 *
 * Finally, the program should subtract the amount of damage from the defender's health points
 * and display the amount of damage and updated information for both characters on screen.
 */

// User Information Collection
let character1Name = prompt("Qual é o nome do Heroi?");
let character1Power = Number(
  prompt("Qual o nível de poder do Heroi?\nDe 1 a 100")
);
let character2Name = prompt("Qual é o nome do Vilão?");
let character2HP = Number(prompt("Qual a vida do Vilão?\nDe 1 a 100"));
let character2DP = Number(prompt("Qual a defesa do Vilão?\nDe 1 a 100"));
let character2Shield = confirm("O vilão possui escudo?");
let damage;

// Resolution
if (character1Power > character2DP && character2Shield === false) {
  damage = character1Power - character2DP;
} else if (character1Power > character2DP && character2Shield === true) {
  damage = (character1Power - character2DP) / 2;
} else if (character1Power <= character2DP) {
  damage = 0;
}

// Updated Health Calculation
let updatedcharacter2HP = Number(character2HP) - Number(damage);

// Output
alert(
  `O ${character1Name} causou ${damage} de dano ao ${character2Name}!\n` +
    `Status Atualizado:\n` +
    `${character1Name} - Poder: ${character1Power}\n` +
    `${character2Name} - Vida: ${updatedcharacter2HP}, Defesa: ${character2DP}, Escudo: ${
      character2Shield ? "Sim" : "Não"
    }`
);
