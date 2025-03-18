const nome = "Joõzinho";
const sobrenome = "Oliveira";
const idade = 20;

function soma(x, y) {
    return x + y;
}

//Usando o default esse é o padrão exporta por esse módulo e esó pode ser uma
export function mult(x, y) {
    return x * y;
}

//Também pode exportar dessa forma

export default class Pessoa{
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export { nome, sobrenome, idade, soma};

