import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRequest } from "../../actions";
import {Link} from 'react-router-dom';

const Home = props => {
  const {getRequest} = props;
  //console.log('before',props)
  useEffect(() => { 
    getRequest();
  },[]);

  if (props.isGetting) return <h2>Loading</h2>;

  return (
    <>
      {props.error && <p>{props.error}</p>}
      {props.request
        ? props.request.map(req => {
            return(<div style={{
              backgroundColor: "whitesmoke",
              width: "45%",
              margin: "0 auto",
              marginTop: "1rem",
              borderRadius: '1rem'
            }} key={req.id} >
              <h1>{req.description}</h1>
              <h4>Place: {req.meeting_place}</h4>
              <p>Time: {req.meeting_time} | # of Kids: {req.number_of_kids}</p>
              <p style={{ marginBottom: "2rem" }}>Created: {req.created_at} | Updated: {req.updated_at}</p>
              <Link to={`/Request/${req.request_id}`} ><button style={{
                backgroundColor: 'blue',
                color: 'whitesmoke',
                padding: '0.8rem',
                borderRadius: '1rem',
                marginBottom: '1rem'
                }} 
                >View</button></Link>
            </div>);
          }):console.log('state',props)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    request: state.request,
    isGetting: state.isGetting,
    error: state.error
  };
};

export default connect(mapStateToProps, { getRequest })(Home);
