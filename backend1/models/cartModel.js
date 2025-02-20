const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, default: 1 },
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = CartItem;
