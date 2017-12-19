const Promise = require('bluebird');

const sendOrderToInventory = order => (
  new Promise((resolve, reject) => {
    const inventoryStatus = {
      orderid: order.orderId,
      status: {
        success: order.cart,
        fail: order.cart[0],
      },
    };
    if (order) {
      resolve(inventoryStatus);
    } else {
      reject(console.log('broke'));
    }
  })
);

module.exports.sendOrderToInventory = sendOrderToInventory;
