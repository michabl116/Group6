import React from "react";
import "./ProductCard.css";
import defaultImage from "../../assets/images/treat2.jpg"; // Imagen por defecto

const ProductCard = ({ product, onAddToCart, onViewDetails, imageBasePath = "../../assets/images/" }) => {
  const { _id, name, price, image } = product;

  const imageUrl = image
    ? (image.startsWith("http") ? image : `${imageBasePath}${image}`)
    : defaultImage;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">€{price}</p>
        <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
        <button className="view-details-button" onClick={() => onViewDetails(product)}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;