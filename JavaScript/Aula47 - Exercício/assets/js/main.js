const container = document.querySelector('.container');
const tarefaTxt = document.querySelector('#tarefas-txt');
const lista = document.querySelector('.lita-de-tarefas');


function adicionarTarefa () { 
    if (tarefaTxt.value.trim() === '') return; // Evita adicionar tarefas vazias
    
    const elementosli = [ 
        {tag: 'li', texto: tarefaTxt.value},
        {tag: 'button', texto: 'Apagar'}
    ]; 
    
    const li = document.createElement('li');
    
    for (let i = 0; i < elementosli.length; i++) { 
        let {tag, texto} = elementosli[i]; 
        let tagCriada = document.createElement(tag);
        tagCriada.innerHTML = texto;
        

        if (tag === 'button') {
            tagCriada.onclick = () => {
                lista.removeChild(li);
            };
        }
        
        li.appendChild(tagCriada);
    }
    lista.appendChild(li);
    tarefaTxt.value = '';
    tarefaTxt.focus();
}