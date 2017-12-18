const express = require('express');
const { storeOrder, storeCart, generateOrders, generateCart } = require('../database/index');
const bodyParser = require('body-parser');
const { queryGetCart } = require('../database/index');

const app = express();

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
  storeCart(req.body).then(success => {
    res.send();
  });
});

app.post('/orders/checkout', (req, res) => {
  res.send();
});

app.post('/orders/submitorder', (req, res) => {
  // console.log(req.body.userid);
  queryGetCart(req.body.userid)
  .then(success => {
    console.log('im back', success);
  })
  // storeOrder(req.body)
  // .then(success => {
  //   res.send()
  // })
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Listening to Port 8000');
});
