import { useState } from "react";
import logo from "/src/assets/images/Picture1.png";
import "./Header.css";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Bakery Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>

          <li
            className="dropdown"
            onClick={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="#menu">Menu</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="#catering">Catering</a></li>
                <li><a href="#custom-cakes">Custom Cakes</a></li>
                <li><a href="#delivery">Delivery</a></li>
              </ul>
            )}
            </li>
          
          {/* Dropdown */}
          <li 
            className="dropdown"
            onClick={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="#services">Services</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="#catering">Catering</a></li>
                <li><a href="#custom-cakes">Custom Cakes</a></li>
                <li><a href="#delivery">Delivery</a></li>
              </ul>
            )}
          </li>

          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#find-store">Find Store</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
