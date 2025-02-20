import "./PromoSection.css"; // ✅ Import CSS


const PromoSection = () => {
  return (
    <div className="promo-section">
      <div className="promo-content">
        <h2>20% Off Your First Order</h2>
        <p>Enjoy the warmth of freshly baked goods! 
            Get 20% off your first order and experience the taste
             of handcrafted delights made with love and the finest 
             ingredients. Don’t miss out—treat yourself today!</p>
        <button className="promo-btn">Learn More</button>
      </div>
    </div>
  );
};

export default PromoSection;