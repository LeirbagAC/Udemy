function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        value: estoque, //Define o valor e poder ser qualquer coisa até função
        writable: true, //Pode modificar o valor
        configurable: 0 //configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: 0    
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: true, 
            configurable: 0  
        },
    });
}
const p1 = new Produto('Gabriel', 20, 3);
console.log(p1);
// p1.estoque = 100
// console.log(p1);
// delete p1.estoque;
// console.log(p1);
//                   Para mostrar as chaves
// console.log(Object.keys(p1));
// for(let chave in p1) {
//     console.log(chave);
// }