import {CHECK_SUCCESS,CHECK_FAIL} from "../actions/actionTypes";

const initialState = {

   loginError : null
}

export default (state=initialState,action) => {
    switch(action.type){

        case CHECK_SUCCESS :
        console.log(action)
        return{
              ...state,
              loginError : null          
        }
        case CHECK_FAIL:
        console.log(action.err)
        return {
            ...state,
            loginError : action.err
        }
       
        default :
        return state
    }

}