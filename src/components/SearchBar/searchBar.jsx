import React, { useState } from "react";
import { Card, Container, ListGroup , ListGroupItem, CardGroup, Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";
import './searchBar.css'

const SearchBar = () => {

    const [searchResults, setSearchResults] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const searchTermHandler = (evt) => {
        evt.preventDefault()
        setSearchTerm(evt.currentTarget.value)
        console.log(searchTerm)
    }
    
    const onFormSubmit = (evt) => {
        evt.preventDefault()
        getSearchResults(searchTerm)
    }

    const getSearchResults = async () => {
        let response = await axios.get('https://localhost:44394/api/products')
        setSearchResults(response.data)
    }

    return (
        <Container fluid>
            <React.Fragment>
                <div className="search-bar ui segment">
                <div className="field">
                    <Form className="d-flex" className="product-style" onSubmit={onFormSubmit}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            value={searchTerm}
                            onChange={searchTermHandler}
                            aria-label="Search"
                        />
                        <Button variant="dark">Search</Button>
                    </Form>
                </div>
                </div>
            </React.Fragment>
        <React.Fragment>
            {console.log(searchResults)}
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