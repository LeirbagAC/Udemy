const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of numeros) {
    
    if (i === 2) {
        console.log('Dois foi pulado');
        continue;
    }

    if (i === 5) {
        console.log('Cinco foi pulado');
        continue;
    }

    console.log(i); //tem que ser colocado antes do break e depois do continue para dar certo 
    
    if (i === 7) {
        break;
    }
}