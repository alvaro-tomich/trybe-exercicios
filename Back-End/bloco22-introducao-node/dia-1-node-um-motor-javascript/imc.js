const readline = require('readline-sync');

const alturaEmCm = readline.question('Qual sua altura em cm?')
const peso = readline.questionFloat('Qual seu peso?')

function calculaImc (peso, altura) {

  const alturaEmM = altura/100;
  const alturaAoQuadrado = alturaEmM*alturaEmM;

  const imc = (peso/alturaAoQuadrado).toFixed(2);

  return imc;
}

console.log(`O IMC é: ${calculaImc(peso, alturaEmCm)}`);
