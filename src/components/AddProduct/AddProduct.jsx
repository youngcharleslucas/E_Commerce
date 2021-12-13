import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Form, Button, Container, FormLabel } from "react-bootstrap";

const AddProduct = () => {

    const [name,setName] = useState("");
    const [price,setPrice] = useState(0.00);
    const [description,setDescription] = useState("");
    const [category,setCategory] = useState("");
    const [rating,setRating] = useState(0);
    const [userId,setUserId] = useState("");
    
    const newProduct = {
        name: name ,
        price: price * 1,
        description: description,
        category: category,
        rating: rating * 1,
        userId: userId
    }

    useEffect(()=>{
        getCurrentUser();
      },[])

    let getCurrentUser = async () => {
        const jwt = localStorage.getItem('token');
        let response = await axios.get('https://localhost:44394/api/examples/user', {headers: {Authorization: 'Bearer ' + jwt}});
        setUserId(response.data.id)
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        const jwt = localStorage.getItem('token');
        let response = await axios.post('https://localhost:44394/api/products', newProduct, {headers: {Authorization: 'Bearer ' + jwt}});
        console.log(response.data);
        if (response.request.status === 201)
        {
            alert('Product added, thank you!');
        }
    }

    return ( 
        <Container style={{ flex: 1, width: "40%", padding: "10%" }}>
        <FormLabel
          style={{
            color: "white",
            fontSize: "24px",
            backgroundColor: "black",
          }}
        >
          Add Product
        </FormLabel>
        <Form id="add-product" onSubmit={(event) => handleSubmit(event)}>
          <Form.Group controlId="formProductName">
            <Form.Control
              type="product"
              placeholder="Solid Walnut Dining Table"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formPrice">
            <Form.Control
              type="price"
              placeholder="5900.00"
              onChange={(event) => setPrice(event.target.value)}
              value={price}
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formDescription">
            <Form.Control
              type="description"
              placeholder="Made with just 3 wide Walnut boards for the top. Solid wood..."
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formCategory">
            <Form.Control
              type="category"
              placeholder="Dining Room"
              onChange={(event) => setCategory(event.target.value)}
              value={category}
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formRating">
            <Form.Control
              type="rating"
              placeholder="1-5"
              onChange={(event) => setRating(event.target.value)}
              value={rating}
            />
          </Form.Group>
          &nbsp; &nbsp;
          <Button type="submit" variant="dark">
            Submit
          </Button>
        </Form>
      </Container>
     );
}
 
export default AddProduct;
