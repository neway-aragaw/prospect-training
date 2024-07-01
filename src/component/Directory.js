import React, { useState } from 'react';

import './Directory.css'; // Import the CSS file
import rentalCarImage from './../img/rental-p.jpg'
import dailyImage from '../img/long-term.png'
import { Link } from 'react-router-dom';
function Directory() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showContent, setShowContent] = useState(false);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedOption(''); // Reset the selected option when the category changes
    setShowContent(false); // Hide content when category changes
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleShowButtonClick = () => {
    setShowContent(true);
  };

  return (
    <div className="directory-container">
      <header className="directory-header">
        <h1>Welcome New Trainees!</h1>
        <p>This directory is designed to help you navigate the airport and find key resources during your training.</p>
      </header>

      <section className="search-container">
        <select className="search-dropdown" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Search By...</option>
          <option value="shuttle">Shuttle</option>
          <option value="food">Food</option>
          <option value="office">Office Name</option>
        </select>

        {selectedCategory === 'shuttle' && (
          <select className="search-dropdown" value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select Shuttle Type...</option>
            <option value="rental-car">Rental Car</option>
            <option value="daily">Daily</option>
            <option value="longTermA">Long Term A</option>
            <option value="longTermB">Long Term B</option>
            <option value="amtrakMARC">Amtrak/MARC</option>
            <option value="taxi">Taxi</option>
            <option value="uber">Uber</option>
            <option value="lyft">Lyft</option>
          </select>
        )}

        {selectedCategory === 'food' && (
          <select className="search-dropdown" value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select Food Option...</option>
            <option value="starbucks">Starbucks</option>
            <option value="chipotle">Chipotle</option>
            <option value="chickFilA">Chick-fil-A</option>
            <option value="arbys">Arby's</option>
            <option value="subway">Subway</option>
            <option value="potbelly">Potbelly</option>
          </select>
        )}

        {selectedCategory === 'office' && (
          <select className="search-dropdown" value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select Office...</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        )}

        <button onClick={handleShowButtonClick}>Show</button>

        {showContent && selectedCategory === 'shuttle' && selectedOption === 'daily' && (
          <div className="locations">
            <p>The shuttle pickup for daily parking at BWI is located at lower level door numbers 2, 9, and 15.</p>
            <br /><img src={dailyImage} alt="Rental Car Pickup" />  {/* Updated image source */}
          </div>
        )}

    {showContent && selectedCategory === 'shuttle' && selectedOption === 'rental-car' && (
          <div className="locations">
            <p>The shuttle pickup for rental cars at BWI is located at lower level door numbers 1, 9, and 15.</p>
            <br /><img src={rentalCarImage} alt="Rental Car Pickup" />  {/* Updated image source */}
          </div>
        )}

        {/* ... other conditional rendering for Long Term A, Long Term B, etc. */}
      </section>
      <nav className="navigation">
  <Link to="/">
    <button className="home-button"><i class="fa-thin fa-house"></i> Home Page</button>
  </Link>
</nav>

    </div>
  );
}

export default Directory;
