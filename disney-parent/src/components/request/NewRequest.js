import React, { useState } from "react";
import axiosWithAuth from "../login/Auth";
import { useHistory } from "react-router-dom";


const NewRequest = props => {
  const home = useHistory();
  const [newReq, setNewReq] = useState({
    user_id: localStorage.loggedInUser_id,
    meeting_place: "",
    meeting_time: "",
    number_of_kids: 0,
    description: ""
  });

  console.log('user', newReq.user_id);

  const handleChange = e => {
    e.preventDefault();

    setNewReq({
      ...newReq,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
        .post(`/users/${newReq.user_id}/requests`, {...newReq})
        .then(res =>{
            console.log(res)
            
        })
        .catch(err => console.log(err))
        home.push('/');
  };

  return (
    <div style={{width: '20%', margin: '0 auto', marginTop:'2rem'}}>
      <form onSubmit={handleSubmit}style={{display: 'flex', flexDirection: 'column'}}>
        Description
        <input
          type="text"
          name="description"
          placeholder="Stroller passes"
          value={newReq.description}
          onChange={handleChange}
          style={{marginBottom: '1rem', fontSize:'1.2rem'}}
        />
        Time
        <input
          type="time"
          name="meeting_time"
          placeholder="10:45:00"
          value={newReq.meeting_time}
          onChange={handleChange}
          style={{marginBottom: '1rem', fontSize:'1.2rem'}}
        />
        Number of Kids
        <input
          type="number"
          name="number_of_kids"
          placeholder="0"
          value={newReq.number_of_kids}
          onChange={handleChange}
          style={{marginBottom: '1rem', fontSize:'1.2rem'}}
        />
        Meeting Place
        <input
          type="text"
          name="meeting_place"
          placeholder="Mad Tea Party"
          value={newReq.meeting_place}
          onChange={handleChange}
          style={{marginBottom: '1rem', fontSize:'1.2rem'}}
        />
        <button type="submit">Post Request</button>
      </form>
    </div>
  );
};

export default NewRequest;
