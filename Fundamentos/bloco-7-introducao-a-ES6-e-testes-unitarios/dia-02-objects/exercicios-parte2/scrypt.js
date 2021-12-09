/* Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
Crie uma função para mostrar o tamanho de um objeto.
Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte: */

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

  const addElement = (obj, key, value) => {
      obj[key] = value;
  }

  const listKeys = (obj) => {
      const keys = Object.keys(obj);
      return keys;
  }

  const objLength = (obj) => {
      const length = Object.entries(obj).length;
      return length;
  }

  const listValues = (obj) => {
       const values = Object.values(obj);
       return values;
  }

  console.log(allLessons);

