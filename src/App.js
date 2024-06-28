import React from 'react';
import './App.css'; // Import your CSS file
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import ServiceSelection from './components/ServiceSelection';
import ServiceSelection from './component/ServiceSelection';
import HomePage from './component/HomePage';
import DomesticFromLobby from './component/DomesticFromLobby';
import DomesticFromGates from './component/DomesticFromGates';
import Agate from './component/Gates/Agate';
import InternationalServices from './component/InternationalServices';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Page */}
          <Route path="/lobby" element={<DomesticFromLobby/>} /> {/* Home Page */}
          <Route path="/gates" element={<DomesticFromGates/>} /> {/* Home Page */}
          <Route path="/out2E" element={<InternationalServices/>} /> {/* Home Page */}
          <Route path="/EtoC" element={<DomesticFromGates/>} /> {/* Home Page */}
          <Route path="/EtoB" element={<DomesticFromGates/>} /> {/* Home Page */}
          <Route path="/Agate" element={<Agate/>} /> {/* Home Page */}
          <Route
            path="/services"
            element={<ServiceSelection />} // Service Selection Page
          /> {/* New Route for Services */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
