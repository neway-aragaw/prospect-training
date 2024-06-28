import React from 'react';
import { Link } from 'react-router-dom';
function DomesticFromLobby() {
  return (
    <div className="domestic-from-lobby">
      <h2>Domestic Flights - From the Lobby</h2>
      <p>
        {/* Replace with instructions for starting from the lobby */}
        Here are the instructions for starting your domestic flight journey from the lobby.
      </p>
      <nav className="navigation">
        <Link to="/">
          <button className="home-button">Home Page</button>
        </Link>
      </nav>
    </div>
  );
}

export default DomesticFromLobby;