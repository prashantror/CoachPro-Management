import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./../../../assets/cp-logo.png"

const LandingPageHeader = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container-fluid'>
          <Link to="/" className="navbar-brand" >
            <img src={Logo} className='main-logo' />
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link to="/dashboard" className="nav-link" >
                  Dashboard
                </Link>
              </li>
            </ul>
            <div class="navbar-text">
              <Link to="/login" className="nav-link" >
                Login
              </Link>
              <span>&nbsp;</span>
              <Link to="/sign-up" className="nav-link" >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default LandingPageHeader;
