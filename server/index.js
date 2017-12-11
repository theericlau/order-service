const express = require('express');
const app = express();
const Orders = require('../database/Order.js');
const db = require('../database/index.js');


app.get('/', () => {
  const apple = {
    orderId: 1,
    date: new Date(),
    shippingAddress: 'chicken pmpmp',
    orders: [{ productID: 1, quantity: 8 }],
    shippingOption: 'Prime',
    totalPrice: 8,
    payment: { cardNumber: 1234131344 },
    status: 'Pending',
  };
  Orders.saveOrder(apple);
});

app.listen(8000, () => {
  console.log('Listening to Port 8000');
});
