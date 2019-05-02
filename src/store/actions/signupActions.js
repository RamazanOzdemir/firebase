import axios from "../../layout/AxiosInstance";
import {SIGNUP_REQUEST,SIGNUP_SUCCESS,SIGNUP_FAIL,SAVED_USERS} from "./actionTypes"


const signupRequest = ()=>({
    type : SIGNUP_REQUEST
})

const signupSuccess = ()=>({
    type : SIGNUP_SUCCESS,
    
})

const signupFail = err=> ({
    type : SIGNUP_FAIL,
    err
})

export const signUp = newSaved=> (dispatch,getState,{getFirebase}) =>{
    dispatch(signupRequest())
    const firebase = getFirebase();
    const {email,password} = newSaved;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
        const errorCode = error.code;
        var errorMessage = error.message;
         if (errorCode === 'auth/weak-password') {
            dispatch(signupFail('The password is too weak.'));
        } 
        else {
             dispatch(signupFail(errorMessage));
        }
        });
    dispatch(signupSuccess());

}

export const getSavedUser = () => dispatch =>{
    axios.get(`/savedUsers/`)
    .then( resp => dispatch ({
        type : SAVED_USERS,
        savedUsers : resp.data
    }))
}