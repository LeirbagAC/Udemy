const elementos = [ 
    {tag: 'p', texto: 'Qualquer coisa.'},
    {tag: 'div', texto: 'Frase 2.'},
    {tag: 'section', texto: 'Frase 3.'},
    {tag: 'footer', texto: 'Frase 4.'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');
const h1 = container.querySelector('h1'); //Isso é apenas um exmplo de como manipular o DOM com javascript mudando o h1 para vermelho
h1.style.backgroundColor = 'red';

for (let i = 0; i < elementos.length; i++) { 
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);


