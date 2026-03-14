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

// const valores = [1, 2, 3, 4];
// const soma = valores.reduce((ac, v) => ac + v); // O método reduce() executa uma função de redução em cada elemento do array, resultando em um único valor. No exemplo acima, a função de redução é uma função de soma que acumula os valores do array. O resultado final é a soma de todos os elementos do array, que é 10.
// console.log(soma)

//--------------------------------------------------------------

// 1.6 Funções

// Funções são blocos de código reutilizáveis que realizam uma tarefa específica. Em JavaScript, as funções podem ser declaradas de várias maneiras, incluindo declarações de função, expressões de função e funções arrow.

// Declaração de função

// function hello(){
//     console.log("Hello, world!");
// }
// hello(); // Saída: Hello, world! e redefinimos a função sem parâmetros, o que é permitido em JavaScript. A função hello() pode ser chamada sem argumentos, e ela simplesmente imprime "Hello, world!" no console.

// function hello(name){
//     console.log('Hello, ' + name)
// }

// hello('Leonardo');

// function soma(a,b){
//     return a + b;
// }

// //Tambémépossível criar funçõesanônimas. Umavezcriadas, elas podem ser
// atribuídas a variáveis ou constantes, como no Bloco de Código

// const dobro = function(n){
//     return n * 2;
// }
// const res = dobro(4);
// console.log(res);

// // valor padrão para parâmetros

// const triplo = function( n = 5){
//     return n * 3;
// }
// console.log(triplo()); // Saída: 15 (usa o valor padrão de n)
// console.log(triplo(4)); // Saída: 12 (usa o valor fornecido de n)

// Arrow function

//Regras: quando a função tem apenas um parâmetro, os parênteses podem ser omitidos. Se a função tem mais de um parâmetro, os parênteses são obrigatórios. Se a função tem um corpo de expressão única, as chaves e a palavra-chave return podem ser omitidas. Se a função tem um corpo de múltiplas expressões, as chaves são obrigatórias e a palavra-chave return deve ser usada para retornar um valor.Quando o corpo possui uma única instrução que produz um valor a ser
// devolvido, a instrução return é opcional: Se usar as chaves, deve-se usar o
// return. Caso contrário, ele não pode ser usado.

// ----------------------------------------------------------------------

//1.7 Closures

//Primeiro, em Javascript, funcões são cidadãs de primeira
// classe. Informalmente, um cidadão de primeira classe em uma linguagem de
// programação é uma entidade que oferece suporte a operações como as seguintes.
// Ser passada como argumento para uma função.
// Ser devolvida por uma função.
// Ser atribuída a uma variável

// Função de alta ordem é uma função que pode receber outra função como argumento ou retornar uma função como resultado.

/*Uma função pode ser atribuída a uma variável */

// let umaFuncao = function (){
//     console.log('Fui armazenada em uma variável');
// }

// e pode ser chamada usando essa variável
// umaFuncao(); // Saída: Fui armazenada em uma variável

/* f recebe uma função como parâmetro e, por isso é uma função de alta ordem. Por devolver uma função, g também é de alta ordem*/

//  function f(funcao){
// //     //chamando a função
// //     //tipagem dinâmica: funcao pode ser qualquer coisa, mas se for uma função, ela será chamada
//   funcao();
//  }

// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g');
//     }
//     return outraFuncao;
// }
// // f pode ser chamada assim 
// f (function(){
//     console.log('Estou sendo processada')
// })

// //e g pode ser chamada assim
// const gResult = g()
// // e assim tbm
// g()()
// // outros testes
// /* f chama g, que somente devolve uma função, mas nada é exibido*/
// f(g)
// //f chama a função devolvida por g - "Fui criada por g"
// f(g())
// /*f tenta chamar o que a função criada por g
// devolve. Ela não devolve coisa alguma.Por isso,
// um erro -somente em tempo de execução-acontece. */
// f(g()())// TypeError: funcao is not a function

// f(1) // TypeError: funcao is not a function

/* Uma função, quando definida por outra, é chamada função interna e tem dois
escopos: o escopo interno e o escopo externo. Seu escopo interno é delimitado
pelas chaves que de nem seu corpo. Seu escopo externo é delimitado pelas chaves
que de nem ocorpo da função que a de ne. Seu escopo externo é também chamado
de escopo léxico. Uma função interna pode acessar as variáveis de nidas em seu
escopo externo*/

