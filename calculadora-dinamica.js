var num1 = prompt("Digite o primeiro número: ");
var operacao = prompt("Digite a operação que você queira fazer o calculo: ");
var num2 = prompt("Digite o segundo número: ");

num1 = parseInt(num1);
num2 = parseFloat(num2);

if (operacao == "+") {
  alert(num1 + num2);
} else if (operacao == "-") {
  alert(num1 - num2);
} else if (operacao == "/") {
  alert(num1 / num2);
} else {
  alert(num1 * num2);
}
