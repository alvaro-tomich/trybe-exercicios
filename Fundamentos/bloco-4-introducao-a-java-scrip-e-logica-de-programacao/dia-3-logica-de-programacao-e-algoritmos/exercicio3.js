// Agora inverta o lado do triângulo.
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.


for(let i = 1; i <= n; i += 1){
    let aux = "";

    for(let j = n; j > i; j-=1){
        aux +=" ";
    }
    for(let k = 1; k <= i; k+=1){
        aux +="*";
    }
    console.log(aux);
}