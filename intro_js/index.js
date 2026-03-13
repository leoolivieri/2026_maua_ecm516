// Declaração de variáveis e constantes
// JavaScript é dinamicamente tipado, o que significa que você não precisa declarar o tipo de uma variável. Você pode usar "var", "let" ou "const" para declarar variáveis.
// Isso quer dizer que
// o tipo das expressões é conhecido em tempo de compilação, o que permite que
// o compilador desempenhe diferentes tipos de validações.

// Declarando constantes
//const nome = 'José';
//const idade = 30;
//aspas simples e duplas tem o mesmo efeito, mas é recomendado usar aspas simples para strings e aspas duplas para HTML.

// Declarando variáveis
// let a = 2;
// let b = 3;
// Variáveis declaradas com "var" têm escopo de função, enquanto "let" e "const" têm escopo de bloco. É recomendado usar "let" e "const" para evitar problemas de escopo.

//var: seu escopo é a função em que foi declarada ou global se for declarada fora de uma função. Variáveis declaradas com var podem ser redeclaradas e atualizadas.
// var x = 10;
// var x = 20;

// var linguagem = 'JavaScript';
// console.log(linguagem); // Saída: JavaScript
// // Linguagem é redeclarada, mas isso não causa um erro, o valor é atualizado para 'JavaScript'.

// // escopo não restrito ao bloco

// var idade = 18;
// //exibe undefined. Ou seja, a variável já existe aqui, só
// //não teve valor atribuído.
// //Ela é içada- do inglês hoist- para fora do bloco if
// console.log(`Oi, ${nome}`);
// if (idade >= 18) {
//   var nome = "João";
//   console.log(`Parabéns, ${nome}. Você pode dirigir`);
// }
// //ainda existe aqui
// console.log(`Até mais, ${nome}.`);

