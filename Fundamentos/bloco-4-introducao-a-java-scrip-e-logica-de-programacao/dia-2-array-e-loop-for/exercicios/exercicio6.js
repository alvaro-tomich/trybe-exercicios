//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0;

/* Utilizando for:
for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 != 0){
        contador = contador + 1;
    }
}*/

if (numbers[0] % 2 != 0){
    contador = contador + 1;
}
if (numbers[1] % 2 != 0){
    contador = contador + 1;
}
if (numbers[2] % 2 != 0){
    contador = contador + 1;
}
if (numbers[3] % 2 != 0){
    contador = contador + 1;
}
if (numbers[4] % 2 != 0){
    contador = contador + 1;
}
if (numbers[5] % 2 != 0){
    contador = contador + 1;
}
if (numbers[6] % 2 != 0){
    contador = contador + 1;
}
if (numbers[7] % 2 != 0){
    contador = contador + 1;
}
if (numbers[8] % 2 != 0){
    contador = contador + 1;
}
if (numbers[9] % 2 != 0){
    contador = contador + 1;
}
if (contador == 0){
    console.log ("Nenhum valor ímpar encontrado")
}
else{
    console.log ("Numero de valores ímpares encontrados: " + contador)

}
