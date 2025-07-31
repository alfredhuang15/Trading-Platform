import { error } from "console";
import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes";

const initialState = {
    user:null,
    loading:false,
    error:null,
    jwt:null
}

const authRedecer=(state=initialState,action) => {
    switch(action.type) {
        case REGISTER_REQUEST:
            return{...state, loading:true, error:null}

        case REGISTER_SUCCESS:
            return {...state, loading:false, error:null, jwt:action.payload}

        case REGISTER_FAILURE:
            return {...state, loading:false, error:action.payload}

        default:
            return state;

        
    }
}

export default authRedecer