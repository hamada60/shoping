// import express from 'express';
const express = require('express');
// import product from './models/productModel.js';
const product = require('../models/productModel');
const router = express.Router();

router.get('/api/products', async (req, res) => {
    const products = await product.find();
    res.send(products);
})

router.post('/api/products', async (req, res) => {
    const newProduct = new product(req.body);
    const saveProduct = await newProduct.save();
    res.send(saveProduct);
})

router.delete('/api/products/:id', async (req, res) => {
    const deleteProduct = await product.findByIdAndDelete(req.params.id);
    res.send(deleteProduct);
})

module.exports = router;