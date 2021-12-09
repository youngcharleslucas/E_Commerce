import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./homePage.css";

const HomePage = (props) => {
  return (
    <Container fluid>
      <React.Fragment>
        <div class="image">
          <h1>
            <img src="https://i.ibb.co/py4SmNk/Blank-2000-x-2000-1000-x-500.png" />
          </h1>
          <p>
            <a href="/buyer" class="btn btn-dark">
              Buy
            </a>{" "}
            &nbsp;
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
