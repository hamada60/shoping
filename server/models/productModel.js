// import mongoose from 'mongoose'; 
const  mongoose = require('mongoose');
// import productSchema from '../schema/productSchema.js';
const productSchema = require('../schema/productSchema.js')


const product = mongoose.model('product', productSchema);

module.exports = product