import React from 'react';

function InstructionsRouteRegulations({ service }) {
  const instructions = {
    'From Outside to E Gates': {
      instructions: 'Detailed instructions for getting from outside to the gates.',
      route: 'Route map showing the accessible path.',
      rules: 'Rules and regulations for using the wheelchair assistance service.',
    },
    'From E Gates to Baggage Claim': {
      instructions: 'Instructions for getting from E-gate to baggage claim only.',
      route: 'Route map showing the accessible path to baggage claim.',
      rules: 'Rules and regulations specific to this service.',
    },
    'From E Gates to Connection Flights': {
      instructions: 'Instructions for getting from E-gate to connection flights.',
      route: 'Route map showing the accessible path to connection gates.',
      rules: 'Rules and regulations for transferring to connecting flights.',
    },
  };

  const currentContent = instructions[service] || {};

  return (
    <div>
      <h2>Instructions, Route & Rules/Regulations</h2>
      <h3>Instructions</h3>
      <p>{currentContent.instructions}</p>
      <h3>Route</h3>
      <img src="path/to/your/route_map_{service}.png" alt="Route Map" /> {/* Replace with service-specific image paths */}
      <h3>Rules & Regulations</h3>
      <p>{currentContent.rules}</p>
    </div>
  );
}

export default InstructionsRouteRegulations;
