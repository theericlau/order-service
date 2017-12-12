const express = require('express');
const app = express();
const Orders = require('../database/Order.js');
const db = require('../database/index.js');
const faker = require('faker');


app.get('/', () => {
  const apple = {
    orderId: faker.random.number(),
    date: faker.date.past(),
    shippingAddress: faker.address.streetAddress(),
    items: [{ productID: faker.random.number(), quantity: faker.random.number() }, { productID: faker.random.number(), quantity: faker.random.number() }],
    shippingOption: 'Prime',
    totalPrice: faker.commerce.price(),
    payment: {
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
      cardNumber: faker.random.number(),
      cardType: 'VISA',
    },
    status: 'Pending',
  };
  console.log(apple);
  // Orders.saveOrder(apple);
});

app.listen(8000, () => {
  console.log('Listening to Port 8000');
});
