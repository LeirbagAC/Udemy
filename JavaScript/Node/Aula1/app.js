// const mod1 = require('./mod1');
// console.log(mod1.falaNome());

//Também pode ser assim
// const mod1 = require('./mod1').falaNome();
// console.log(mod1);

//Ou assim
// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome();
// console.log(falaNome);

//Assim também
// const {NOME, sobrenome, falaNome} = require('./mod1'); //'NOME', pois foi assim que exportei
// console.log(NOME, sobrenome);
// console.log(falaNome());

// const {Pessoa} = require('./mod1');
// const p = new Pessoa('Gabriel');
// console.log(p);

const path = require('path');
const axios = require('axios');
