
let player1 = "papel";
let player2 = "papel"

if (player1 === "tesoura" && player2 === "papel"){
    console.log("Player1 Won")
}else if (player1 === "papel" && player2 === "pedra"){
    console.log("Player1 Won")
}else if (player1 === "pedra" && player2 === "tesoura"){
    console.log("Player1 Won")
}else if (player1 === player2){
    console.log("Empate");
}else if (player2 === "tesoura" && player1 === "papel"){
    console.log("Player2 Won")
}else if (player2 === "pedra" && player1 === "tesoura"){
    console.log("Player2 Won")
}else if (player2 === "papel" && player1 === "pedra"){
    console.log("Player2 Won")
}