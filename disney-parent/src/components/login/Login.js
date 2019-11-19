import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [login, SetLogin] = useState({
    username: "",
    password: ""
  });
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://disneyparentdb.herokuapp.com/api/auth/login", login)
      .then(res => {
        console.log("response", res.data);
        const { data } = res;

        localStorage.setItem("token", data.token);
        props.history.push('/');
        window.location.reload(true);
      })
      .catch(err => console.log(err));
  };

  const handleChange = e => {
    SetLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
        <h2>Login</h2>
      <form style={{display: 'flex', 
      flexDirection: 'column', 
      margin:'0 auto',width: '30%'}} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={login.username}
          onChange={handleChange}
          placeholder="Username"
          style={{marginBottom:'1rem', fontSize: '1.2rem'}}
        />
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
          placeholder="Password"
          style={{marginBottom:'1rem', fontSize: '1.2rem'}}
        />
        <button type="submit" style={{margin: '0 auto',padding: '0.5rem', width: '5rem'}}>Login</button>
      </form>
    </div>
  );
};

export default Login;
