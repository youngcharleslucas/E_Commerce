import React, { useState, useEffect } from "react";
import { Card, Container, ListGroup , ListGroupItem, CardGroup, Form, FormControl, Button } from "react-bootstrap";
import './buyerPage.css'
import axios from "axios";

const SearchBar = (props) => {

    const [searchResults, setSearchResults] = useState([])

    useEffect(()=>{
        getSearchResults()
    },[])

    const getSearchResults = async (props.searchTerm) => {
        let response = await axios.get('https://localhost:44394/api/products')
        setSearchResults(response.data)
    
    }

    return (
    <Container fluid>
        <React.Fragment>
            {console.log(products)}
        <CardGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            {searchResults.map((element)=>
            <Card style={{flex: 1, width: '20px'}}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" size='sm'/>
                <Card.Body>
                    <Card.Title>{element.name}</Card.Title> 
                    <Card.Text>
                    {element.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroupItem>Category: {element.category}</ListGroupItem>
                <ListGroupItem>Rating: {element.rating}</ListGroupItem>
                <ListGroupItem>Price:{element.price}</ListGroupItem>
                </ListGroup>
            <Card.Body>
                <Card.Link href="/product/{element.id}">More Info</Card.Link>
                <Card.Link href="#">Add to Cart</Card.Link>
            </Card.Body>
            </Card>)}
            </CardGroup>
        </React.Fragment>
    </Container>
)
};

export default SearchBar;
