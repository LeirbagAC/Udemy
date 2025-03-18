// import { nome , sobrenome, idade, soma, Pessoa } from './modulo1';

// // const nome = 'João';

// // function soma(x, y) {
// //     return x * y;
// // }

// console.log(nome);
// console.log(sobrenome);
// console.log(idade);
// console.log(soma(5, 5));

// const p = new Pessoa('Luíz', 'Otávio')
// console.log(p);

//Para explortar tudo do arquivo modulo1
// import * as MeuModulo from './modulo1';
// console.log(MeuModulo);

// import qualquerCoisa from './modulo1';
// console.log(qualquerCoisa(5, 10));

import Pessoa, { nome, sobrenome } from './modulo1'
const p = new Pessoa(nome, sobrenome);
console.log(p);