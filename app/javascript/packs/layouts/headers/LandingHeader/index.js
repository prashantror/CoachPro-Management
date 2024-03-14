import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const LandingPageHeader = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand className="logo">
          <Link className="text-decoration-none text-white" to='/'>
            CoachPro
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="nav-links">
            <Nav.Item>
              <Nav.Link className="auth text-black">
                <Link className="text-decoration-none text-black" to='/login' >Login</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="auth text-black">
                <Link className="text-decoration-none text-black" to='/sign-up'>Book Now</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default LandingPageHeader