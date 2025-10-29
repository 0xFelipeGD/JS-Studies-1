let resultado;

while (resultado !== "a" && resultado !== "b" && resultado !== "c") {
  resultado = prompt("Digite uma opção: a, b ou c");

  if (resultado !== "a" && resultado !== "b" && resultado !== "c") {
    alert("Opção inválida. Tente novamente.");
  }
}
alert(`Você escolheu a opção: ${resultado}`);
