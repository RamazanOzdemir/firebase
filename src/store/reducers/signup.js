import {SIGNUP_SUCCESS,SIGNUP_FAIL} from "../actions/actionTypes";

const initialState = {
    signUpError : null
    
    
}

export default (state=initialState,action) => {
    switch(action.type){
        case SIGNUP_SUCCESS:
        return {
            ...state,
            signUpError : null
           
        } 
       case SIGNUP_FAIL :
        return {
            ...state,
            signUpError : action.err
        }
        default :
        return state
    }

}