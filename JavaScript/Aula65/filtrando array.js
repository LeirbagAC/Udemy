const numeros = [50, 2, 3, 1, 22, 67, 10, 11, 90, 3, 8, 80];

//                 Primeiro jeito de filtrar
function callBackFilter(valor) {
    return valor > 10
};

// Segundo jeito é mais prático usando uma função anônima
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

//Filtrar pessoa com nomes >= que 5 letras
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduarda', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoaComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const idadeMaiorQue50 = pessoas.filter(obj => obj.idade > 50
)
console.log(pessoaComNomeGrande);
console.log(idadeMaiorQue50);