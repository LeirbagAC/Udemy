function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min ) + min)
}

function esperAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD Value');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperAi('Frase 1', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperAi('Frase 2',  rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperAi('Frase 3',  rand(1, 3)); //Pode testar o reject com o 222 no lugar de 'Frase 3'
})
.then(resposta => {
    console.log(resposta);
})
.catch(e => {
    console.log('ERRO: ', e);
});

console.log('Isso vai aparecer primeiro!');