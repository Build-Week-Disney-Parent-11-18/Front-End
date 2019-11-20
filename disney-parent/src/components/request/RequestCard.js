import React, { useEffect, useState } from "react";
import axiosWithAuth from "../login/Auth";
import { useParams, useHistory } from "react-router-dom";
import CommentSection from '../comments/CommentSection';



const RequestCard = (props) => {
  const [req, setReq] = useState({
    created: "",
    description: "",
    place: "",
    time: "",
    kids: 0,
    req_id: 0,
    updated: "",
    user_id: 0
  });
  const { id } = useParams();

  // const getComments =()=>{
  //   axiosWithAuth()
  //     .get(`/requests/${id}/comments`)
  //     .then(res =>{
  //       console.log('num comments',res.data)
  //     })
  // }

  useEffect(() => {
    //window.location.reload(true);
    axiosWithAuth()
      .get(`/requests/${id}`)
      .then(res => {
        const { data } = res;
        console.log("reqID", data);

        setReq({
          created: data.created_at,
          description: data.description,
          place: data.meeting_place,
          time: data.meeting_time,
          kids: data.number_of_kids,
          req_id: data.request_id,
          updated: data.updated_at,
          user_id: data.user_id
        });
        
      },[])
      .catch(err => console.log(err));
      // axiosWithAuth()
      // .get(`/requests/${id}/comments`)
      // .then(res =>{
      //   console.log('num comments',res.data.comment) 
      // })
  });
  const home = useHistory();

  const deleteRequest = (e) =>{
    e.preventDefault()
    axiosWithAuth()
    .delete(`/requests/${req.req_id}`)
    .then(res =>{
      console.log('Request Deleted')
     home.push('/')
    })
  }
  

  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        width: "45%",
        margin: "0 auto",
        marginTop: "1rem",
        borderRadius: "1rem",
        padding: '1rem'
      }} 
    >
      <h1>{req.description}</h1>
      <h4>Place: {req.place}</h4>
      <p>
        Time: {req.time} | # of Kids: {req.kids}
      </p>
      <p style={{ marginBottom: "2rem" }}>
        Created: {req.created}| Updated: {req.update}
      </p>
      <ul style={{ display: "flex", listStyle: "none", justifyContent:'space-evenly' }}>
        <li>Comments:</li>
        <li>Comment</li>
        <li><button onClick={deleteRequest}>Delete Request</button></li>
      </ul>
      <div >
        <CommentSection id={id}/>
      </div>
    </div>

  );
};



export default RequestCard;
