const winnerCheck = (number, choice) => {
    if (number === choice){
        console.log("Parabéns, você ganhou!!")
    }else{
        console.log("Tente novamente!");
    }
} 

const prizeDraw = (number) => {
    const geraNumero = Math.floor((Math.random() * 5) + 1);
    winnerCheck(number, geraNumero);
}

prizeDraw(1);
