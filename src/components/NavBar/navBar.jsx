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
          <NavDropdown title="Products">
            <NavDropdown.Item href="/products/new">
              New Products
            </NavDropdown.Item>
            <NavDropdown.Item href="/products/all">
              All Products
            </NavDropdown.Item>
          </NavDropdown>
          {!user &&
              <React.Fragment>
                <NavDropdown title="Login">
                  <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                  <NavDropdown.Item href="/login/register">Register</NavDropdown.Item>
                </NavDropdown>
              </React.Fragment>
          }
          {user &&
            <React.Fragment>
              <NavDropdown title="Logout">
                <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>
              </NavDropdown>
            </React.Fragment>
          }     
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
