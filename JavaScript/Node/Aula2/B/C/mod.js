//Um modulo que faz apenas uma coisa como uma functino por exemplo
// module.exports = function(x, y) {
//     return x * y;
// };

module.exports = class Cachorro{
    constructor(nome) {
        this.nome = nome;
    };

    latir() {
        console.log(`${this.nome} fala: Au au`);
    }
}