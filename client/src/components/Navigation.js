// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Auth from '../utils/auth'

function Navigation({setPage, handleShow, handleClose}) {

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" onClick={() => {setPage("Homepage")}}>Home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {/* if user is logged in show saved books and logout */}
          {Auth.loggedIn() ? (
                <>
                <Navbar.Text id="welcome">
                Welcome back!
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