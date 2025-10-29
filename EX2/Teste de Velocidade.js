/**
 * Velocity Test Script
 * Collects the name and velocity of two vehicles and compares them.
 */

// User Information Collection
let firstVehicleType = prompt("Qual é o primeiro veículo?");
let firstVehicleVel = parseFloat(prompt("Qual a velocidade do primeiro veículo?"));
let secondVehicleType = prompt("Qual é o segundo veículo?");
let secondtVehicleVel = parseFloat(prompt("Qual a velocidade do segundo veículo?"));

// velocity resolution
if (firstVehicleVel > secondtVehicleVel) {
  alert(`O ${firstVehicleType} é mais rápido que o ${secondVehicleType}.`);
} else if (firstVehicleVel < secondtVehicleVel) {
  alert(`O ${secondVehicleType} é mais rápido que o ${firstVehicleType}.`);
} else {
  alert(`Ambos os veículos têm a mesma velocidade.`);
}
