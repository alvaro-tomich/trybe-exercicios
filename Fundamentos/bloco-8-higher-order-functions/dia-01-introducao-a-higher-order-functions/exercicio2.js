const winnerCheck = (number, choice) => {
    if (number === choice){
        console.log("Parabéns, você ganhou!!")
    }else{
        console.log("Tente novamente!");
    }
} 

const prizeDraw = (number, action) => {
    const geraNumero = Math.floor((Math.random() * 5) + 1);
    action(geraNumero, number);
}

prizeDraw(1, winnerCheck);
