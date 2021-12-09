import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const HomePage = (props) => {
  return (
    <div>
      <Container>
        <React.Fragment>
          <Image
            src="https://i.ibb.co/W2q3tVS/anastase-maragos-m-HDOBf-SI7-I-unsplash.jpg"
            fluid
          />
          <h1>Handmade furniture, just for you.</h1>
          <Link to="/buyer">
            <Button variant="dark" size="lg">
              Buy
            </Button>
          </Link>
          <Link to="/seller">
            <Button variant="dark" size="lg">
              Sell
            </Button>
          </Link>
        </React.Fragment>
      </Container>
    </div>
  );
};

export default HomePage;

{
  /* <a href="https://ibb.co/W2q3tVS"><img src="https://i.ibb.co/W2q3tVS/anastase-maragos-m-HDOBf-SI7-I-unsplash.jpg" alt="anastase-maragos-m-HDOBf-SI7-I-unsplash" border="0"></a> */
}
