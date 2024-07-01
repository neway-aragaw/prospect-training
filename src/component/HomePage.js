import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <div className="logo">
        <img src="https://www.prospectair.com/wp-content/uploads/2021/01/Prospect-55-generic-header.jpg" alt="Company Logo" className="logo" />
      </div>
      <br />
     <div className='header_txt'>
     <h1>Prospect BWI Wheelchair Assistant Service Guide</h1>
     </div>
     <div className="button-container">
        <Link to="/services">
          <button className="start-button">Start self training</button>
        </Link>
      </div> 
      <br />
     <div className="button-container">
        <Link to="/directory">
          <button className="start-button">
          <i class="fa-sharp fa-solid fa-location-dot"></i> Quick Directory</button>
        </Link>
      </div>

      <div className="wheelchair-image-container">  {/* Descriptive class name */}
        <img src="https://media.licdn.com/dms/image/D5622AQHMpR1t1Wjj8w/feedshare-shrink_800/0/1689594943884?e=2147483647&v=beta&t=37nOe4DUpxNmoZGZh1zXZVPKQqbYbZ5PFz396mrKmFg" className="wheelchair-image" />
      </div>

      {/* Footer section */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Prospect BWI</p>
          <Link to="/about-us">About Us</Link>
        </div>
        <div className="footer-content">
          <p>Contact</p>
          <p>Address: 123 Main Street, Anytown, CA 12345</p>
          <a href="tel:1234567890">Phone: (123) 456-7890</a>
          <a href="mailto:info@prospectbwi.com">Email: info@prospectbwi.com</a>
        </div>
        <div className="footer-content">
          <p>Important Links</p>
          <a href="#">Accessibility</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us (duplicate - remove or link to contact info above)</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
