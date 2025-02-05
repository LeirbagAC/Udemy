function max(x, y) {
    return x > y? x: y; 
}
console.log(max(10,7));

function maiorMenor(valor1, valor2) {
    if (valor1 > valor2) {
        console.log(`${valor1} é maior que ${valor2}`);
    } else {
        console.log(`${valor2} é maior que ${valor1}`);
    }

}
maiorMenor(3, 9);