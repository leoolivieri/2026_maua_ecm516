//TOP - DOWN//

// Declaração de variáveis e constantes 1.1

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

// -------------------------------------------------------------

//1.2 Tipos

//Primitivos 
//boolean
// null
// number
// string
// undefined


// Objetos: Array
// Classes Wrapper (String, Number, Boolean)
// Date
// Math
// Funções

//-----------------------------------------------------------

//1.3 Coerção de tipos

// Coerção de tipos é o processo pelo qual o JavaScript converte um valor de um tipo para outro tipo. Isso pode acontecer de forma implícita ou explícita.

// Coerção implícita
// O JavaScript tenta converter os tipos automaticamente quando necessário. Por exemplo:

// const n1 = 2;
// const n2 ='3';

// const n3 = n1 + n2;
// console.log(n3); // Saída: '23' (n1 é convertido para string e concatenado com n2)

// // Coerção explícita
// // Você pode usar funções para converter tipos de forma explícita. Por exemplo:

// const n4 = Number(n2); // Converte n2 para número
// const n5 = n1 + n4;
// console.log(n5); // Saída: 5 (n2 é convertido para número e somado a n1)

// // Coerção de tipos pode levar a resultados inesperados, por isso é importante entender como o JavaScript lida com isso. Por exemplo:
// console.log(true + true); // Saída: 2 (true é convertido para 1)
// console.log(true + false); // Saída: 1 (true é convertido para 1)
// console.log(false + false); // Saída: 0 (false é convertido para 0)

// //----------------------------------------------------------------

// // 1.4 Comparação

// // O JavaScript tem dois tipos de comparação: comparação de igualdade (==) e comparação de identidade (===).

// // Comparação de igualdade (==)
// // O operador == compara os valores, mas não os tipos. Ele tenta converter os tipos antes de comparar. A comparação leva em conta somente os valores envolvidos. Isso quer
// // dizer que, caso sejam de tipos diferentes, ocorrerão coerções implícitas, as
// // quais nem sempre têm o funcionamento mais intuitivo. Por exemplo:

// console.log(5 == '5'); // Saída: true (o string '5' é convertido para o número 5)
// console.log(0 == false); // Saída: true (o boolean false é convertido para o número 0)
// console.log('' == 0); // Saída: true (o string vazio é convertido para o número 0)

// // Comparação de identidade (===)
// // O operador === compara tanto os valores quanto os tipos. Ele não realiza conversão de tipos. A comparação leva em conta tanto os valores envolvidos quanto seus tipos. Caso sejam de tipos diferentes, a comparação retornará false, mesmo que os valores sejam equivalentes. Por exemplo:

// console.log(5 === '5'); // Saída: false (os tipos são diferentes)
// console.log(0 === false); // Saída: false (os tipos são diferentes)
// console.log('' === 0); // Saída: false (os tipos são diferentes)

// //---------------------------------------------------------------

// 1.5 Vetores

// Vetores, ou arrays, são estruturas de dados que armazenam uma coleção de elementos. Em JavaScript, os arrays são objetos que podem conter elementos de qualquer tipo, incluindo outros arrays.

//declaração
// v1 = []; // array vazio
//podemos acessar qualquer posição começando de zero
// v1[0] = 10; // atribuindo valor à posição 0
// v1[1] = 20; // atribuindo valor à posição 1
// v1[2] = 30; // atribuindo valor à posição 2
// v1[3] = 'abc'; // atribuindo string à posição 3
// console.log(v1); // Saída: [10, 20, 30, 'abc']
// console.log(v1.length);

// //  inicializando na declaração

// v2 = [1, 2, 3, 4, 5];
// console.log(v2); // Saída: [1, 2, 3, 4, 5]

//iterando
// for(let i = 0; i < v2.length; i++){
//     console.log(v2[i]);
// }

// Em JS os vetores possuem diversos módulos utilitários, como push, pop, shift, unshift, slice, splice, entre outros. Por exemplo:

// v2.push(6); // Adiciona o elemento 6 ao final do array
// console.log(v2); // Saída: [1, 2, 3, 4, 5, 6]

// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex",
// "Cristina"];
// const apenasComA = nomes.filter((n) => n.startsWith("A"));
// console.log(apenasComA);

// const res = nomes.map((nome) => nome.charAt(0));
// console.log(res)

// const todosComecamComA = nomes.every((n) =>
// n.startsWith("A"));
// console.log(todosComecamComA);

const valores = [1, 2, 3, 4];
const soma = valores.reduce((ac, v) => ac + v); // O método reduce() executa uma função de redução em cada elemento do array, resultando em um único valor. No exemplo acima, a função de redução é uma função de soma que acumula os valores do array. O resultado final é a soma de todos os elementos do array, que é 10.
console.log(soma)

//--------------------------------------------------------------