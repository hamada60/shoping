// import mongoose from 'mongoose';
const  mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    title: String,
    price: Number,
    size: [String],
    description: String,
    imgURL: String
})

module.exports = productSchema