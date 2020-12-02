/*

Enunciado:
    - O aluno deverá criar um programa para informar se determinado número é primo ou não.

*/

var num = parseInt(process.argv[2]);
var cont = 0;

for(var i = 0; i <= num; i++){
    if(num % i === 0){
        cont++;
    }
}

if(cont === 2){
    console.log("O número " + num + " é primo!");
}else{
    console.log("O número " + num + " não é primo!");
}