function Ola() {
    console.log('Ola');
}

function Ola2(nome) {
    console.log(`Ola, ${nome}`);
}

let ola3 = nome => {console.log(`Ola, ${nome}`)};

const ola4 = (nome, idade) => {console.log(`Ola, eu sou ${nome} e tenho ${idade}`)};

Ola();
Ola2('Gabriel');
ola3('Albuquerque');
// ola4('Oliver', 18);
console.log('Teste de  controle de verção');

