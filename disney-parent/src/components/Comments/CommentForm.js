import React, { useState } from "react";
import CommentSection from "./CommentSection";
import {useHistory} from 'react-router-dom';
import axiosWithAuth from "../login/Auth";

const CommentForm = props => {
  const [comment, setComment] = useState('')
  const history = useHistory();
  const handleChanges = e => {
    setComment(
      e.target.value
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("click",localStorage.id)

    axiosWithAuth()
      .post(
        `/users/${localStorage.loggedInUser_id}/requests/${localStorage.id}/comments`,{comment}
      )
      .then(res => {
        console.log('Newcoment',res);
        setComment('');
        history.goBack();
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="body"
          value={comment.body}
          placeholder="type your comment here!"
          onChange={handleChanges}
        />
        <button type="submit">Add Comment</button>
        {/* {props.edit ? (
          <div>
            <button>Edit Comment</button>
            <button>Delete Comment</button>
          </div>
        ) : (
          <button type="submit">Add Comment</button>
        )} */}
      </form>
      <CommentSection />
    </div>
  );
};

export default CommentForm;