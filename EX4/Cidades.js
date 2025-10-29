/**
 * Tourist Cities Visited Script
 *
 * Requirements:
 * Write a JavaScript program that asks for a tourist's name and then asks if they have visited any city.
 * If the answer is yes, ask for the city name and store it in a variable, then continue asking if the
 * tourist has visited any other city until the answer is no. At the end, the program should display
 * the tourist's name, how many cities they visited, and which cities they visited.
 */

// User Information Collection
let touristName = prompt("Qual é o seu nome, turista?");
let visitedCities = [];
let hasVisited = confirm("Você já visitou alguma cidade?");

// Loop to collect city names
while (hasVisited) {
  let cityName = prompt("Qual é o nome da cidade que você visitou?");
  visitedCities.push(cityName);
  hasVisited = confirm("Você visitou alguma outra cidade?");
}
// Output
alert(
  `Turista: ${touristName}\n` +
    `Número de cidades visitadas: ${visitedCities.length}\n` +
    `Cidades visitadas: ${visitedCities.join(", ")}`
);
