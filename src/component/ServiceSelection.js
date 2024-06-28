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
          <section className="international-buttons">
            <h2>International Flights</h2>
            <div className="button-container">
              <Link to="/out2E">
                <button className="service-button">From othside to E Gates</button>
              </Link>
              <Link to="/EtoB">
                <button className="service-button">E Gates to Baggage</button>
              </Link>
              <Link to="/EtoC">
                <button className="service-button">E Gates to Connection</button>
              </Link>
            </div>
          </section>
          <section className="domestic-buttons">
            <h2>Domestic Flights</h2>
            <div className="button-container">
              <Link to="/lobby">
                <button className="service-button">From the Lobby</button>
              </Link>
              <Link to="/gates">
                <button className="service-button">From Gates</button>
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
