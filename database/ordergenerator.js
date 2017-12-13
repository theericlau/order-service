const faker = require('faker');
const { db } = require('./index.js');

const orderGenerator = (query, client) => {
  const arr = [];
  for (let i = 0; i < 161; i++) {
    const order = {
      date: faker.date.past(),
      shippingaddress: faker.address.streetAddress(),
      products: [{ productid: faker.random.number(), quantity: faker.random.number() }, { productid: faker.random.number(), quantity: faker.random.number() }],
      shippingoption: 'Prime',
      totalprice: Math.random() * 1000,
      payment: {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        cardnumber: faker.random.number(),
        cardtype: 'VISA',
      },
      status: 'Pending',
    };
    arr.push({ query, params: order });
  }
  console.log('im the client', arr);
  client.batch(arr, { prepare: true }).then((success) => {
    console.log('im the success', success);
  });
};

module.exports.orderGenerator = orderGenerator;
