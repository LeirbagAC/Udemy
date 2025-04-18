const fruta = ['Maçã', 'Pêra', 'Uva', 'Goiaba'];

for (let i = 0; i < fruta.length; i++) {
    console.log(`Índice ${i}`, fruta[i]);
}
console.log(fruta.length);

for(let j of fruta) {
    console.log(j);
}

const pessoa = { nome: "Gabriel", idade: 25, cidade: "São Paulo" };
for (const chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
