import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function ServiceSelection() {
  return (
    <div className="service-selection">
      <header className="header">
        <img
          src="https://www.prospectair.com/wp-content/uploads/2021/01/Prospect-55-generic-header.jpg"
          alt="Company Logo"
          className="logo"
        /> {/* Replace with your logo URL */}
        <h2 className="welcome-text">Welcome to BWI Wheelchair Assistant Service Guide Page</h2>
      </header>
      <main className="content">
        <div className="service-buttons">
 
          <section className="domestic-buttons">
            <h1>From the gates</h1>
            <div className="button-container">
              <Link to="/Agate">
                <button className="service-button">A to baggage</button>
              </Link>
              <Link to="/gates">
                <button className="service-button">A to B gate</button>
              </Link>
              <Link to="/lobby">
                <button className="service-button">A to C gate</button>
              </Link>
              <Link to="/gates">
                <button className="service-button">B to baggage</button>
              </Link>
              <Link to="/lobby">
                <button className="service-button">B to A</button>
              </Link>
              <Link to="/gates">
                <button className="service-button">B to C</button>
              </Link>
              <Link to="/gates">
                <button className="service-button">C to baggage</button>
              </Link>
              <Link to="/lobby">
                <button className="service-button">C to A</button>
              </Link>
              <Link to="/gates">
                <button className="service-button">C to B</button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <nav className="navigation">
        <Link to="/">
          <button className="home-button">Home Page</button>
        </Link>
      </nav>
    </div>
  );
}

export default ServiceSelection;
