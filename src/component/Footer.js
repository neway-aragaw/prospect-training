import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
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
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
