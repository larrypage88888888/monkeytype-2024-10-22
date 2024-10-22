import React from 'react';
import { FaKeyboard, FaStar, FaInfoCircle, FaCog, FaBell, FaUser } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <FaKeyboard />
        <span>monkeytype</span>
      </div>
      <nav>
        <button><FaStar /></button>
        <button><FaInfoCircle /></button>
        <button><FaCog /></button>
        <button><FaBell /></button>
        <button><FaUser /></button>
      </nav>
    </header>
  );
}

export default Header;