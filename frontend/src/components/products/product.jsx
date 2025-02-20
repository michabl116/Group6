import { useNavigate } from "react-router-dom"; 
import { useContext } from "react"; 
import { CartContext } from "../context/CartContext.jsx"; 
import "./Product.css";
import applePie from "../../assets/Images/applepie.png";
import applePie1 from "../../assets/Images/applepie1.png";
import baket from "../../assets/Images/baket.png";
import bread1 from "../../assets/Images/bread 1.png"; 
import bread2 from "../../assets/Images/bread2.png";
import bread3 from "../../assets/Images/bread3.png";

// Simula los datos de productos
const products = [
  { id: 1, name: "Apple Pie", price: 15, image: applePie },
  { id: 2, name: "Apple Pie Special", price: 20, image: applePie1 },
  { id: 3, name: "Baguette", price: 20, image: baket },
  { id: 4, name: "Whole Grain Bread", price: 20, image: bread1 },
  { id: 5, name: "Soft Bread", price: 30, image: bread2 },
  { id: 6, name: "Crunchy Bread", price: 10, image: bread3 },
];

const Product = () => {
  // Simula la navegación y el contexto (pone en pausa las funcionalidades reales)
  const navigate = () => {
    console.log("Navegación detenida");
  };

  const addToCart = (product) => {
    console.log(`Producto añadido al carrito: ${product.name}`);
  };

  return (
    <div className="product-page">
      <h2>Top Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <button className="info-icon" onClick={() => navigate(`/product/${product.id}`)}>
              i
            </button>
            <h3>{product.name}</h3>
            <p>€ {product.price}</p>

            {/* Botón "Add to Cart" solo imprime un mensaje en consola */}
            <button className="add-to-cart" onClick={() => { 
              addToCart(product);  
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
