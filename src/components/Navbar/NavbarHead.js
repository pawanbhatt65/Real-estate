import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/logo.png";

import classes from "./Navbar.module.css";

const NavbarHead = () => {
  return (
    <Navbar expand="lg" className={classes.nav}>
      <Container fluid>
        <Navbar.Brand href="#" className={classes.logo}>
          <img src={Logo} alt="logo" className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className={classes.navlinksItem} href="#home">
              Home
            </Nav.Link>
            <Nav.Link className={classes.navlinksItem} href="#features">
              Features <sup>*</sup>
            </Nav.Link>
            <Nav.Link className={classes.navlinksItem} href="#agent">
              The Agent
            </Nav.Link>
            <Nav.Link className={classes.navlinksItem} href="#gallery">
              Gallery
            </Nav.Link>
            <Nav.Link className={classes.navlinksItem} href="#">
              Testimonials
            </Nav.Link>
            <Nav.Link className={classes.navlinksItem} href="#contact">
              Contact
            </Nav.Link>
          </Nav>
          <ul className="ms-auto list-inline">
            <li className="list-inline-item">
              <a className={classes.mediaLink} href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className={classes.mediaLink} href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className={classes.mediaLink} href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHead;
