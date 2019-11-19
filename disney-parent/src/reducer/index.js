import {
    GET_REQUEST_START,
    GET_REQUEST_SUCCESS,
    GET_REQUEST_FAILURE
} from '../actions';

const initState = {
    request: [],
    isGetting: false,
    error: ''  
};

const reducer = (state = initState, {type, payload})=>{
    switch(type){
        case GET_REQUEST_START:
            return {...state,
                isGetting: true,
                error: ''
            };
        case GET_REQUEST_SUCCESS:
                return {...state,
                    request: payload,
                    isGetting: false,
                    error: ''
                };
        case GET_REQUEST_FAILURE:
                return {...state,
                    isGetting: false,
                    error: payload
                };

        default: return state;
    }
};

export default reducer;