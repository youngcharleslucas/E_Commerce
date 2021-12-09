import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./homePage.css";

const HomePage = (props) => {
  return (
    <div>
      <Container fluid>
        <React.Fragment>
          <img
            src="https://i.ibb.co/NyQ3STw/anastase-maragos-m-HDOBf-SI7-I-unsplash.jpg"
            fluid
          />
          <div class="bgimage">
            <h1>Handmade furniture, just for you.</h1>
            <a href="/buyer" class="btn btn-dark">
              Buy
            </a>
            <a href="/seller" class="btn btn-dark">
              Sell
            </a>
          </div>
        </React.Fragment>
      </Container>
    </div>
  );
};

export default HomePage;
