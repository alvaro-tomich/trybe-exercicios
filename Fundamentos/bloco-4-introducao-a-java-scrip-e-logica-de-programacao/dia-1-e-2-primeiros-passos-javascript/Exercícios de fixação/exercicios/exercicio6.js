/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/

let peca = "REI";

switch (peca.toLowerCase()) {
    case "peão":
        console.log ("Movimenta uma ou duas casas na para cima, somente para cima");
        break;
    
    case "torre":
        console.log ("Movimento para todas direções exceto diagonais, em quantas casas quiser");
        break;

    case "rainha":
        console.log ("Movimenta para todas direções, em quantas casas quiser");
        break;

    case "bispo":
        console.log ("Movimenta nas diagonais, em quantas casas quiser");
        break;
    
    case "cavalo":
        console.log ("Faz movimentos em L, apenas um movimento");
        break;

    case "rei":
        console.log ("Movimenta para todas as direções, apenas um movimento");
        break;
}