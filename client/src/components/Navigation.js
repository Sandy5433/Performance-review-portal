// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Auth from '../utils/auth'

function Navigation({handleShow, handleClose}) {
    // const [show, setShow] = useState(false);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {/* if user is logged in show saved books and logout */}
          {Auth.loggedIn() ? (
                <>
                <Navbar.Text>
                Signed in as: <a href="#login">FirstName LastName</a>
                </Navbar.Text>
                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={handleShow}>Login</Nav.Link>
                
              )}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;