import React, { useContext, useState } from 'react';
import logo from '../../assets/Images/bakerylogo.png';
import './Header.css';
import UserForm from '../userForm/UserForm';
import Cart from "../cart/Cart";


const Header = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Bakery Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#find-store">Find Store</a>
          </li>
        </ul>
      </nav>
      <div className="icons">
        <i className="fas fa-search" title="Search"></i>

        <i className="fas fa-shopping-cart" title='search'>
            
          
          </i>
        <i className="fas fa-user" title="User"></i>
        <button onClick={openModal} className="register-button">
          Register
        </button>
      </div>

      {/* Mostrar UserForm si isModalOpen es true */}
      {isModalOpen && <UserForm onClose={closeModal} />}
      {/* ✅ Pass setShowCart to Cart */}
      
    </header>
  );
};

export default Header;