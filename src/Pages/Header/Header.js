import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
              <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
         Happiness Tour
          </Navbar.Brand>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/About">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/#services">
            Travel Spots
          </Nav.Link>
          <Nav.Link as={Link} to="/Book Travel">
            Book Travel
          </Nav.Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
           
             
              <Navbar.Text>
              Signed in as: <a href="#login">LogOut</a>
              </Navbar.Text>
             
            
              <Nav.Link as={Link} to="/login">
                Log In
              </Nav.Link>
            )
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
        
    );
};

export default Header;