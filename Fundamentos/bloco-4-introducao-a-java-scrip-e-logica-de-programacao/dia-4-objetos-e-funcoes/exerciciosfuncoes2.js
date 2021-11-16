function mostRepeated(numbers){
    let aux = 0;
    for (let i = 0; i < numbers.length; i += 1){
        let num = numbers[i];
        for(let j = 0; j < numbers.length; j += 1){
            if(num === numbers[j]){
                aux += 1;
            }
        }

    }
    return aux;
}
  
  console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3]));