import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../login/Auth";
import { connect } from "react-redux";
import { getComments } from "../../actions";

const CommentSection = props => {
  const [commentList, setCommentList] = useState([{
      comment: "",
      comment_id: 0,
      created_at: "",
      request_id: 1,
      updated_at: "",
      user_id: 0
    }]);

  useEffect(() => {
    console.log("in useefect");
    getComments(props.id);
        console.log('getcomments',)
      
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

  const deleteCom = () => {
    // console.log("ID", id);
    axios()
      .delete(
        `https://disneyparentdb.herokuapp.com/api/users/:userid/requests/:requestid/comments`
      )
      .then(res => {
        console.log("ADD", res.data);
        props.setNewGetCom(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
       {props.request ?
          props.request.map(res => {
            return(
              <div key = {res.id}>
                <p>{res.comment}</p>
              </div>
            );
          }): null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    request: state.request,
    isGetting: state.isGetting,
    error: state.error
  };
};

export default connect(mapStateToProps, { getComments })(CommentSection);
