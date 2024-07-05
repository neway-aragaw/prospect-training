import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />

      <div className="header-txt">
        <div className="image-container">
          <div className='high'>
            {/* Add any additional content or components here */}
          </div>
          <img className='home_img' src="https://static1.eskypartners.com/travelguide/airport-assist.jpg" alt="" />
          <div className="image-overlay"></div>

          <div className="h6-container">
            <h6>
              <span className="h6-span blue">Welcome to NEXUS</span><br />
              <span className="h6-span-large">Digital training for PSA</span><br />
              <span className="h6-span blue">ensuring better training understanding of the job</span>
            </h6>
          </div>

          <img className='home_img1' src="https://www.stuttgart-airport.com/media/306637/str_prm_support_01.jpg?width=1200&slimmage=true" alt="" />
        </div>
      </div>

      <div className="button-container">
        {/* Add your buttons here */}
      </div>

      {/* Footer section */}

    </div>
  );
}

export default HomePage;
