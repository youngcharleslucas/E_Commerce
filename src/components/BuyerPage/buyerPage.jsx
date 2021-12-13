import React, { useState, useEffect } from "react";
import { Card, Container, ListGroup , ListGroupItem, CardGroup} from "react-bootstrap";
import './buyerPage.css'
import axios from "axios";
import SearchBar from "../SearchBar/searchBar";

const BuyerPage = () => {
  const [products, setProducts] = useState([])
  
    useEffect(() => {
      getProduct()
    },[])

    const getProduct = async () => {
      let response = await axios.get('https://localhost:44394/api/products')
      setProducts(response.data)
    
  }


  return (
    <Container fluid>
      <React.Fragment>
        {console.log(products)}
        <SearchBar />
        <CardGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          {products.map((element)=>
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

export default BuyerPage;
