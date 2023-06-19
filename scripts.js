/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/
let numberOne = prompt('Digite um número')
let numberTwo = prompt('Digite mais um número')
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)
const soma = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const resto = numberOne % numberTwo
alert('Soma= ' + soma)
alert('Subtração= ' + sub)
alert('Multiplicação= ' + multi)
alert('Divisão= ' + div)
alert('Resto da divisão= ' + resto)