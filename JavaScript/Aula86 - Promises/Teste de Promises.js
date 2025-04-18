function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
 
function calmaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        if(typeof msg !== 'string') reject(new Error('Só pode strings'))

        setTimeout(() => {
            // console.log(msg);
            resolve(msg);
        }, tempo);
    })
}

calmaAi('Minha pika 1', rand(0, 3))
.then((res) => {
    console.log(res);
    // console.log('Operação concluída 1');
    return calmaAi('Minha Pika 2', rand(0, 3));
})
.then((res) => {
    console.log(res);
    // console.log('Operação concluída 2');
    return calmaAi(/*Minha Pika*/ 3, rand(0, 3));
})
.then((res) => {
    console.log(res);
    // console.log('Operação concluída 3');
})
.catch(e => {
    console.log(e);
});