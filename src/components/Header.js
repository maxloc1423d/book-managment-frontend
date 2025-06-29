import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-title">📚 Book Inventory</div>
      <nav className="nav-buttons">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/search" className="nav-button">Search Book</Link>
        <Link to="/add" className="nav-button">Add Book</Link>
        <Link to="/about" className="nav-button">About Us</Link>
      </nav>
    </header>
  );
}

export default Header;