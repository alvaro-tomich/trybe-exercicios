// 4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let n1 = n;

for(let i = 1; i <= n; i +=2){
    let aux = "";
    n1 -= 2
    for(let k = 1; k <= n1; k +=2){
        aux += " ";
    }
    for(let j = 1; j <= i; j += 1){
        aux += "*";
    }
    console.log(aux);
}