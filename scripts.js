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





let list = [];
for(let item = 0; item < 2; item++){
  let itemName = prompt('Faça sua lista:')
  list[item]= itemName
}
alert(list)