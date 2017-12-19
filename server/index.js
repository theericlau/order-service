const express = require('express');
const { storeOrder, storeCart, generateOrders, generateCart, queryUpdateOrders } = require('../database/index');
const { sendOrderToInventory } = require('./inventoryService');
const bodyParser = require('body-parser');
const { queryGetCart } = require('../database/index');

const app = express();
let orderIdCounter = 1;

app.use(bodyParser.json());

app.get('/orders/generateorders', (req, res) => {
  generateOrders();
  res.send('Orders Generated');
});

app.get('/orders/generatecart', (req, res) => {
  generateCart();
  res.send('Cart Generated');
});


app.post('/orders/addcart', (req, res) => {
  storeCart(req.body).then((success) => {
    res.send(success);
  });
});

app.post('/orders/checkout', (req, res) => {
  res.send();
});

app.post('/orders/submitorder', (req, res) => {
  const order = req.body;
  res.status(200).send('success');
  queryGetCart(req.body.userid)
    .then((cart) => {
      order.cart = cart;
      order.id = orderIdCounter;
      orderIdCounter += 1;
      return storeOrder(order);
    })
    .then((success) => {
      const inventoryOrder = {
        orderId: order.id,
        cart: order.cart,
      };
      return sendOrderToInventory(inventoryOrder);
    })
    .then((order) => {
      queryUpdateOrders(order)
    })
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Listening to Port 8000');
});
