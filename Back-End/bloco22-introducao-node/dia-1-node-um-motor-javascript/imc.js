function calculaImc (peso, altura) {

  const alturaEmM = altura/100;
  const alturaAoQuadrado = alturaEmM*alturaEmM;

  const imc = (peso/alturaAoQuadrado).toFixed(2);

  return imc;
}

console.log(`O IMC é: ${calculaImc(peso, alturaEmCm)}`);
