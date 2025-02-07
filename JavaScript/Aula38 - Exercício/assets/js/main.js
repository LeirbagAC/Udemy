const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const h1 = document.querySelector('.container');

const estilosBody = getComputedStyle(document.body); //para pegar os estilos computados no css acessados pelo browser pelo body nesse caso
const backgroundColorBody = estilosBody.backgroundColor; //rgb(10, 78, 109)

// h1.classList.add("h1"); //Teste de criação de classe no css

for ( let p of ps) {
    // console.log(p);
    p.classList.add("ps"); //esse faz a mesma coisa que os dois de baixo, pois criei um a classe no css
    
    // p.style.backgroundColor = backgroundColorBody;
    // p.style.color = 'white'
}