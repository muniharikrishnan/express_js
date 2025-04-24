// models/product.model.js

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter the product name'],
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
}, {
  timestamps: true,
});

const Product = mongoose.model('products', productSchema);
module.exports = Product;
