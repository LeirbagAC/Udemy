//É possivel mudar o valor de índeces em uma array mesmo ela sendo uma constante o mesmo vale para objetos. 
const array = [1,2,3,4,5];
array.pop();
console.log(array);

array[0] = 1024;
console.log(array);

delete array[2];
console.log(array);

array[2] = 10;
console.log(array);

//Assim não pode mudar!
// array = 7;
// console.log(array);