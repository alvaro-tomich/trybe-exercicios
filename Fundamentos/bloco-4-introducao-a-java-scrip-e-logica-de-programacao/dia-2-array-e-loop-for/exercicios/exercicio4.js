//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

/* Utilizando for:
for(let index = 0; index < numbers.length; index += 1){
    soma = soma + numbers[index];
}*/

soma = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9]; 
media = soma / numbers.length;

if(media > 20){
    console.log("valor maior que 20");

}
else{
    console.log("valor menor ou igual a 20");
}