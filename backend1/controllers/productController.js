const Product = require('../models/Product');

// Crear un nuevo producto
const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, imageUrl, ingredients, rating, reviews, category, weight } = req.body;
    const newProduct = new Product({ name, description, price, stock, imageUrl, ingredients, rating, reviews, category, weight });
    await newProduct.save();
    res.status(201).json({ message: 'Producto creado exitosamente', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear producto', error });
  }
};

// Obtener todos los productos
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error });
  }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener producto', error });
  }
};

// Actualizar un producto
const updateProduct = async (req, res) => {
  try {
    const { name, description, price, stock, imageUrl, ingredients, rating, reviews, category, weight } = req.body;
    const product = await Product.findByIdAndUpdate(req.params.id, { name, description, price, stock, imageUrl, ingredients, rating, reviews, category, weight }, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json({ message: 'Producto actualizado exitosamente', product });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar producto', error });
  }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar producto', error });
  }
};

module.exports = { createProduct, getProducts, getProductById, updateProduct, deleteProduct };