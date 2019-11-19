import React from 'react';
import axios from 'axios';

const VolunteerList = () => {
    const viewVolunteer = id => {
        axios
        .get()
        .then(res => {
            console.log("EDIT", res.data);
            props({
                id: res.data.id,
                name: res.data.name,
                age: res.data.age,
                email: res.data.email
            })
        })
        .catch(err => console.log(err))
        props.setEditFriend(true);
    }

    return (
        <div>
            {props.volunteers.map( v => {
                return (
                    <div>
                     <h2> View Volunteer List</h2>
                     <h3>Volunteer Name: {v.name}</h3>
                     <p>Volunteer DOB: {v.DOB}</p>
                     <p>Volunteer Email: {v.email}</p>
                     <p>Volunteer Phone Number: {v.phoneNum}</p>
                     <p>Volunteer Average Cost: {v.avgPerChild}</p>
                     <p>Volunteer CPR Certified: {v.CPR_Certified}</p>
                    </div>

                )
            })}
        </div>
    )
}

export default VolunteerList;