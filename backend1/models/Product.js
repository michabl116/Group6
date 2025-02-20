const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  imageUrl: { type: String },
  ingredients: {type: String},
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  category: {type: String},
  weight: {type: Number, required: true}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;