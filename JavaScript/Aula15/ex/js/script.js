let numero = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)} <br></p>`;
texto.innerHTML += `<p>${numero} é Inteiro: ${Number.isInteger(numero)} <br></p>`
texto.innerHTML +=`<p>É NaN: ${Number.isNaN(numero)} <br></p>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)} <br></p>`
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)} <br></p>`
texto.innerHTML += `<p>Duas casa decimais: ${numero.toFixed(2)} <br></p>`