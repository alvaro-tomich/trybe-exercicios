// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:


let n = 5;

for(let i = 1; i <= n; i += 1){
    let aux = "";
    for(let i = 1; i <= n; i+=1 ){
        aux += "*";
    }
    console.log(aux);
    aux = "";
}


