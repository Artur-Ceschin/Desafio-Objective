// Desenvolva uma lógica que dada um lista/sequência de inteiros de 1 a 100, percorra ela e caso o numero seja:
// * divisível por 3 imprima "fizz"
// * divisível por 5 imprima "buzz"
// * divisível por 3 e 5 imprima "fizz buzz"
// * caso nao entre nas regras acima, deverá imprimir o próprio número.

function handleNumberList(start, end) {
  // Acretido que dessa forma funcione se passar 56 e 56 por exemplo ele irá retornar o número
  // Mas se passar uma lista de 0 100 ele irá percorrer e se esse valor mair que 100 retorna um erro
  if (end > 100) {
    throw new Error("Apenas númerod de 0 a 100 são permitos")
  }
  for (let i = start; i <= end; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
}
handleNumberList(55, 56)
