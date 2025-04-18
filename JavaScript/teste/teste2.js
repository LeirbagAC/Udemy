const linhas = 5;

for(let i = 1; i <= linhas; i++)  { 
    let linha = '';

    for(let j = 0; j < i; j++) {
        linha += '*'
    };
    console.log(linha);
};


