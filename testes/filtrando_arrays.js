// Escreva uma função que recebe um número como
// parâmetro e retorna true se o número for maior 20
// e false caso contrário;


function maiorQueVinte(numero) {
    if(numero > 20 ){
        return true
    } else {
        return false
    }
}

/*
const maiorQueVinte = (numero) => {
    return numero > 20;
}
*/
const maiorQueVinte = numero => numero > 20;

const numeros = [2,6,7,10,25,17,6,18,100,20];
let filtrados = numeros.filter(n => n > 20);

/*
function temTrecho(filme){
    if(filme.titulo.includes(trecho)){
        return true;
    } else {
        return false;
    }
}

console.log(maiorQueVinte(16));

const numeros = [2,6,7,10,25,17,6,18,100,20];
let filtrados = numeros.filter(maiorQueVinte);
console.log(filtrados);

*/


