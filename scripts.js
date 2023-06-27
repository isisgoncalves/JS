// /*
//   Capturar 2 números
//   e fazer as operações matemáticas
//   de soma, subtração, multiplicação,
//   divisão e resto da divisão.

//   E para cada operação, mostrar um alerta
//   com o resultado.
// */
// let numberOne = prompt('Digite um número')
// let numberTwo = prompt('Digite mais um número')
// numberOne = Number(numberOne)
// numberTwo = Number(numberTwo)
// const soma = numberOne + numberTwo
// const sub = numberOne - numberTwo
// const multi = numberOne * numberTwo
// const div = numberOne / numberTwo
// const resto = numberOne % numberTwo
// alert('Soma= ' + soma)
// alert('Subtração= ' + sub)
// alert('Multiplicação= ' + multi)
// alert('Divisão= ' + div)
// alert('Resto da divisão= ' + resto)

/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/
// let student = prompt('Nome do(a) Aluno(a):')
// let n1 = prompt('Nota da primeira prova:')
// let n2 = prompt('Nota da segunda prova:')
// let n3 = prompt('Nota da terceira prova:')
// let ava = (Number(n1) + Number(n2) + Number(n3)) / 3
// ava = ava.toFixed(0)
// if(ava >=7){
//   alert('Parabéns ' + student + ', você passou! Sua média foi de ' + ava + '.')
// } else if(ava <3){
//   alert('Sinto muito ' +student + ', você foi reprovado(a)! Sua média foi de ' + ava + '.')
// }else{
//   alert(student + ', você está em recuperação. Estude para a próxima prova. Sua média foi de ' + ava + '.')
// }

// let list = [];
// for(let item = 0; item < 5; item++){
//   let itemName = prompt('Faça sua lista:')
//   list[item] = itemName
// }
// alert(list)

// let list = [];
// for(let item = 0; item < 3; item++){
//   let itemName = prompt('Do it your list')
//   list[item] = itemName
// }
// alert(list)





// let list = [];
// for(let item = 0; item < 2; item++){
//   let itemName = prompt('Faça sua lista:')
//   list[item]= itemName
// }
// alert(list)

/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie uma lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas


let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
let randomNumber = Math.round(Math.random() * 10)
//Math.random() : gera um número randomico (aleatório), entre 0 e 1.
//* 10 : Multiplica este resultado até 10 vezes.
//Math.round : arredonda os números quebrados para o mais próximo : 1.5 p/ 2; 1.4 p/ 1; 4.9 p/ 5...
//randomNumber : variável de número gerado.

let xAttempts = 1
//mínimo de tentativas: 
//xAttempts: X tentativas
//1: número mínimo de tentativas

while(Number(result) != randomNumber){
  result = prompt("Erro, tente novamente:")
  xAttempts++
}
//while : Enquanto.
//Number(result) : como o resultado é uma string, transformamos em número, envolvendo o resultado dentro de (), após a palavra chave Number.
// != : Operador de comparação "diferente de".
//result = (resultado atribuído)
// prompt("Erro, tente novamente:") : Diga("Erro, tente novamente:")
//xAttempts++ : X tentativas +1(quando errar)
//Ou seja, 
//while ("Enquanto o")
//Number(result) ("resultado numérico") 
//!= (for "diferente de") 
//randomNumber ("Número randomico/aleatório")
//result ("o resultado será")
//prompt("Erro, tente novamente:") ("Diga("Erro, tente novamente:")")
//xAttempts++ ("X tentivas, + 1 chance se errar")

alert(`Parabéns! Você advinhou o número em ${xAttempts} tentativas`)
//Alerta quando o "while" não é aplicado.


let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente:")
  xAttempts++
}
alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativas`)
*/