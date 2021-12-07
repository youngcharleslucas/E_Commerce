import React, { useState, useEffect } from "react";
import { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/homePage";
import BuyerPage from "./components/BuyerPage/buyerPage";
import SellerPage from "./components/SellerPage/sellerPage";
import NavBar from "./components/NavBar/navBar";
import jwtDecode from "jwt-decode";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        user: []
}}

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
        <NavBar user={user} />
        <div>
          <Routes>
            <Route path="/" exact component={HomePage} />
            <Route path="/buyer" component={BuyerPage} />
            <Route path="/seller" component={SellerPage} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
