// 4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;

for(let i = 1; i <= n; i += 2){

    let aux = "";

    for(let j = n; j > i; j-=2){
        aux += " ";
    }
    for(let k = 0; k < i; k+=1){
        aux +="*";
    }
    console.log(aux);
}