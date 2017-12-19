const Promise = require('bluebird');

const sendCheckoutToIncentive = order => (
  new Promise((resolve, reject) => {
    const incentive = {
      userid: order.orderId,
      address: [order.cart[0].productid],
    };
    if (order) {
      resolve(inventoryStatus);
    } else {
      reject(console.log('broke'));
    }
  })
);

module.exports.sendCheckoutToIncentive = sendCheckoutToIncentive;
