import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

const PrivateHeaderHeader = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.clear();
        navigate("/");
    };
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
                                <Link className="text-decoration-none text-black" to='/dashboard'>
                                    Dashboard
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="auth text-black" onClick={handleLogOut}>
                                Log Out
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default PrivateHeaderHeader