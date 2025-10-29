/**
 * Unit Conversion Script
 *
 * Requirements:
 * Write a JavaScript program that works as a unit converter. The program should ask for a value in meters
 * and then give the option to choose which unit of measurement this value should be converted to.
 * The options are:
 * - millimeter (mm)
 * - centimeter (cm)
 * - decimeter (dm)
 * - decameter (dam)
 * - hectometer (hm)
 * - kilometer (km)
 *
 * The program should then convert the measurement according to the chosen option and display the result.
 * The program should also display an "Invalid option" message if the user enters an option different
 * from those available (use break and default for this)
 */

// User Information Collection
let meters = parseFloat(
  prompt("Digite o valor em metros que deseja converter:")
);
let conversionOption = prompt(
  "Escolha a unidade para a qual deseja converter:\nmm - milímetros\ncm - centímetros\ndm - decímetros\ndam - decâmetros\nhm - hectômetros\nkm - quilômetros"
);
let convertedValue;

// Resolution
switch (conversionOption) {
  case "mm":
    convertedValue = meters * 1000;
    alert(`${meters} metros equivalem a ${convertedValue} milímetros.`);
    break;
  case "cm":
    convertedValue = meters * 100;
    alert(`${meters} metros equivalem a ${convertedValue} centímetros.`);
    break;
  case "dm":
    convertedValue = meters * 10;
    alert(`${meters} metros equivalem a ${convertedValue} decímetros.`);
    break;
  case "dam":
    convertedValue = meters / 10;
    alert(`${meters} metros equivalem a ${convertedValue} decâmetros.`);
    break;
  case "hm":
    convertedValue = meters / 100;
    alert(`${meters} metros equivalem a ${convertedValue} hectômetros.`);
    break;
  case "km":
    convertedValue = meters / 1000;
    alert(`${meters} metros equivalem a ${convertedValue} quilômetros.`);
    break;
  default:
    alert("Opção inválida. Por favor, escolha uma unidade válida.");
    break;
}
