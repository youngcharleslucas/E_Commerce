import React, { useState, useEffect } from "react";
import { Card, Container, ListGroup , ListGroupItem, CardGroup, Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";
import './searchBar.css'

const SearchBar = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
      },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        let searchFor = document.getElementById("searchFor").value
        getSearchResults(searchFor);
    }
    const getSearchResults = (searchFor) => {
        let searchResults = products.filter(p => p.name.toLowerCase().includes(searchFor.toLowerCase()))
        .map(products => (products));
        setSearchResults(searchResults)
    }
    const getProducts = async () => {
        let response = await axios.get('https://localhost:44394/api/products')
        setProducts(response.data)
    }
    return (
        <Container fluid>
                <div className="search-bar ui segment">
                <div className="field">
                    <form className="d-flex" className="product-style" onSubmit={(event) => handleSubmit(event)}>
                            <input
                                id="searchFor"
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        <button type="submit" variant="dark">Search</button>
                    </form>
                </div>
                </div>
        <React.Fragment>
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
