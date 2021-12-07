import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/homePage";
import BuyerPage from "./components/BuyerPage/buyerPage";
import SellerPage from "./components/SellerPage/sellerPage";

class App extends Component {
  state = {};

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
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/buyer" component={BuyerPage} />
            <Route path="/seller" component={SellerPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
