import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Navbar, Nav } from "react-bootstrap";

import "./Header.css";
function Header() {
  return (
    <>
      <div className="Header">

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand>
              <i className="fa-solid fa-house-chimney"></i>Estate
            </Navbar.Brand>
            <Nav className="me-auto nav_bar_wrapper">
              <div className="links">
                <Link to="/">Rent</Link>

                <Link to="/buy">Buy</Link>

                <Link to="/sell">Sell</Link>

                <Link to="/favorites">Favorites</Link>
              </div>

              <NavDropdown title="Manage Property" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Resources" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

                <Button variant="outline-success" className="btn" size="sm">
                  Login
                </Button>
                <Button variant="outline-secondary" size="sm">
                  Signup
                </Button>

            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
