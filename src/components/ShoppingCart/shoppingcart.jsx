// import React, {Component} from 'react';
// import axios from 'axios';

// const ShoppingCart = (props) => {

//     return (
//         <div>
//             <h2> This is the shopping cart</h2>
//         </div>
//     )
// };

// export default ShoppingCart;

import React, { useState, useEffect } from "react";
import { Card, Container, ListGroup , ListGroupItem, CardGroup } from "react-bootstrap";
import './shoppingcart.css'
import axios from "axios";

const ShoppingCart = ({user}) => {
  const [products, setProducts] = useState([])
  
  
    useEffect(()=>{
      getProduct()
    },[user.id])

    const getProduct = async () => {
      console.log(user)
      const jwt = localStorage.getItem('token')
      let response = await axios.get(`https://localhost:44394/api/shoppingcart/${user.id}`, {headers: {Authorization: 'Bearer ' + jwt}})
      setProducts(response.data)
          
  }
  

  return (
    <Container fluid>
      <React.Fragment>
      {console.log(user.id)}
      {console.log(products)}
        <CardGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          {products.map((element)=>
          <Card style={{flex: 1, width: '20px'}}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" size='sm'/>
              <Card.Body>
                <Card.Title>{element.ProductId}</Card.Title> 
                  <Card.Text>
                    {element.UserId}
                  </Card.Text>
              </Card.Body>
              {/* <ListGroup className="list-group-flush">
                <ListGroupItem>Category: {element.category}</ListGroupItem>
                <ListGroupItem>Rating: {element.rating}</ListGroupItem>
                <ListGroupItem>Price:{element.price}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="/product/{element.id}">More Info</Card.Link>
                <Card.Link href="#">Add to Cart</Card.Link>
              </Card.Body> */}
          </Card>)}
        </CardGroup>
      </React.Fragment>
    </Container>
  )
  };

export default ShoppingCart;
