let alunos = ["Eduardo","Luiz", "Maria"];
console.log(alunos);

let removidos = delete alunos[0];

console.log(removidos);
console.log(alunos);

console.log(alunos.slice(1, 3));
//Para saber se é um array
console.log(alunos instanceof Array);

/*alunos.push("Juan")
console.log(alunos);

alunos.push("Gabriel");
alunos.push("Manu");
console.log(alunos);


let removidos = alunos.pop();
console.log(removidos);

delete alunos[2];
console.log(alunos);

alunos.push("Gabriel");
console.log(alunos);

alunos.unshift("Raul");
console.log(alunos);

alunos.pop();
console.log(alunos);

alunos.shift();
console.log(alunos);*/