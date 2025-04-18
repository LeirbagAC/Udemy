const a1= [1, 2, 3];
const a2 = [4, 5, 6];

// const a3 = a1.concat(a2);

const a3 = [...a1, ...a2] //Maneira mais simples de concatenar arrays

// const a3 = [...a1, 'Luiz',  ...a2, ...[7, 8, 9]];//Pode também acrescentar elementos na array dessa forma e caso adicione um a array usa-se 0 ... para pegar os valores e não a array literal

console.log(a3); 