falarOi();

function falarOi() {
    console.log('Oi');
}

//Fisrt-class objects
const souUmDado = function () {
    console.log('Sou um dado');
};

const souUmDado2 = () => {
    console.log('Sou um dado 2');
};

function executaFuncao (funcao) {
    funcao();
    souUmDado2();
}
const teste = function() { //Se você coloca um function dentro de uma variável o nome da function se torna a varíavel
    console.log('OK')
}

executaFuncao(souUmDado);
teste();