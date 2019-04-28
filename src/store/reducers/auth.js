import {LOGIN_SUCCESS,CHECK_SUCCESS,LOGOUT_SUCCESS} from "../actions/actionTypes";

const initialState = {
    localId :"",
    registered : "",
    idToken : "",
    refreshToken : "",
    expiresIn : "" 
}

export default (state=initialState,action) => {
    switch(action.type){
       // case LOGIN_SUCCESS:
       // return {
       //     ...state,
            //loginUser : action.loginUser
           
      //  } 
        case CHECK_SUCCESS :
        console.log(action)
        return{
              ...state,
              localId : action.localId,
              registered : action.registered,
              idToken : action.idToken,
              refreshToken : action.refreshToken,
              expiresIn : action.expiresIn      
        }
       
        default :
        return state
    }

}