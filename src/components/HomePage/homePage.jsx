import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./homePage.css";

const HomePage = (props) => {
  return (
    <Container fluid>
      <React.Fragment>
        <div class="bgimage">
          <h1>Handmade furniture, just for you.</h1>
          <p>
            <a href="/buyer" class="btn btn-dark">
              Buy
            </a>
            <a href="/seller" class="btn btn-dark">
              Sell
            </a>
          </p>
        </div>
      </React.Fragment>
    </Container>
  );
};

export default HomePage;
