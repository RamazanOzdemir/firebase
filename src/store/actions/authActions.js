import {CHECK_REQUEST,CHECK_SUCCESS,CHECK_FAIL} from "./actionTypes"


const checkRequest = ()=>({
    type : CHECK_REQUEST
});

const checkSuccess = ()=>({
    type : CHECK_SUCCESS
});

const checkFail = err => ({
    type : CHECK_FAIL,
    err
});

export const userCheck =(email,password) =>( dispatch,getstate,{getFirebase}) => {
    dispatch(checkRequest());
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
     const errorCode = error.code;
     const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
         alert('Wrong password.');
         dispatch(checkFail("Wrong password"));
      }
      else {
        alert(errorMessage);
        dispatch(checkFail(errorMessage));
      }
      });
  
    dispatch(checkSuccess)
 
}

export const logOut = ()=> ( dispatch,getstate,{getFirebase}) => {

      const firebase = getFirebase();
      firebase.auth().signOut();
       
}