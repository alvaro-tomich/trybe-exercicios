/* Agora você vai fazer alguns exercícios de fixação.
Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
Note que o parâmetro da função já está sendo passado na chamada da função.
Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00. */


const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

  const customerInfo = (order) => {
      let deliver = Object.values(order)[3].delivery;
      deliver = Object.values(deliver)[0];
      const client = Object.values(order)[0];
      const phone = Object.values(order)[1];
      const adress = Object.values(order)[2].street;
      const number = Object.values(order)[2].number;
      const ap = Object.values(order)[2].apartment;
      console.log(`Olá ${deliver}, entrega para: ${client}, Telefone: ${phone}, R. ${adress}, n: ${number}, AP: ${ap}`)
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    order.name = 'Luiz Silva';
    const client = Object.values(order)[0];
    const pizzas = Object.values(order)[3].pizza;
    const pizza1 = Object.keys(pizzas)[0];
    const pizza2 = Object.keys(pizzas)[1];
    const drinks = Object.values(order)[3].drinks;
    const zero = Object.values(drinks)[0].type;
    const priceZ = Object.values(drinks)[0].price;
    let priceP = Object.values(pizzas)[0].price;
    priceP = 20;
    const priceM = Object.values(pizzas)[1].price;
    console.log(`Olá ${client}, o total do seu pedido de ${pizza1}, ${pizza2} e ${zero} é R$ ${priceZ + priceP + priceM}`)
  
  }
  
  orderModifier(order);