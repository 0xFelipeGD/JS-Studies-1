const idade = prompt("Digite sua idade:");

if (idade > 18) {
  console.log("sua idade é maior que 18");
} else {
  console.log("sua idade é menor que 18");
}

//outra maneira de escrever if else usando operador ternário
const resultado = 6 === 6 ? "Sim, é igual" : "Não, é diferente";
console.log(resultado);
