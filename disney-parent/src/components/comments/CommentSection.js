import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../login/Auth";
import { connect } from "react-redux";
import { getComments } from "../../actions";

const CommentSection = props => {
  const [test, setTest] = useState([]);
  useEffect(() => {
    console.log('GetId',props.id)
    axiosWithAuth()
      .get(`/requests/${props.id}/comments`)
      .then(res => {
        console.log("numofcomments", res);
        setTest(...test, res.data);
      });
    // props.getComments(props.id);
  }, []);
  const editComment = () => {
    axios
      .get(
        `https://disneyparentdb.herokuapp.com/api/users/:userid/requests/${props.req_id}/comments`
      ) //need api documentation
      .then(res => {
        console.log("COMMENTS", res.data);
        props.setNewCom({
          body: res.data.body
        });
      })
      .catch(err => console.log(err));
    props.setEditCom(true);
  };

  const deleteCom = (e) => {
    console.log("ID", e);
    axiosWithAuth()
      .delete(`/comments/${e}`)
      .then(res => {
        console.log("ADD", res.data);
        //props.setNewGetCom(true);
      })
      .catch(err => console.log(err));
  };
  console.log("getcomments", test.length);
  if (test.length !== 0) {
    return (
      // <div>
      // <p>
      //   From User: {test.user_id}| {test.comment} | Time: {test.updated_at}{" "}
      //   <button onClick={deleteCom}>delete</button>
      // </p>
      // </div>
      <div>
        {test
          ? test.map(res => {
              return (
                <div key={res.id}>
                  <p>
                    From User: {res.user_id}| {res.comment} | Time:{" "}
                    {res.updated_at} <button onClick={()=>deleteCom(res.comment_id)}>delete</button>
                  </p>
                </div>
              );
            })
          : null}
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    request: state.request,
    isGetting: state.isGetting,
    error: state.error
  };
};

export default connect(mapStateToProps, { getComments })(CommentSection);
