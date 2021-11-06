/*Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .*/



const num1= 6;
const num2= 4;
const num3= 3;
let num4;
let num5;
let num6;

if ( num1 > 0 && num2 > 0 && num3 > 0){
    num4= num1 % 2;
    num5= num2 % 2;
    num6= num3 % 2;

}

console.log( num4 != 0 || num5 != 0 || num6 != 0)