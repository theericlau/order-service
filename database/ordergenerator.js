const faker = require('faker');
const { db } = require('./index.js');
const { getRandomShippingByDay } = require('./generateShipping');
const { getRandomStatus } = require('./generateOrderStatus');

const orderGenerator = (query, client) => {
  const arr = [];
  const days = ['Monday','Tuesday', 'Wednesday','Thursday','Friday', 'Saturday', 'Sunday'];
  const cards = ['VISA', 'MasterCard', 'Amex', 'Diners', 'Discover', 'EnRoute', 'JCB', 'Voyager'];
  const status = ['Success', 'Fail'];
  for (let i = 0; i < 2; i++) {
    const order = {
      date: days[Math.floor(Math.random() * days.length)],
      // shippingaddress: faker.address.streetAddress(),
      // products: [{ productid: faker.random.number(), quantity: faker.random.number() }, { productid: faker.random.number(), quantity: faker.random.number() }],
      shippingoption: '',
      // totalprice: Math.random() * 1000,
      payment: {
        // name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        // cardnumber: faker.random.number(),
        // cardtype: cards[Math.floor(Math.random() * cards.length)],
      },
      status: getRandomStatus(),
    };
    order.shippingoption = getRandomShippingByDay(order.date);
    console.log(order);
    arr.push({ query, params: order });
  }
  // console.log('im the client', arr);
  // client.batch(arr, { prepare: true }).then((success) => {
  // });
};


//From the day `

module.exports.orderGenerator = orderGenerator;
