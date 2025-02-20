import React, { useEffect, useState, useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductDisplay from "../productsDisplay/ProductDisplay"; // Importa ProductDisplay
import "./FeaturedTreats.css";
import { CartContext } from "../context/CartContext"; // Importa CartContext

const FeaturedTreats = ({ setShowCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado
  const { addToCart } = useContext(CartContext); // Usa el contexto del carrito

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowCart(true);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product); // Establece el producto seleccionado
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null); // Cierra el producto seleccionado
  };

  return (
    <section className="featured-section">
      <h2 className="featured-title">Top Products</h2>
      <div className="featured-grid">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewDetails} // Pasa la función para ver detalles
          />
        ))}
      </div>
      {selectedProduct && (
        <div className="product-display-overlay">
          <ProductDisplay product={selectedProduct} onClose={handleCloseDetails} />
        </div>
      )}
    </section>
  );
};

export default FeaturedTreats;