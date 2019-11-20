import React,{useEffect, useState} from 'react';
import axiosWithAuth from '../login/Auth';
import {useParams} from 'react-router-dom';

const RequestCard = (...rest) =>{
  const [request, setRequest]= useState({
    created: '',
    description: '',
    place: '',
    time: '',
    kids: 0,
    req_id: 0,
    updated: '',
    user_id: 0
  })
  const {id} = useParams();
    useEffect(()=>{
     
      axiosWithAuth()
      .get(`/requests/${id}`)
      .then(res => {
        const {data} = res;
        console.log('reqID',data)
        
        setRequest({
          created: data.created_at,
          description: data.description,
          place: data.meeting_place,
          time: data.meeting_time,
          kids: data.number_of_kids,
          req_id: data.request_id,
          updated: data.updated_at,
          user_id: data.user_id
        })
      },[])
      .catch(err => console.log(err))
    })
    return(
        <div style={{
            backgroundColor: "whitesmoke",
            width: "45%",
            margin: "0 auto",
            marginTop: "1rem",
            borderRadius: '1rem'
          }}  >
            <h1>{request.description}</h1>
            <h4>Place: {request.place}</h4>
            <p>Time: {request.time} | # of Kids: {request.kids}</p>
            <p style={{ marginBottom: "2rem" }}>Created:  {request.created}| Updated: {request.update}</p>
            <button style={{
              backgroundColor: 'blue',
              color: 'whitesmoke',
              padding: '0.8rem',
              borderRadius: '1rem',
              marginBottom: '1rem'
              }}>View</button>
          </div>
    );
};

export default RequestCard;
