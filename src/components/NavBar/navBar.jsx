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
        <Navbar.Brand>
          <img
            src="https://i.ibb.co/0VvWvR0/Blank-2000-x-2000-500-x-500-2.png"
            alt="Blank-2000-x-2000-3"
            border="0"
            height="100"
            margin="0"
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          {!user && (
            <React.Fragment>
              <NavDropdown title="Login">
                <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                <NavDropdown.Item href="/login/register">
                  Register
                </NavDropdown.Item>
              </NavDropdown>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavDropdown title="Logout">
                <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/product/add">Seller</Nav.Link>
              <Nav.Link href="/buyer">Buyer</Nav.Link>
              <Nav.Link href="/shoppingcart">Shopping Cart</Nav.Link>
            </React.Fragment>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
