//... rest, ...spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000 ,9000];
const [um, dois, tres, ...resto] = numeros;
// const [um, , tres, , cinco, , sete] = numeros;
// console.log(um, tres, cinco, sete);
// console.log(resto);
// console.log(numeros);
// console.log(resto);

//                  0         1         2
//               0  1  2    0  1  2    0  1  2
const numero = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numero;
console.log(lista2[1]);

//Maneira conplicada de fazer a atribuição por destruturação.
const [, , [, oito]] = numero;
console.log(oito);