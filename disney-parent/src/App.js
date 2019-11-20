import React, { useState, useEffect } from "react";
import Home from "./components/home/Home";
import { Link, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import RequestCard from "./components/request/RequestCard";
import PrivateRoute from "./components/PrivateRoute";
import ParentSignUpForm from './components/signUp/ParentSignUpForm';
import VolunteerSignUpForm from './components/signUp/VolunteerSignUpForm';
import NewRequest from './components/request/NewRequest';

import "./App.css";

function App(props) {
  const [status, setStatus] = useState("Login");
  const [search, setSearch] = useState({ term: "" });
  useEffect(() => {
    if (localStorage.length !== 0) {
      setStatus("Logout");
    }
  });
  console.log("local", localStorage);

  const handleClick = () => {
    if (status === "Logout") {
      localStorage.clear();
      setStatus("Login");
      window.location.href = "/";
    }
  };

  const handleChange = e => {
    e.preventDefault();
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    //logic here
  };
  return (
    <div className="App">
      <header className="App-header">
        <ul id='nav' style={{ listStyle: "none", display: "flex" }}>
          <li>
            <Link
              style={{ textDecoration: "none", color: "whitesmoke" }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li><Link to='/NewRequest'>Request</Link></li>
          <li>
            <input
              style={{ marginLeft: "2rem", marginTop: '0.5rem' }}
              onChange={handleChange}
              value={search.term}
              type="text"
              name="term"
              placeholder="Search"
            />
            <button style={{ marginLeft: "1rem" }} onSubmit={handleSubmit}>
              Search
            </button>
          </li>
          <li>
            {" "}
            <Link
              style={{
                textDecoration: "none",
                color: "whitesmoke",
                marginLeft: "2rem"
              }}
              to="/Login"
              onClick={handleClick}
            >
              {status}
            </Link>
          </li>
          <li>
            <Link>Sign Up</Link>
            <ul>
              <li><Link to='/ParentSignUp'>Parent</Link></li>
              <li><Link to='/VolunteerSignUp'>Volunteer</Link></li>
            </ul>
          </li>
        </ul>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/ParentSignUp" component={ParentSignUpForm} />
        <Route path="/VolunteerSignUp" component={VolunteerSignUpForm} />
        <PrivateRoute exact path="/Request/:id">
          <RequestCard />
        </PrivateRoute>
        <PrivateRoute path='/NewRequest'><NewRequest/></PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
