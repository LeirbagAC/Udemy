// function animal(tipo, nome, som) {
//     return {
//         tipo,
//         nome,
//         som,

        
//     };
// }

// const pessoa = {
//     nome: 'João',
//     dizerNome() {
//         console.log(`Meu nome é ${this.nome}`);
//     }
// };

// pessoa.dizerNome(); // Saída: Meu nome é João


const pessoa = {
    nome: 'João',
    dizerNome: () => {
        console.log(`Meu nome é ${this.nome}`);
    }
};

pessoa.dizerNome(); // Saída: Meu nome é undefined

// O motivo é que a arrow function não tem seu próprio `this`, pega o `this` do contexto de escopo mais externo, 
// que, neste caso, é o contexto global (onde `this.nome` não existe).