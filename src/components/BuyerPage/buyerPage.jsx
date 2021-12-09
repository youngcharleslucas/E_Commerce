import React, { useState, useEffect } from "react";
import { Card, Container, ListGroup , ListGroupItem, CardGroup } from "react-bootstrap";
import './buyerPage.css'
import axios from "axios";

const BuyerPage = (props) => {
  const [products, setProducts] = useState([])
 
  
    useEffect(()=>{
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
        <CardGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          {products.map((element)=>
          <Card style={{flex: 1, width: '20px'}}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" size='sm'/>
              <Card.Body>
                <Card.Title>{element.name}</Card.Title> 
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">More Info</Card.Link>
                <Card.Link href="#">Add to Cart</Card.Link>
              </Card.Body>
          </Card>)}
        </CardGroup>
      </React.Fragment>
    </Container>
  )
  };

export default BuyerPage;
