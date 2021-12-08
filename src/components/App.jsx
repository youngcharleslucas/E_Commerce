import React, { useState, useEffect } from "react";
import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/homePage";
import BuyerPage from "./BuyerPage/buyerPage";
import SellerPage from "./SellerPage/sellerPage";
import NavBar from "./NavBar/navBar";
import jwtDecode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      this.setState({
        user,
      });
    } catch {}
  }

  render() {
    const user = this.state.user;
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/buyer" element={<BuyerPage />} />
            <Route path="/seller" element={<SellerPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
