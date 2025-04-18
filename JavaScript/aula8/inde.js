const nome = 'Gabriel';
const sobrenome = ' Albuquerque Cabral';
const peso = 61;
const idade = 20;
const altura = 1.63;

let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade;

console.log(`O imc de ${nome + sobrenome} é de ${imc.toFixed(2)} e ele nasceu em ${anoNascimento}`);