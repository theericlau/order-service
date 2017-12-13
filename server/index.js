const express = require('express');
const faker = require('faker');
const { storeOrder, generateOrders } = require('../database/index.js');

const app = express();
app.get('/', () => {
  // for (let i = 0; i < 200; i++) {
    generateOrders();
  // };
});

app.listen(8000, () => {
  console.log('Listening to Port 8000');
});
