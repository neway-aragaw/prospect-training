import React from 'react'; // Added import for clarity

function ServiceInstructions({ gate, service, domesticGate }) {
  const instructions = {
    // ... existing international instructions (replace with your actual instructions)
    domestic: {
      fromGate: {
        A: {
          toBaggageClaim: 'Instructions to Baggage Claim from Gate A',
          toConnectionA: '', // No connection to same gate
          toConnectionB: 'Instructions to Gate B from Gate A',
          toConnectionC: 'Instructions to Gate C from Gate A',
        },
        B: {
          toBaggageClaim: 'Instructions to Baggage Claim from Gate B',
          toConnectionA: 'Instructions to Gate A from Gate B',
          toConnectionB: '', // No connection to same gate
          toConnectionC: 'Instructions to Gate C from Gate B',
        },
        C: {
          toBaggageClaim: 'Instructions to Baggage Claim from Gate C',
          toConnectionA: 'Instructions to Gate A from Gate C',
          toConnectionB: 'Instructions to Gate B from Gate C',
          toConnectionC: '', // No connection to same gate
        },
      },
    },
  };

  // Combine instructions based on service and domestic gate
  const currentInstructions = (service === 'domestic' && domesticGate) ? instructions[service]['fromGate'][domesticGate] : instructions[service] || {};

  return (
    <div className="gate-service-instructions">
      <h2>Service Instructions (Gate {gate})</h2>
      {service === 'domestic' && domesticGate && (
        <>
          <h3>To Baggage Claim</h3>
          <p>{currentInstructions.toBaggageClaim}</p>
          <h3>To Other Gates</h3>
          <div>
            <button value="toConnectionA" disabled={domesticGate === 'A'}>
              To Gate A
            </button>
            <button value="toConnectionB" disabled={domesticGate === 'B'}>
              To Gate B
            </button>
            <button value="toConnectionC" disabled={domesticGate === 'C'}>
              To Gate C
            </button>
          </div>
        </>
      )}
      {service !== 'domestic' && (
        <>
          <h3>Instructions</h3>
          <p>{currentInstructions}</p>
        </>
      )}
    </div>
  );
}

export default ServiceInstructions;
