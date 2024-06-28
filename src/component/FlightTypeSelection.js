import React from 'react';

function FlightTypeSelection({ onFlightTypeChange }) {
  return (
    <div className="flight-type-selection">
      <button value="international" onClick={onFlightTypeChange}>International Flight</button>
      <button value="domestic" onClick={onFlightTypeChange}>Domestic Flight</button>
    </div>
  );
}

export default FlightTypeSelection;
