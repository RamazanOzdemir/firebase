import {createStore ,applyMiddleware, compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import loadingReducer from './reducers/loading';
import usersReducer from './reducers/users';
import authReducer from './reducers/auth';
import signinReducer from './reducers/signup';
import sideReducer from './reducers/side';
//import {getFirestore,reduxFirestore} from "redux-firestore"
import {firebaseReducer,getFirebase,reactReduxFirebase} from "react-redux-firebase"
import fbConfig from "../config/fbConfig"

//import {reduxFirestore,getFirestore} from "redux-firestore";
//import {reactReduxFirebase,getFirebase} from "react-redux-firebase";
//import fbConfig from "../config/fbConfig"
// reducerleri türüne göre ayır.


const rootReducer = combineReducers({
  
    login : authReducer,

    isOpen : sideReducer,
    loading : loadingReducer,
    signup : signinReducer,
    users: usersReducer,
    firebase :firebaseReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




export default () =>  createStore(rootReducer, 
    composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase})),
    
    reactReduxFirebase(fbConfig,{attachAuthIsReady:true})
    )
    );

// chrome'a şu eklentiyi ekle =>>>


// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

//export default () =>  createStore(rootReducer,applyMiddleware(thunk));