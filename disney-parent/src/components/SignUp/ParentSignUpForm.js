import React, {useState} from 'react';
import axios from "axios";

import styled from "styled-components"



const InputField = styled.div`
    padding: 10px;
`;

const ParentTitle = styled.h1`
    background-color: #253b57;
    color: #E0E4E9;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 30px;
`;

function ParentSignUpForm(props) {

    const [credentials, setCredentials] = useState({});
     
       const parentSignUp = e => {
          e.preventDefault();
          axios().post('https://disneyparentdb.herokuapp.com/api/auth/register', {...credentials, type: "parent"})
                  .then(res => {
                      console.log(res.data)
  
                      
                      props.history.push('/login');
                  })
                  .catch(err => console.log(err));
      }
  
      const signUpChangeHandler = event => {
  
          setCredentials({
              ...credentials,
               [event.target.name]: event.target.value 
              });
      }

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
              name="firstName"
              type="text"
              placeholder="First Name"
              value={credentials.firstName}
              onChange={signUpChangeHandler}
            />
        </InputField>
        <InputField>
            <input 
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={credentials.lastName}
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
        <InputField>
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
              name="emergencyPhone"
              type="text"
              placeholder="Emergency Phone Num."
              value={credentials.emergencyPhone}
              onChange={signUpChangeHandler}
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