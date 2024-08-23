// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/images/image.webp'; // Adjust the path if needed

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Concrete Mixer Truck Logo" />
      </div>
      <nav className="navbar">
        <Link to="/">Dashboard</Link>
        <Link to="/billing">Billing</Link>
        <Link to="/dc">DC</Link>
        <Link to="/customer-po">Customer & PO</Link>
        <Link to="/sales">Sales</Link>
        {/* Add more links as needed */}
      </nav>
      <div className="support">
        <span>(24X7 Support)</span>
      </div>
    </header>
  );
};

export default Header;
