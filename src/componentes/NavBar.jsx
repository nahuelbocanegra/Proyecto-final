import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to={"/"}>E-commerce</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/Login"}>Login
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/Purchases"}>Purchases</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;