import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useState } from 'react';
import Cart from './Cart';
const NavBar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Navbar bg="light" variant="light">
            <Container>
                    <Navbar.Brand as={Link} to={"/"}><i style={{ fontSize: "2rem", color:"gray" }}className='bx bx-store'></i></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/Login"}>Login
                    </Nav.Link>
                        <Nav.Link as={Link} to={"/Purchases"}>Purchases</Nav.Link>
                        <Nav.Link onClick={handleShow}>Cart
                        </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
            <Cart show={show} handleClose={handleClose}></Cart>
        </>
    );
};

export default NavBar;