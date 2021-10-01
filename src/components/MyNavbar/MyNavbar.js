import React from "react";
import "./MyNavbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="my-nav">
      <Container className="px-5 py-0">
        <Link to="/home" className="nav-brand">
          <div className="log-box d-flex flex-column align-items-center">
            <span className="logo-text-primary">Grand</span>
            <span className="logo-text-secondary">Restaurant</span>
          </div>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              activeStyle={{
                color: "#000",
              }}
              className="nav-link"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              activeStyle={{
                color: "#000",
              }}
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              activeStyle={{
                color: "#000",
              }}
              className="nav-link"
              to="/meals"
            >
              Meals
            </NavLink>
            <NavLink
              activeStyle={{
                color: "#000",
              }}
              className="nav-link"
              to="*"
            >
              404
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
