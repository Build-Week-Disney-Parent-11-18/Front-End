import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const InputField = styled.div`
  padding: 10px;
`;

const VolunteerTitle = styled.h1`
  background-color: #253b57;
  color: #e0e4e9;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 30px;
`;

const RadioSpan = styled.span`
  padding: 10px;
`;

function VolunteerSignUpForm(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    last_name: "",
    first_name: "",
    email: "",
    password: "",
    role: "volunteer"
  });

  const volunteerSignUp = e => {
    e.preventDefault();
    axios
      .post("https://disneyparentdb.herokuapp.com/api/auth/register", {
        ...credentials
      })
      .then(res => {
        console.log(res.data);

        props.history.push("/Login");
      })
      .catch(err => console.log(err));
  };

  const signUpChangeHandler = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <VolunteerTitle>Volunteer Sign Up Form</VolunteerTitle>
      <form onSubmit={volunteerSignUp}>
        <InputField>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={signUpChangeHandler}
          />
        </InputField>
        <InputField>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={signUpChangeHandler}
          />
        </InputField>
        <InputField>
          <input
            name="first_name"
            type="text"
            placeholder="First Name"
            value={credentials.first_name}
            onChange={signUpChangeHandler}
          />
        </InputField>
        <InputField>
          <input
            name="last_name"
            type="text"
            placeholder="Last Name"
            value={credentials.last_name}
            onChange={signUpChangeHandler}
          />
        </InputField>
        <InputField>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={signUpChangeHandler}
          />
        </InputField>
        {/* <InputField>
            <input 
              name="DOB"
              type="date"
              placeholder="DOB"
              value={credentials.DOB}
              onChange={signUpChangeHandler}
            />
        </InputField>
        <InputField>
            <input 
              name="phoneNum"
              type="text"
              placeholder="Phone Num."
              value={credentials.phoneNum}
              onChange={signUpChangeHandler}
            />
        </InputField>
        <InputField>
            <input 
              name="avgPerChild"
              type="number"
              placeholder="Average Cost"
              value={credentials.avgPerChild}
              onChange={signUpChangeHandler}
            />
          </InputField>
          <InputField>
            <label>Are you willing to negotiate the cost of service?</label>
            <div>
                <RadioSpan>
                    <input 
                      name="priceNegotiable"
                      type="radio"
                      placeholder="amount"
                      value={true}
                    />
                    Yes
                    </RadioSpan>
                <RadioSpan>
                    <input
                      name="priceNegotiable"
                      type="radio"
                      placeholder="amount"
                      value={false}
                    />
                    No
                </RadioSpan>
            </div>
            </InputField> */}
        <InputField>
          <button type="submit">Sign Up</button>
        </InputField>
      </form>
    </div>
  );
}

export default VolunteerSignUpForm;
