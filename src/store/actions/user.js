import { USERS_REQUEST, USERS_SUCCESS,USERS_FAIL,
    DELETE_REQUEST,DELETE_SUCCESS,DELETE_FAIL ,
    TRASH_REQUEST,TRASH_SUCCESS,
    RELOAD_REQUEST,RELOAD_SUCCESS,RELOAD_FAIL,
    ADD_REQUEST,ADD_SUCCESS,ADD_FAIL,
    UPDATE_REQUEST,UPDATE_SUCCESS,UPDATE_FAIL} from "./actionTypes";


const usersRequest = () => ({
    type:USERS_REQUEST
})

const usersSuccess = (user) => ({
    type: USERS_SUCCESS,
    users : Object.entries(user)
})
const usersFail = () =>({
    type : USERS_FAIL
})


export const getUsers = (uid) => (dispatch,getstate,{getFirebase}) => {
    dispatch(usersRequest()) 
    const firebase = getFirebase();
    
    firebase.database().ref("users/"+uid).once("value",snapShot=>{
        if(snapShot.val()!==null)
        dispatch(usersSuccess(snapShot.val()));
        else
        dispatch(usersFail());
    })  
}

// DELETE USER İÇİN 
const deleteRequest = () => ({
    type:DELETE_REQUEST
})

const deleteSuccess = (id) => ({
    type: DELETE_SUCCESS,
    id
})

const deleteFail = () => ({
    type: DELETE_FAIL
})

export const deleteUser = (uid,id) => (dispatch,getState,{getFirebase}) => {
    dispatch(deleteRequest());
    const databaseRef = getFirebase().database().ref("users/"+uid+"/"+id) ;
    databaseRef.update({isTrash:true},
        error => {
        if (error) {
          dispatch(deleteFail());
        } else {
            dispatch(deleteSuccess(id))
        }});

}
/// DELETE TRASH USER İÇİN
const deleteTrashRequest = () => ({
    type:TRASH_REQUEST
})

const deleteTrashSuccess = (id) => ({
    type: TRASH_SUCCESS,
    id
})

export const deleteTrashUser = (uid,id) => (dispatch,getState,{getFirebase}) => {
    dispatch(deleteTrashRequest())
    const databaseRef = getFirebase().database().ref("users/"+uid+"/"+id) ;
    databaseRef.remove();
    dispatch(deleteTrashSuccess(id))
    

}
// USER RELOAD

const reloadRequest = () => ({
    type: RELOAD_REQUEST
})

const reloadSuccess = (id) => ({
    type: RELOAD_SUCCESS,
    id
})

const reloadFail = () => ({
    type: RELOAD_FAIL
})

export const reloadUser = (uid,id) => (dispatch,getState,{getFirebase}) => {
    dispatch(reloadRequest());
    const databaseRef = getFirebase().database().ref("users/"+uid+"/"+id) ;
    databaseRef.update({isTrash:false},
        error => {
        if (error) {
          dispatch(reloadFail());
        } else {
            dispatch(reloadSuccess(id))
        }});
    
    
 
}

// ADD USER

const addRequest = () => ({
    type: ADD_REQUEST
})

const addSuccess = (id,newUser) => ({
    type: ADD_SUCCESS,
    id,
    newUser
})

const addFail = () => ({
    type: ADD_FAIL
})
export const addUser = (uid,newUser) => (dispatch,getstate,{getFirebase}) => {
    
     dispatch(addRequest());
      const firebase = getFirebase()
     const keyNewUser = firebase.database().ref().child('users').push().key;
     const userRef =firebase.database().ref("users/"+uid+"/"+keyNewUser);
     userRef.set(newUser,
        error => {
        if (error) {
            dispatch(addFail());
        } else {
            dispatch(addSuccess(keyNewUser,newUser));
        }});
}

//Update User
const updateRequest = () => ({
    type: UPDATE_REQUEST
})

const updateSuccess = (id,newUser) => ({
    type: UPDATE_SUCCESS,
    id,
    name : newUser.name,
    department : newUser.department,
    salary : newUser.salary,
    updatedDate : newUser.updatedDate
})

const updateFail = () => ({
    type: UPDATE_FAIL
})

export const updatedUser = (uid,id,newUser) => (dispatch,getState,{getFirebase}) => {
    dispatch(updateRequest())
    const databaseRef = getFirebase().database().ref("users/"+uid+"/"+id) ;
    databaseRef.update(newUser,
        error => {
        if (error) {
            dispatch(updateFail());
        } else {
            dispatch(updateSuccess(id,newUser))
        }});
    ;

}