import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >
            CoachPro
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link" >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/coaching-programs" className="nav-link" >
                  Coaching Programs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link" >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link" >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
