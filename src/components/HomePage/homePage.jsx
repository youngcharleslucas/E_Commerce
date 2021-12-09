import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./homePage.css"

const HomePage = (props) => {
  return (
    <div>
      <Container fluid>
        <React.Fragment>
          <div class="bgimage">
          <h1>Handmade furniture, just for you.</h1>
          <a href="/buyer" class="btn btn-dark">Buy</a>
          <a href="/seller" class="btn btn-dark">Sell</a>
          </div>
        </React.Fragment>
      </Container>
    </div>
  );
};

export default HomePage;

{
  /* <a href="https://ibb.co/W2q3tVS"><img src="https://i.ibb.co/W2q3tVS/anastase-maragos-m-HDOBf-SI7-I-unsplash.jpg" alt="anastase-maragos-m-HDOBf-SI7-I-unsplash" border="0"></a> */
}
