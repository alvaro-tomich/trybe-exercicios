// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const createId = (nomeCompleto) => {
    const treatment = nomeCompleto.split(' ').join('');
    const object = {name: '', email: '',};
    object.email = `${treatment.toLowerCase()}@trybe.com;`
    object.name = nomeCompleto;
    return object;
};

const newEmployees = (action) => {
  const employees = {
    id1: action('Pedro Guerra'),
    id2: action('Luiza Drumond'),
    id3: action('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(createId));