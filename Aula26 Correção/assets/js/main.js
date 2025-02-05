//Captura de envento de submit do fomulário
const form = document.querySelector("#formulario");

form.addEventListener('submit', e => {
    e.preventDefault();
    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if(!peso){
        setResultado("Peso inválido!", false);
        return;
    } 

    if(!altura){
        setResultado("Altura inválido!", false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é de ${imc} (${nivelImc})`
    setResultado(msg, true);
});

function getNivelImc(imc){
    const nivel = ['Abaixo do peso' ,'Peso normal', 'Sobrepeso', 'Obesidade gau 1', 'Obesidade gau 2', 'Obesidade gau 3'];

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criarP() {
    const p = document.createElement('p');
    return p;
}

//Coloca um HTML dentro dessa div
function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';

    const p = criarP();

    if(isValid) {
        p.classList.add("paragrafo-resultado");
    } else {
        p.classList.add("bad");
    }

    p.innerHTML= msg;
    //p.classList.add("paragrafo-resultado"); //Cria uma class para esse paragrafo
    resultado.appendChild(p); //Adiciona o elemento p no resultado

}