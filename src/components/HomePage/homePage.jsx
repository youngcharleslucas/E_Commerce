import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';

const HomePage = (props) => {
    return ( 

        <div>
            <Container>
                <Image src="https://unsplash.com/photos/m-HDOBfSI7I" fluid/>
                <Link to="/buyer">
                    <Button variant="dark" size="lg">Buy</Button>
                </Link>
                <Link to="/seller">
                    <Button variant="dark" size="lg">Sell</Button>
                </Link>
            </Container>
        </div>

    );
}

export default HomePage;