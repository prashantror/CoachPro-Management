import React from "react";
import Logo from "./../../../assets/cp-logo.png"
import { Link, useNavigate } from "react-router-dom";

const PrivateHeader = () => {
  const userToken = localStorage.getItem("accessToken");

  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

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
              {
                userToken ? (
                  <></>
                ) : (
                  <>
                    <Link to="/login" className="nav-link" >
                      Login
                    </Link>
                    <span>&nbsp;</span>
                  </>
                )
              }
              <Link className="auth text-black nav-link" onClick={handleLogOut} >
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default PrivateHeader;
