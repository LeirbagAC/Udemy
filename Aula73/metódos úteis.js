const produto = {nome: 'Produto', preco: 1.8};
// const caneca = {
//     ...produto, 
//     material: 'Porcelana'

// }; //Spread para copiar o valor e não aponta para o mesmo lugar.

//                    FAZ A MESMA COISA QUE SPREAD
// Object.freeze(caneca);
const caneca = Object.assign({}, produto, {material: 'Porcelana'});
caneca.nome = 'Caneca'
caneca.preco = 2.5
console.log(produto);
console.log(caneca);

Object.defineProperty(produto, 'nome', {
    writable: 0
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); //Para mostrar as propriedades
console.log(Object.values(caneca));
console.log(Object.entries(caneca));