import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Login from "../../Services/Login/Login";
const Header = () => {
  const { user, logOut, } = useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
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
         
          <Nav.Link as={Link} to="/booking">
            Book Travel
          </Nav.Link>
          <Navbar.Toggle />
       
          <Nav>
            {user?.email ? (
              <>
                 <Navbar.Collapse className="justify-content-end">
             <Nav.Link as={Link} to="/myOrders">
            My Orders
          </Nav.Link>
          <Nav.Link as={Link} to="/addTravel">
           Add Travel
          </Nav.Link>
             <Nav.Link as={Link} to="/manageOrders">
           Manage Orders
          </Nav.Link>
          </Navbar.Collapse>
              <button onClick={logOut} type="button" className="btn btn-light">
                LogOut
              </button>
              <Navbar.Text>
                Signed in as: <a href="#login">{user?.displayName}</a>
                <br />
                <a href="#login">{user?.email}</a>
              </Navbar.Text>
              </>
            ) : (
             <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>

         
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
