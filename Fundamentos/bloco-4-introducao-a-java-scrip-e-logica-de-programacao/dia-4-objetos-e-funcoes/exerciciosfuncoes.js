// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

/*function palindrome(word){
    if (word == word.split('').reverse().join('')){
        return true;
    }else{
        return false;
    }
};

console.log(palindrome("ana"))*/

/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor:

function higherNumber(numbers){
    let aux = 0;
    let number = 0;

    for(let i = 0; i <= numbers.length; i += 1){
        if(aux < numbers[i]){
            aux = numbers[i];
            number = i;
        }; 
    };
    return number;
}

console.log(higherNumber([2, 4, 6, 7, 10, -3]));*/

/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function lowerNumber(numbers){
    let number = numbers[0];

    for(let i = 0; i <= numbers.length; i += 1){
        if(number > numbers[i]){
            number = i;
        }; 
    };
    return number;
}

console.log(lowerNumber([2, 4, 6, 7, 10, 0, -3]))*/

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function moreCharacters(words){
    let arr = [];

    for (let i = 0; i < words.length; i += 1){
        arr.push(words[i].length);
    };
    let aux = 0;
    let maiorIndice = 0;
    for (let j = 0; j < arr.length; j += 1){
        if (aux < arr[j]){
            aux = arr[j];
            maiorIndice = j;
        }

    }
    return words[maiorIndice];

}

console.log(moreCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


