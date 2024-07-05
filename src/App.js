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
import Login from './component/Login';
import InternationalServices from './component/InternationalServices';
import '@fortawesome/fontawesome-free/css/all.css'
import Directory from './component/Directory';
import Header from './component/Header';
 import Footer from './component/Footer'
import Tutorial from './component/tutorial/Tutorial';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lobby" element={<DomesticFromLobby />} />
          <Route path="/gates" element={<DomesticFromGates />} />
          <Route path="/out2E" element={<InternationalServices />} />
          <Route path="/EtoC" element={<DomesticFromGates />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/EtoB" element={<DomesticFromGates />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/services" element={<ServiceSelection />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
