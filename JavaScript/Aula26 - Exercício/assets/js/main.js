function meuEscopo(){
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resul");

    const imc =  [];

    function receberEventoForm(evento){
        evento.preventDefault();

        let peso = document.querySelector("#input_peso"); 
        let altura = document.querySelector("#input_altura");

        imc.push({
            peso: peso.value,
            altura: altura.value,
        })

        let calcIMC = peso.value / (altura.value ** 2);

        function resultadoImc(){
            if(calcIMC < 18.5){
                return 'Abaixo do peso'
            } else if(calcIMC >= 18.5 && calcIMC <=24.9){
                return "Peso normal";
            } else if(calcIMC >= 25 && calcIMC <= 29.9){
                return "Sobrepeso";
            } else if(calcIMC >= 30 && calcIMC <= 34.9){
                return 'Obesidade gau 1';
            } else if(calcIMC >= 35 && calcIMC <= 39.9){
                return "obesidade grau 2";
            } else if(calcIMC > 40){
                return 'Obesidade grau 3';
            }
        }

        resultado.innerHTML = `Seu IMC é de ${calcIMC.toFixed(2)} (${resultadoImc()})`
    }

    form.addEventListener("submit", receberEventoForm);

} 
meuEscopo();