// function getDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto;

//     switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         return diaSemanaTexto;
//     case 1:
//         diaSemanaTexto = 'Segunda';
//         return diaSemanaTexto;
//     case 2:
//         diaSemanaTexto = 'Terça';
//         return diaSemanaTexto;
//     case 3:
//         diaSemanaTexto = 'Quarta';
//         return diaSemanaTexto;
//     case 4:
//         diaSemanaTexto = 'Quinta';
//         return diaSemanaTexto;
//     case 5:
//         diaSemanaTexto = 'Sexta';
//         return diaSemanaTexto;
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         return diaSemanaTexto;
//     default:
//         return diaSemanaTexto = '';
//     }
// }

// const data = new Date();
// let diaSemana = data.getDay();
// const mes = data.getMonth() + 1;
// let diaSemanaTexto = getDiaSemanaTexto(diaSemana)

// console.log(diaSemana, diaSemanaTexto);

// switch (diaSemana) {
//     case 0:
//         diaSemana = 'Domingo';
//         break;
//     case 1:
//         diaSemana = 'Segunda';
//         break;
//     case 2:
//         diaSemana = 'Terça';
//         break;
//     case 3:
//         diaSemana = 'Quarta';
//         break;
//     case 4:
//         diaSemana = 'Quinta';
//         break;
//     case 5:
//         diaSemana = 'Sexta';
//         break;
//     case 6:
//         diaSemana = 'Segunda';
//         break;
// }

let punhetasBatidas;
let ePunheteiro;
switch(punhetasBatidas) {
    case 1:
        ePunheteiro = 'Não é punheteiro'
        break;
    case 2:
        ePunheteiro = 'Não é punheteiro'
        break;
    case 3:
        ePunheteiro = 'É punheteiro'
        break;
    case 4:
        ePunheteiro = 'É punheteiro'
        break;
    default:
        ePunheteiro = 'Só Deus sabe'
}
console.log(ePunheteiro);