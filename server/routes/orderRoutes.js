const express = require('express');
const Order = require('../models/orderModel');
const router = express.Router();

router.get('/api/orders', async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
})

router.post('/api/order', async (req, res) => {
    const order = await new Order(req.body).save();
    res.send(order);
})

router.delete('/api/order/:id', async (req, res) => {
    const deleteOrder = await Order.findByIdAndDelete(req.params.id);
    res.send(deleteOrder);
})

module.exports = router;

