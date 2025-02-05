function enviar(){
    const pessoas = [];

    const nome = document.querySelector("input.nome");
    const sobrenome = document.querySelector("input.sobrenome");
    const peso = document.querySelector("input.peso");
    const altura = document.querySelector("input.altura");
    const resul = document.querySelector("div.resul");

    pessoas.push({
        nome: nome.value, 
        sobrenome: sobrenome.value, 
        peso: peso.value, 
        altura: altura.value
    });

    resul.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
}