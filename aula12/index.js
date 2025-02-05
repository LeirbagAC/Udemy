let VarA = 'A';
let VarB = 'B';
let VarC = 'C';

let valorA = VarA;

VarA = VarB;
VarB = VarC;
VarC = valorA;

console.log(VarA, VarB, VarC);

