import React from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <Container className="header p-0">
        <Navbar class="nav-white" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} className="logo-img" alt="..." />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Resume</Nav.Link>
                <Nav.Link href="#link">Skills</Nav.Link>
                <Nav.Link href="#link">Projects</Nav.Link>
                <Nav.Link href="#link">Blog</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
