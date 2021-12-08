import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./navBar.css";

const NavBar = ({ user }) => {
  return (
    <div>
      <Navbar bg="blue" variant="dark">
        <Navbar.Brand>Logo</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Products">
            <NavDropdown.Item href="/products/new">
              New Products
            </NavDropdown.Item>
            <NavDropdown.Item href="/products/all">
              All Products
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Login">
            <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
            <NavDropdown.Item href="/login/register">Register</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
