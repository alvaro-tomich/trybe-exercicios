const nota = "80";

if (nota >= 80 && nota <= 100){
    console.log ("Você foi aprovado!")
}
else if ( nota <=80 && nota >=60){
    console.log ("Você está na lista de espera!")
}
else if (nota <= 59){
    console.log ("Você foi reprovado!")
}
else{
    console.log ("Valor de nota icompativel, tente um número entre 0 e 100")
}