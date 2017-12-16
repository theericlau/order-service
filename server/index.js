const express = require('express');
const faker = require('faker');
const { storeOrder, generateOrders } = require('../database/index');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/orders', (req, res) => {
  console.log('hello');
  generateOrders();
  res.send('hello sexy jun');
});

app.post('/orders/addcart', (req, res) => {
  console.log(req);
  res.send();
});

app.post('/orders/checkout', (req, res) => {
  res.send();
});

app.post('/orders/submitorder', (req, res) => {
  console.log(req.body);
  res.send();
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Listening to Port 8000');
});
