import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Homepage from './HomePage'; // Import the Homepage component
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img 
              src="https://nexus-now.com/wp-content/uploads/2020/08/nexus_logo_adjusted.png"
              alt="Company Logo"
              className="logo-img"
            />
          </Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {showMenu ? (
            <div className="close-icon">X</div>
          ) : (
            <>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
            </>
          )}
        </div>
        {showMenu && (
          <div className="dropdown-content" ref={menuRef}>
            <Link to="/about">About</Link>
            <Link to="/login">Start training</Link>
            <Link to="/directory">Quick Directory</Link>
            <Link to="/d">D</Link>
            <Link to="/e">E</Link>
          </div>
        )}
      </header>
      <Homepage showMenu={showMenu} /> {/* Pass the showMenu state to Homepage */}
    </>
  );
}

export default Header;
