// function soma(x, y){
//     console.log(x + y)
//     return x + y
// }
// soma(1,2);
// console.log(soma(1,2));

const raiz = function (n){
    return Math.sqrt(n)
};
console.log(raiz(25));
console.log(raiz(121));
console.log(raiz(81));

console.log('******');

//Outra forma de escrever usando uma arrow function

const raiz_2 = n => Math.sqrt(n);
console.log(raiz_2(25));
console.log(raiz_2(121));
console.log(raiz_2(81));
