import React, { useState, useEffect} from "react";
import axios from 'axios';

const CommentSection = (props) => {

    const [commentList, setCommentList] = useState([]);

    useEffect( () => {
        console.log("in useefect")
        axios()
            .get(`https://disneyparentdb.herokuapp.com/api/comment/1`) //i dont think we have a endpoint to get from a specific post, I'm just grabbing the first comment here
            .then(res => {
                console.log(res.data)
            setCommentList()
            })
            .catch(err => console.log(err))
    }, []);
    const editComment= () => {
        axios()
            .get(`https://disneyparentdb.herokuapp.com/api/users/:userid/requests/:requestid/comments`) //need api documentation
            .then(res => {
                console.log("COMMENTS", res.data)
                props.setNewCom({
                    body: res.data.body
                })
            })
            .catch(err => console.log(err))
            props.setEditCom(true);
    }

    const deleteCom = () => {
        // console.log("ID", id);
        axios()
          .delete(`https://disneyparentdb.herokuapp.com/api/users/:userid/requests/:requestid/comments`)
          .then(res => {
            console.log("ADD", res.data);
            props.setNewGetCom(true);
          })
          .catch(err => console.log(err));
      };


    return(
        <div>
            {/* <p>{commentList.username} ({commentList.firstName} {commentList.lastName}): {commentList.comment}</p> */}
        

            {/* {commentList.map( comment => {
                return <p>{comment}</p>
            })} */}


            {/* {props.com.map(comment => {
                return <button onClick={() => editCom(comment.id)}/>
            })}
             */}
        </div>
    )
}

export default CommentSection
      