const a = [10,20,30,40,50,60,70,80,90];
a.forEach((valor, indice, array) => {
    console.log(valor, indice, array);
});


const valores =  [10,20,30,40,50,60,70,80,90];
let soma = 0

valores.forEach(valor => {
    return soma += valor
});

console.log(soma);