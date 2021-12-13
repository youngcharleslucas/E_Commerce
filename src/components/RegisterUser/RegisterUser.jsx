import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, FormLabel } from "react-bootstrap";

const RegisterUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const newUser = {
    firstname: firstName,
    lastname: lastName,
    username: userName,
    password: password,
    email: email,
    phonenumber: phoneNumber,
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    let response = await axios.post(
      "https://localhost:44394/api/authentication",
      newUser
    );
    console.log(response.data);
    if (response.request.status === 201) {
      alert("Registration Complete, Please sign in.");
      return (window.location = "/login");
    }
  };

  return (
    <div align="center">
      <h1 color="white">Reg</h1>
      <Container style={{ flex: 1, width: "40%", padding: "10%" }}>
        <label for="exampleInputEmail1" class="form-label" color="white">
          Email address
        </label>
        {/* <FormLabel size="xl">Registration</FormLabel> */}
        <Form id="contact-form" onSubmit={(event) => handleSubmit(event)}>
          <Form.Label>Register</Form.Label>
          <Form.Group controlId="formBasicFirstName">
            <Form.Control
              type="name"
              placeholder="First Name"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
              width="50%"
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formBasicLastName">
            <Form.Control
              type="name"
              placeholder="Last Name"
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="name"
              placeholder="Username"
              onChange={(event) => setUserName(event.target.value)}
              value={userName}
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formBasicPhone">
            <Form.Control
              type="phonenumber"
              placeholder="Phone Number"
              onChange={(event) => setPhoneNumber(event.target.value)}
              value={phoneNumber}
            />
          </Form.Group>
          &nbsp;
          <Button id="submit-button" variant="light" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default RegisterUser;

{
  /* <form onSubmit={(event) => handleSubmit(event)}>
        <h1>User Registration</h1>
        <div>
          <label class="text-light">
            <h5>First Name: &nbsp;</h5>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="John"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
          />
        </div>
        <div>
          <label className="text-light">
            <h5>Last Name: &nbsp;</h5>{" "}
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Doe"
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
          />
        </div>
        <div>
          <label className="text-light">
            <h5>Username: &nbsp;</h5>
          </label>
          <input
            type="text"
            name="userName"
            placeholder="JohnDoe123"
            onChange={(event) => setUserName(event.target.value)}
            value={userName}
          />
        </div>
        <div>
          <label className="text-light">
            <h5>Password: &nbsp;</h5>
          </label>
          <input
            type="text"
            name="password"
            placeholder="password123"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <div>
          <label className="text-light">
            <h5>Email: &nbsp;</h5>
          </label>
          <input
            type="text"
            name="email"
            placeholder="JohnDoe@gmail.com"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div>
          <label className="text-light">
            <h5>Phone Number: &nbsp;</h5>
          </label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="555-555-5555"
            onChange={(event) => setPhoneNumber(event.target.value)}
            value={phoneNumber}
          />
        </div>
        <button type="submit">Submit</button>
      </form> */
}
