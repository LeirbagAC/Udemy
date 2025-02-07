function meuEscopo(){
    const form = document.querySelector(".form");
    const resul = document.querySelector("div.resul");
    
    const pessoas = [];

    // form.onsubmit = function (evento){
    //     evento.preventDefault();
    //     console.log("Foi enviado");
    // }; Primeira forma de previnir um evento!

    function receberEventoForm(evento){ //Segunda forma!
        evento.preventDefault();

        const nome = form.querySelector("input.nome");
        const sobrenome = form.querySelector("input.sobrenome");
        const peso = form.querySelector("input.peso");
        const altura = form.querySelector("input.altura");

        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura: altura.value
        });

        resul.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener("submit", receberEventoForm)


} meuEscopo();