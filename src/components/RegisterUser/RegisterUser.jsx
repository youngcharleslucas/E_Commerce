import React, {useState} from "react";
import axios from 'axios';

const RegisterUser = () => {

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");

    const [firstNameErrors,setFirstNameErrors] = useState("");
    const [lastNameErrors,setLastNameErrors] = useState("");
    const [userNameErrors,setUserNameErrors] = useState("");
    const [passwordErrors,setPasswordErrors] = useState("");
    const [emailErrors,setEmailErrors] = useState("");
    const [phoneNumberErrors,setPhoneNumberErrors] = useState("");
    
    const newUser = {
        firstname: firstName,
        lastname: lastName,
        username: userName,
        password: password,
        email: email,
        phonenumber: phoneNumber
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        let response = await axios.post('https://localhost:44394/api/authentication', newUser)
        console.log(response);
        if (response.request.status == 201)
        {
            alert('Registration Complete, Please sign in.');
            return window.location = "/login";
        }
    }
    let handleChange = (event) => {

        switch(event.target.name){
            case 'firstName':
                setFirstNameErrors(event.target.value.length < 1 ? "Please enter a first name" : null);
                break;
            case 'lastName':
                setLastNameErrors(event.target.value.length < 1 ? "Please enter a last name" : null);
                break;
            case 'userName':
                setUserNameErrors(event.target.value.length < 1 ? "Please enter a username" : null);
                break;
            case 'password':
                setPasswordErrors(event.target.value.length < 1 ? "Please enter a password" : null);
                break;
            case 'email':
                setEmailErrors(event.target.value.length < 1 ? "Please enter an email address" : null);
                break;
            case 'phoneNumber':
                setPhoneNumberErrors(event.target.value.length < 1 ? "Please enter a phone number" : null);    
                break;   
                default:
                    break;
        }
    }

    return ( 
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
             <h1>User Registration</h1>
             <div>
                <label>First Name: </label>
                <input type="text" name="firstName" placeholder="John" onChange={handleChange, (event) => setFirstName(event.target.value)} value={firstName}/>
            </div>
            {firstNameErrors ? <p style={{color:'red'}}>{firstNameErrors}</p> : ''}
            <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" placeholder="Doe" onChange={handleChange, (event) => setLastName(event.target.value)} value={lastName}/>
            </div>
            <div>
                <label>Username: </label>
                <input type="text" name="userName" placeholder="JohnDoe123" onChange={handleChange, (event) => setUserName(event.target.value)} value={userName}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" name="password" placeholder="password123" onChange={handleChange, (event) => setPassword(event.target.value)} value={password}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" name="email" placeholder="JohnDoe@gmail.com" onChange={handleChange, (event) => setEmail(event.target.value)} value={email}/>
            </div>
            <div>
                <label>Phone Number: </label>
                <input type="text" name="phoneNumber" placeholder="555-555-5555" onChange={handleChange, (event) => setPhoneNumber(event.target.value)} value={phoneNumber}/>
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default RegisterUser;