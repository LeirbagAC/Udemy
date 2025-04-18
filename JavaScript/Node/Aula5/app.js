// const fs = require('fs').promises;
// const path = require('path');
// const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');
// // const caminhoArquivo = path.resolve(__dirname, '..', 'teste2.js');

// fs.writeFile(caminhoArquivo, 'Frase 1;', {flag: 'w'});


const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     {nome: "Gabriel"},
//     {nome: "Lucas"},
//     {nome: "Eduardo"},
//     {nome: "Kitty"},
// ];

// const json = JSON.stringify(pessoas, '', 2); //para converter em json
// escreve(caminhoArquivo, json);

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    return renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados); //converte JSON em string
    dados.forEach(val => {
        console.log(val);
    });
}
lerArquivo(caminhoArquivo);