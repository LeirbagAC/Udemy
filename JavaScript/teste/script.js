function começar() {
    let soma = document.querySelector("div.soma");
    let menos = document.querySelector("div.menos");
    let vezes = document.querySelector("div.vezes");
    let divicao = document.querySelector("div.divicao");
    let num = Number(prompt("Digite um número: "));
    
    let somaResul = "";
    let menosResul = "";
    let vezesResul = "";
    let divicaoResul = "";

    soma.innerHTML = "<strong>SOMA</strong>";
    menos.innerHTML = "<strong>SUBTRAÇÃO</strong>";
    vezes.innerHTML = "<strong>MULTIPLICAÇÃO</strong>";
    divicao.innerHTML = "<strong>DIVISÃO</strong>";

    function adicao(){
        for(let i = 1; i <= 10; i++){
            somaResul += `<p>${num} + ${i} = ${num + i} </p>`;
        }
    }

    function sub(){
        for(let i = 1; i <= 10; i++){
            menosResul += `<p>${num} - ${i} = ${num - i} </p>`;
        }
    }

    function multi(){
        for(let i = 1; i <= 10; i++){
            vezesResul += `<p>${num} x ${i} = ${num * i} </p>`;
         }
    }

    function divi(){
        for(let i = 1; i <= 10; i++){
            divicaoResul += `<p>${num} / ${i} = ${(num / i).toFixed(2)} </p>`;
         }
    }
    adicao();
    sub();
    multi();
    divi();

    soma.innerHTML += somaResul
    menos.innerHTML += menosResul
    vezes.innerHTML += vezesResul
    divicao.innerHTML += divicaoResul

}