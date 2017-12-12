const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

const orderSchema = mongoose.Schema({
  orderId: Number,
  date: Date,
  shippingAddress: String,
  items: [{ productID: Number, quantity: Number }],
  shippingOption: String,
  totalPrice: Number,
  payment: Object,
  status: Boolean,
});

const Order = mongoose.model('Order', orderSchema);

const saveOrder = (data) => {
  const order = new Order({
    orderId: data.orderId,
    date: data.date,
    shippingAddress: data.shippingAddress,
    items: data.orders,
    shippingOption: data.shippingOption,
    totalPrice: data.totalPrice,
    payment: data.payment,
    status: data.status,
  });
  order.save((err, data) => {
    if (err) {
      console.log('i errored');
    } else {
      console.log('success', data);
    }
  });
  // console.log('im the order', order);
  // new Order(data).save((err, order) => {
  //   if (err) {
  //     console.log('i errored');
  //   } else {
  //     console.log('success', order);
  //   }
  // });
};

// new Order({
//     orderId: data.orderId,
//     // date: data.date,
//     shippingAddress: data.shippingAddress,
// }).save

module.exports.saveOrder = saveOrder;
