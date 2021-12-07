   const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
}; 

/* console.log(customer1);
customer1.lastName = 'Faria';
console.log(customer1); */

/* const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2); */

/* let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer); */

//para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

/* function addElement(obj, key, value){
    obj[key] = value;
    return obj;
}

addElement(customer, 'lastName', 'Ferreira'); */

/* const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };

  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const skillsList = (student) => {
      let list = Object.keys(student);
      for(let index in list){
          console.log(`${list[index]}, Nível: ${student[list[index]]}`);
      }
  }

  console.log('Student1');
  skillsList(student1);

  console.log('Student2');
  skillsList(student2); */

  const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };