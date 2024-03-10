import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid" id='footer-container'>
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Email: info@yourcompany.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><Link to="/facebook">Facebook</Link></li>
              <li><Link to="/twitter">Twitter</Link></li>
              <li><Link to="/instagram">Instagram</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
