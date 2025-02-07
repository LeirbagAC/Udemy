function recursiva(max){
    if(max >= 10) return
    max++;
    recursiva(max);
    console.log(max);
}
recursiva(6);

// function fatorial(n) {
//     if(n < 0) return 'Não existe fatorial de número negativo'

//     if(n === 0  || n ===1) {
//         return 1;
//     }

//     return n * fatorial(n - 1)
// }

// console.log(fatorial());