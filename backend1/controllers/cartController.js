const CartItem = require("../models/cartModel");

// Obtener los ítems del carrito
const getCartItems = async (req, res) => {
  try {
    const cart = await CartItem.find(); // Obtiene todos los elementos del carrito
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving cart items" });
  }
};

// Agregar un ítem al carrito
const addCartItem = async (req, res) => {
  const { id, name, price, image } = req.body;
  if (!id || !name || !price || !image) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    let item = await CartItem.findOne({ id });

    if (item) {
      item.quantity += 1;
      await item.save();
    } else {
      item = new CartItem({ id, name, price, image, quantity: 1 });
      await item.save();
    }

    res.json(await CartItem.find()); // Devuelve el carrito actualizado
  } catch (error) {
    res.status(500).json({ error: "Error adding item to cart" });
  }
};

module.exports = { getCartItems, addCartItem };
