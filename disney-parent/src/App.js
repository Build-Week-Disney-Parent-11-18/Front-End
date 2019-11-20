import React from 'react';
import ParentSignUpForm from './components/SignUp/ParentSignUpForm'
import VolunteerSignUpForm from './components/SignUp/VolunteerSignUpForm'

import './App.css';

function App() {
  return (
    <div className="App">
      <ParentSignUpForm/>
      <VolunteerSignUpForm/>
    </div>
  )
}
 
export default App;
