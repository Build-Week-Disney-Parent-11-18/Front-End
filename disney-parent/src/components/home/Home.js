import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRequest } from "../../actions";
import { Link } from "react-router-dom";

const Home = props => {
  const { getRequest } = props;
  let searchTerm = '';
  useEffect(() => {
    getRequest();
  }, []);
  const fullList = () => {
    return (
      <>
        {props.error && <p>{props.error}</p>}
        {props.request
          ? props.request.map(req => {
              return (
                <div
                  style={{
                    backgroundColor: "whitesmoke",
                    width: "45%",
                    margin: "0 auto",
                    marginTop: "1rem",
                    borderRadius: "1rem"
                  }}
                  key={req.id}
                  >
                  <h1>{req.description}</h1>
                  <h4>Place: {req.meeting_place}</h4>
                  <p>
                    Time: {req.meeting_time} | # of Kids: {req.number_of_kids}
                  </p>
                  <p style={{ marginBottom: "2rem" }}>
                    Created: {req.created_at} | Updated: {req.updated_at}
                  </p>
                  <Link to={`/Request/${req.request_id}`}>
                    <button
                      style={{
                        backgroundColor: "blue",
                        color: "whitesmoke",
                        padding: "0.8rem",
                        borderRadius: "1rem",
                        marginBottom: "1rem"
                      }}
                    >
                      View
                    </button>
                  </Link>
                </div>
              );
            })
          : console.log("state", props)}
      </>
    );
  };
  try {
    searchTerm = props.location.state.term;
  } catch (error) {
    return fullList();
  }

  //console.log('term1',searchTerm)
  let place = props.request.filter(
    filter => filter.meeting_place === searchTerm
  );
  

  const foundSearch = () => {
    return (
      <>
        {place
          ? place.map(req => {
              return (
                <div
                  style={{
                    backgroundColor: "whitesmoke",
                    width: "45%",
                    margin: "0 auto",
                    marginTop: "1rem",
                    borderRadius: "1rem"
                  }}
                  key={req.id}
                >
                  <h1>{req.description}</h1>
                  <h4>Place: {req.meeting_place}</h4>
                  <p>
                    Time: {req.meeting_time} | # of Kids: {req.number_of_kids}
                  </p>
                  <p style={{ marginBottom: "2rem" }}>
                    Created: {req.created_at} | Updated: {req.updated_at}
                  </p>
                  <Link to={`/Request/${req.request_id}`}>
                    <button
                      style={{
                        backgroundColor: "blue",
                        color: "whitesmoke",
                        padding: "0.8rem",
                        borderRadius: "1rem",
                        marginBottom: "1rem"
                      }}
                    >
                        View
                    </button>
                  </Link>
                </div>
              );
            })
          : console.log("state", props)}
      </>
    );
  };
 
  if (props.isGetting) return <h2>Loading</h2>;

  if (searchTerm === undefined) {
    console.log("term2", searchTerm);
    return fullList();
  } else {
    if(place.length === 0){
      return(<div
        style={{
          backgroundColor: "whitesmoke",
          width: "45%",
          margin: "0 auto",
          marginTop: "1rem",
          borderRadius: "1rem"
        }}
      >
        <h1 style={{ margin: "0 auto" }}>Search Term Not Found</h1>
        <Link
          style={{ textDecoration: "none", color: "blue" }}
          to={{
            pathname: "/",
            state: ""
          }}
        >
          Home
        </Link>
      </div>);
    }else{
      return foundSearch();
    }
  }
};

const mapStateToProps = state => {
  return {
    request: state.request,
    isGetting: state.isGetting,
    error: state.error
  };
};

export default connect(mapStateToProps, { getRequest })(Home);