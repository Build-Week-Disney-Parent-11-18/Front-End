import React from "react";
import axios from 'axios'

const ParentList = () => {
 
  const viewParent = id => {
    axios()
      .get("https://disneyparentdb.herokuapp.com/api/users/users/parents" + id)
      .then(res => {
        console.log("EDIT", res.data);
        props({
          id: res.data.id,
          name: res.data.name,
          age: res.data.age,
          email: res.data.email
        });
      })
      .catch(err => console.log(err));
    props.setEditFriend(true);
  };

  return (
    <div>
      {props.parents.map(p => {
        return (
          <div>
            <h2> View Parent List</h2>
            <h3>Parent Name: {p.name}</h3>
            <p>Parent DOB: {p.DOB}</p>
            <p>Parent Email: {p.email}</p>
            <p>Parent Phone Number: {p.phoneNum}</p>
        </div>

        )
      })}
    
      
       </div>
  );
};

export default ParentList;