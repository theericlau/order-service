const { generateRandomProductList } = require('./generateProductList');

let counter = 0;
const cartGenerator = (query, client) => {
  const arr = [];
  for (let i = 0; i < 100; i++){
    const cart = {
      cart: generateRandomProductList(),
    };
    arr.push({ query, params: cart });
  }
  client.batch(arr, { prepare: true }).then(success => {
    counter += 100;
    if (counter < 1000000) {
      cartGenerator(query, client);
    }
    console.log(counter);
  })
};

module.exports.cartGenerator = cartGenerator;
