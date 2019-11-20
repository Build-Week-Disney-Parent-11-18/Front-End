import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const InputField = styled.div`
  padding: 10px;
`;

const ParentTitle = styled.h1`
  background-color: #253b57;
  color: #e0e4e9;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 30px;
`;

function ParentSignUpForm(props) {
  const [credentials, setCredentials] = useState({
      username: '',
      last_name: '',
      first_name: '',
      email: '',
      password: '',
      role: 'parent',
  });

  const parentSignUp = e => {
    e.preventDefault();
    axios
      .post(`https://disneyparentdb.herokuapp.com/api/auth/register`, {
        ...credentials
      })
      .then(res => {
        console.log('register',res.data);

        props.history.push("/Login");
      })
      .catch(err => console.log(err));
  };

  const signUpChangedHandler = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <ParentTitle>Parent Sign Up Form</ParentTitle>
      <form onSubmit={parentSignUp}>
        <InputField>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={signUpChangedHandler}
          />
        </InputField>
        <InputField>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={signUpChangedHandler}
          />
        </InputField>
        <InputField>
          <input
            name="first_name"
            type="text"
            placeholder="First Name"
            value={credentials.first_name}
            onChange={signUpChangedHandler}
          />
        </InputField>
        <InputField>
          <input
            name="last_name"
            type="text"
            placeholder="Last Name"
            value={credentials.last_name}
            onChange={signUpChangedHandler}
          />
        </InputField>
        <InputField>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={signUpChangedHandler}
          />
        </InputField>
        <InputField>
          <button type="submit">Sign Up</button>
        </InputField>
      </form>
    </div>
  );
}

export default ParentSignUpForm;
