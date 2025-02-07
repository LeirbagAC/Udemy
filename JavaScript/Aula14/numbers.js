//IEEE 74-2008 
let num1 = 0.7;
let num2 = 0.1;

num1 += num2 //0.8
num1 += num2 //0.9
num1 += num2 //1.00

console.log(num1);
console.log(Number.isInteger(num1));

num1 = Number(num1.toFixed(2)); // Para consertar esse "erro"

console.log(num1);
console.log(Number.isInteger(num1));
