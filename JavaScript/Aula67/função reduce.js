const numeros = [50, 2, 3, 1, 22, 67, 10, 11, 90, 3, 8, 80];
const total = numeros.reduce((acumulador, valor, indice) => {
    acumulador += valor;
    console.log(acumulador, valor, indice);
    return acumulador;
}, 0);
console.log(total);

// const pessoas = [
//     {nome: 'Luiz', idade: 62},
//     {nome: 'Maria', idade: 23},
//     {nome: 'Eduarda', idade: 55},
//     {nome: 'Letícia', idade: 82},
//     {nome: 'Rosana', idade: 32},
//     {nome: 'Wallace', idade: 47},
// ];

// const maisVelha = pessoas.reduce((acumulador, valor) => {
//     if(acumulador.idade > valor.idade) return acumulador;
//     return valor;
// });
// console.log(maisVelha);
