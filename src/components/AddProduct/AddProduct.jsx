import React, {useState, useEffect} from "react";
import axios from 'axios';

const AddProduct = () => {

    const [name,setName] = useState("");
    const [price,setPrice] = useState(0.00);
    const [description,setDescription] = useState("");
    const [category,setCategory] = useState("");
    const [rating,setRating] = useState(0);
    const [userId,setUserId] = useState("");
    
    const newProduct = {
        name: name,
        price: price,
        description: description,
        category: category,
        rating: rating,
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
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
             <h1>User Registration</h1>
             <div>
                <label>Name: </label>
                <input type="text" name="name" placeholder="Solid Walnut Dining Table" onChange={(event) => setName(event.target.value)} value={name}/>
            </div>
            <div>
                <label>Price: </label>
                <input type="text" name="price" placeholder= "5900.00" onChange={(event) => setPrice(event.target.value)} value={price}/>
            </div>
            <div>
                <label>Description: </label>
                <input type="text" name="description" placeholder="Made with just 3 wide Walnut boards for the top. Solid wood..." onChange={(event) => setDescription(event.target.value)} value={description}/>
            </div>
            <div>
                <label>Category: </label>
                <input type="text" name="category" placeholder="Dining Room" onChange={(event) => setCategory(event.target.value)} value={category}/>
            </div>
            <div>
                <label>Rating: </label>
                <input type="text" name="rating" placeholder="1-5" onChange={(event) => setRating(event.target.value)} value={rating}/>
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default AddProduct;
