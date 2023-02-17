const orderData = {
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
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

console.log(Object.keys(orderData.order.pizza));

const customerInfo = (orderData) => {
  return `Olá ${orderData.order.delivery.deliveryPerson}, entrega para: ${orderData.name}, Telefone: ${orderData.phoneNumber}, R. ${orderData.address.street}, Nº: ${orderData.address.number}, AP: ${orderData.address.apartment}`
};

customerInfo(orderData);

const orderModifier = (orderData) => {
  orderData.name = 'Luiz Silva';
  orderData.payment.total = 50;
  return `Olá ${orderData.name}, o total do seu pedido de ${Object.keys(orderData.order.pizza)[0]}, ${Object.keys(orderData.order.pizza)[1]} e ${orderData.order.drinks.coke.type} é R$ ${orderData.payment.total},00.`
};

;
console.log(orderModifier(orderData));
