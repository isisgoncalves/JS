/*
F12: Dev tools
scripts.js (Java Script)
<script src= " " > </script>
  ./ (Diretório Local)
    ./script.js
No script.js: Ex.:
  console.log('Bem vindos ao Starter!!!')
    Atualizar no Dev tools da página, Aba Console, para visualização de mensagem.

Como ignorar/comentar códigos:
  Acrescentar // antes do código (para 1 linha).
Para mais de 1 linha (bloco):
  Antes do código adicionar /*, e no fim do código */

//ESCOPO determina a visibilidade de alguma variável no JS.

/*
Nomeando Variáveis
Para nomearmos variáveis corretamente e de um jeito inteligente, precisamos saber de algumas coisas, como: 
JavaScript é case-sensitive (sensível à letras maiúsculas e minúsculas) e aceita a cadeia de caracteres Unicode, podendo receber acentuações. 
Em um nome de variável em JS você pode: 
Iniciar com caracteres especiais: $ _
Iniciar com letras e colocar acentos, lembrando sempre que letras maiúsculas e minúsculas fazem a diferença: Isis, Ísis, isis, ísis 
No entanto, você não pode: 
Iniciar com números e colocar espaços vazios: 123 alguma coisa
Idealmente você deve colocar nomes significativos, que fazem sentido na aplicação, explicando o que a variável é, usando camel case, onde a primeira palavra de uma frase é toda minúscula, e as subsequentes não se separam por espaço e tem a primeira letra maiúscula, por exemplo: oNomeDessaVariável
E usar nomes em inglês.
*/

/*
Para declarar uma variável podemos usar var, let e const.
Para atribuírmos valores à essa variável utilizamos o caractere =.
E para vermos o tipo dessa variável podemos utilizar a função console.log(typeof variavel).
*/

/*
Agrupando declarações
É possível agrupar diversas declarações de variáveis em JavaScript usando let, const ou var e colocando uma vírgula entre os nomes das variáveis a serem criadas, por exemplo: let name, age, isStudent. 
Para mostrar mais de uma variável no console.log também é possível usando vírgula, por exemplo:
console.log(name, age, isStudent).
*/

/*
Concatenando e interpolando variáveis
É possível concatenar strings com o operador +. Exemplo: 
name = Junior
age = 38
o Junior tem 38 anos.
console.log('o ' + name + ' tem ' + age + ' anos.') 
Desta maneira as variáveis serão convertidas em texto e o que será mostrado será um texto com o nome e a idade que foram estabelecidas no código. 
Uma outra maneira de escrever um texto com variáveis é por meio da interpolação com template literals, usando crase para o texto e ${} para denotar uma variável. Exemplo:
console.log(O ${name} tem ${age} anos.)
O resultado deste comando será o mesmo texto do anterior.
*/