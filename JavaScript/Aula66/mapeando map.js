// const numeros = [5, 50, 8, 1, 2, 3, 4, 76, 98, 15, 22, 27];
// const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

// const numeros = [5, 50, 8, 1, 2, 3, 4, 76, 98, 15, 22, 27];
// const numerosEmDobro = numeros.map((valor, indice, array) => console.log(valor, indice, array));
// console.log(numerosEmDobro);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduarda', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const apenasNome = pessoas.map(obj => obj.nome);
const idade = pessoas.map(obj => ({idade: obj.idade }));//removel o nome e deixou somente o obj idade
console.log(idade);
console.log(apenasNome);
console.log(pessoas);