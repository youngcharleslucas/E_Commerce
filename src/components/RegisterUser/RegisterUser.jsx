import React, { useState } from "react";
import axios from "axios";

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
      <form onSubmit={(event) => handleSubmit(event)}>
        <h1>User Registration</h1>
        <div>
          <label className="first-name">First Name: </label>
          <input
            type="text"
            name="firstName"
            placeholder="John"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            placeholder="Doe"
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
          />
        </div>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="userName"
            placeholder="JohnDoe123"
            onChange={(event) => setUserName(event.target.value)}
            value={userName}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="text"
            name="password"
            placeholder="password123"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            placeholder="JohnDoe@gmail.com"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div>
          <label>Phone Number: </label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="555-555-5555"
            onChange={(event) => setPhoneNumber(event.target.value)}
            value={phoneNumber}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterUser;
