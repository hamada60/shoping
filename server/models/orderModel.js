const mongoose = require('mongoose');

const orderSchema = require('../schema/orderSchema.js');

const Order = mongoose.model('order', orderSchema);

module.exports = Order;