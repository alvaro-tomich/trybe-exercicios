const winnerCheck = (number, choice) => {
    if (number === choice){
        console.log("Parabéns, você ganhou!!")
    }else{
        console.log("Tente novamente!");
    }
} 

const prizeDraw = (number) => {
    const geraNumero = Math.round(Math.random(5) * 5);
    winnerCheck(number, geraNumero);
}

prizeDraw(1);
