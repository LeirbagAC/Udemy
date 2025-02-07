const nomes = [ 'Maria', 'João', 'Gabriel', 'Davi'];

//nome.splice(índice, delete, elemen1, elemen2, elemen3);

nomes.splice(2, 1, 'OK');// Para adicinar um valor enquanto tira outro do mesmo índice

nomes.splice(0, 0, 'OK 2.0');//Para simular um unshif

nomes.splice(nomes.length, 0, 'OK 3.0');//Para simular um push


console.log(nomes);
