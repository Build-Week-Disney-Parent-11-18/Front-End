import axios from 'axios';


export const GET_REQUEST_START = 'GET_REQUEST_START';
export const GET_REQUEST_SUCCESS ='GET_REQUEST_SUCCESS';
export const GET_REQUEST_FAILURE = 'GET_REQUEST_FAILURE';


export const getRequest = () => dispatch =>{
    axios
      .get("https://disneyparentdb.herokuapp.com/api/requests")
      .then(res =>{
          dispatch({type: GET_REQUEST_SUCCESS, payload: res.data})
      })
      .catch(err =>{
        console.log('error', err.response);
        dispatch({type: GET_REQUEST_FAILURE,
        payload: `${err.response} ${err.response}`})
      });
};