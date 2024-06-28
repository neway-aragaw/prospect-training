import React from 'react';

function GateSelection({ onGateChange }) {
  return (
    <div className="gate-selection">
      <h2>Select Gate</h2>
      <button value="A" onClick={onGateChange}>Gate A</button>
      <button value="B" onClick={onGateChange}>Gate B</button>
      <button value="C" onClick={onGateChange}>Gate C</button>
    </div>
  );
}

export default GateSelection;
