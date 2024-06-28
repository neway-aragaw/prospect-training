import React from 'react';
import { Link } from 'react-router-dom';

function DomesticFlight() {
  return (
    <div className="domestic-flight">
      <h2>Domestic Flights</h2>
      <p>Please select your starting point:</p>
      <div className="button-container">
        <Link to="/domestic/from-lobby">
          <button className="service-button">From the Lobby</button>
        </Link>
        <Link to="/domestic/from-gates">
          <button className="service-button">From Gates</button>
        </Link>
      </div>
    </div>
  );
}

export default DomesticFlight;
