import {SIGNUP_SUCCESS,SIGNUP_FAIL} from "../actions/actionTypes";

const initialState = {
    signUPError : null
    
    
}

export default (state=initialState,action) => {
    switch(action.type){
        case SIGNUP_SUCCESS:
        return {
            ...state,
            signUPError : null
           
        } 
       case SIGNUP_FAIL :
        return {
            ...state,
            signUPError : action.err
        }
        default :
        return state
    }

}