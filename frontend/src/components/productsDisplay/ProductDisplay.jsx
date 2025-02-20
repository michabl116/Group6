import React from "react";
import "./ProductDisplay.css";

const ProductDisplay = ({ product, onClose }) => {
  if (!product) {
    return null; // No renderizar nada si product es undefined
  }

  const { name, description, price, image, ingredients, rating, reviews } = product;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <>
        {"⭐".repeat(fullStars)}
        {halfStar ? "✨" : ""}
      </>
    );
  };

  return (
    <div className="product-display-container">
      <div className="product-display">
        <button className="close-button" onClick={onClose}>x</button>
        <div className="image-section">
          <img src={image} alt={name} />
        </div>
        <div className="details-section">
          <h2>{name}</h2>
          <div className="ratings">
            {renderStars(rating)}
            <span> ({reviews} reviews)</span>
          </div>
          <p className="price">€{price}</p>
          <p>{description}</p>
          <p>{ingredients}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;