//function f (){
    // let nome = ' João'
    // function g (){
    //     console.log('Olá, ' + nome)
    // }
    // g();// Saída: Olá, João
//}
//f()// Saída: Olá, João

/* A função g é uma função interna de f e tem acesso à variável nome, que está no escopo externo de g. Quando f é chamada, ela define a variável nome e depois chama g, que imprime "Olá, João" no console. Isso demonstra o conceito de closure, onde a função interna (g) tem acesso às variáveis do escopo externo (f) mesmo após a execução de f ter terminado. */

/*Os exemplos exibidos abaixo funcionam, muito embora as
funções ola e saudacoesFactory já tenham terminado a sua execução no momento
em que as funções que produzem são chamadas, o que sugere que suas variáveis
locais já não estão acessíveis.*/

// function ola(){
//     let nome = ' João'
//     return function(){
//         console.log('Olá, João');
//     }
// }

// let olaResult = ola();
// /*perceba que aqui a função ola já terminou.
// É de se esperar que a variável nome já não
// possa ser acessada.*/
// olaResult(); // Saída: Olá, João

// // também vale com parâmetros 
// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(saudacao + ', ' + nome);
//     }
// }

// let saudacao1 = saudacoesFactory('Olá', 'Maria');
// let saudacao2 = saudacoesFactory('tchau', 'Pedro');

// saudacao1(); // Saída: Olá, Maria
// saudacao2(); // Saída: tchau, Pedro

// O exemplo abaixo mostra que as funções internas têm acesso às variáveis do escopo externo, mesmo que o escopo externo tenha sido modificado após a criação das funções internas. Isso ocorre porque as funções internas mantêm uma referência ao escopo externo, permitindo que acessem as variáveis mesmo após a execução do escopo externo ter terminado.

/*Uma função interna em conjunto com as variáveis de seu escopo ex
terno é o que chamamos de closure*/

// ALguns casos contra - intuitivos de closures

function eAgora(){
    let cont = 1;
    function f1 (){
     console.log (cont);
    }
    cont++;
    function f2 (){
     console.log (cont);
    }
    //JSON contendo as duas funções
    return {f1, f2}
}
let eAgoraResult = eAgora();
/* neste momento, a funcao eAgora já
executou por completo e a variável
cont já foi incrementada. Seu valor final
é mantido e, assim, ambas f1 e f2 exibirão 2.
*/
eAgoraResult.f1(); // Saída: 2
eAgoraResult.f2(); // Saída: 2

// O exemplo abaixo mostra que as funções internas têm acesso às variáveis do escopo externo, mesmo que o escopo externo tenha sido modificado após a criação das funções internas. Isso ocorre porque as funções internas mantêm uma referência ao escopo externo, permitindo que acessem as variáveis mesmo após a execução do escopo externo ter terminado.

// 2.0 JSON - Javascript Object Notation - é um formato de dados leve e fácil de ler, usado para armazenar e transportar dados. Ele é baseado em uma sintaxe de objetos JavaScript, mas é independente de linguagem, o que significa que pode ser usado em várias linguagens de programação. No exemplo acima, um objeto JSON é criado contendo as funções f1 e f2, permitindo que elas sejam acessadas externamente mesmo após a execução da função eAgora ter terminado.

//JSON: JavaScript Object Notation
//Uma pessoa que se chama João e tem 17 anos
//Uma pessoa se chama Maria, tem 21 anos e mora na Rua B, número 50
// {} objeto js

let pessoa = {
    nome: 'João',
    idade: 17,
}
console.log("Me chamo " + pessoa.nome);
console.log("Tenho " + pessoa["idade"] + " anos")

const pessoa2 = {
    nome: 'Maria',
    idade: 21,
    endereco: {//
        logradouro: 'Rua B',
        numero: 50,
    },
}
console.log(pessoa2.endereco.logradouro)
console.log(pessoa2['endereco']['numero'])
console.log(pessoa2.endereco['logradouro'])
console.log(pessoa2['endereco'].numero)
console.log(pessoa2)
console.log(pessoa2.endereco)
