import React, { useState, useEffect } from "react";
import { Button, Card, Container, ListGroup , ListGroupItem, CardGroup} from "react-bootstrap";
import './buyerPage.css'
import axios from "axios";
import SearchBar from "../SearchBar/searchBar";

const BuyerPage = ({user}) => {
  const [products, setProducts] = useState([])
  
    useEffect(() => {
      getProduct()
    },[user.id])

    const getProduct = async () => {
      let response = await axios.get('https://localhost:44394/api/products')
      setProducts(response.data)
  }

    const handleClick = async (event, elementId) => {
      event.preventDefault();
      const jwt = localStorage.getItem('token')
      let payload = {
        userId: user.id,
        productId: elementId
      }
      let response = await axios.post('https://localhost:44394/api/shoppingcart/',payload, {headers: {Authorization: 'Bearer ' + jwt}})
      console.log(response.data);
      if (response.request.status === 201)
      {
          alert('Product added, thank you!');
      }
    }

  return (
    <Container fluid>
      <React.Fragment>
        {console.log(products)}
        <SearchBar user={user}/>
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
                <Button onClick={(event) => handleClick(event, element.id)}>Add to Cart</Button>
              </Card.Body>
          </Card>)}
        </CardGroup>
      </React.Fragment>
    </Container>
  )
  };

export default BuyerPage;
