import React, { useState, Component } from "react";
import { Form, Button, Container, FormLabel } from "react-bootstrap";
import axios from "axios";
import { Route } from "react-router-dom";
import "./login.css";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    postUser(userName, userPassword);
  };

  const postUser = async (name, password) => {
    let payload = { username: name, password: password };
    let response = await axios.post(
      `https://localhost:44394/api/authentication/login`,
      payload
    );
    console.log(response.data);
    localStorage.setItem("token", response.data.token);
    window.location = "/";
  };

  return (
    <div align="center" className="login-style">
      <Container style={{ flex: 1, width: "40%", padding: "10%" }}>
        <FormLabel
          style={{
            color: "white",
            fontSize: "24px",
            backgroundColor: "black",
          }}
        >
          Login
        </FormLabel>
        <Form id="contact-form" onSubmit={onFormSubmit}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Control
              type="text"
              name="userName"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formBasicLastName">
            <Form.Control
              type="text"
              name="userPassword"
              placeholder="Password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            &nbsp;
          </Form.Group>
          &nbsp;
          <Button type="submit" variant="dark">
            Submit
          </Button>
        </Form>
      </Container>
      &nbsp;
    </div>
  );
};

export default Login;

//I quit on this because the changeHandler function was not being recognized. Instead of setting up two hooks, one for email and
//one for password, I wanted to practice using userLogin as a state and having one function set the values of the variables in
//the state.

// const Login = (props) => {
//     let userLogin = {
//         email: '',
//         password: '',
//     }

//     const userSearch = async (userLogin) => {
//         let payload = {email: userLogin.email, password: userLogin.password}
//         let response = await axios.post(`https://localhost:44394/api/authentication/login`, payload)
//         console.log(response.data)
//         localStorage.setItem('token', response.data.token)
//         window.location = '/';
//     }

//     const onFormSubmit = (evt) => {
//         evt.preventDefault()
//         console.log(userLogin.email, userLogin.password)
//         userSearch (userLogin)
//     }

//     const changeHandler = (e) => {
//         useState({[e.target.name]: e.target.value})
//     }

//     return (
//         <div>
//             <form onSubmit={onFormSubmit}>
//                 <div className="field">
//                     <label>Login</label>
//                     <input type="text" name="email" placeholder="Email" value={userLogin.email} onChange={changeHandler} />
//                     <input type="text" name="password" placeholder="Password" value={userLogin.password} onChange={changeHandler} />
//                     <button type="submit">Submit</button>
//                 </div>
//             </form>
//         </div>
//     )
// };

// export default Login;

// localStorage.setItem('token', responseData.token);
// const tokenFromStorage = localStorage.getItem('token');
// localStorage.removeItem('token')
