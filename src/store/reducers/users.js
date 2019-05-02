//action type ları string yerine actionTypes içinden import edeceğiz.

import { USERS_SUCCESS,DELETE_SUCCESS ,TRASH_SUCCESS,RELOAD_SUCCESS,ADD_SUCCESS,UPDATE_SUCCESS} from "../actions/actionTypes";

const initialState = {
    list : [],
    trash : 0
}

export default (state = initialState,action) => {
    switch (action.type){

        case USERS_SUCCESS: 
        return {
            ...state,
            list : action.users,
            trash : action.users.filter(user =>user[1].isTrash ).length
        }     
        case DELETE_SUCCESS:    
        return{
          ...state,
          list : state.list.map(user=>user[0]===action.id?[user[0],{...user[1],isTrash:true}]: user),
          trash : state.trash + 1 
        }
        case RELOAD_SUCCESS :
        return {
          ...state,
          list : state.list.map(user=>user[0]===action.id?[user[0],{...user[1],isTrash:false}]: user),
          trash : state.trash - 1
        }
        case UPDATE_SUCCESS:
        return {
          ...state,
          list : state.list.map(user =>user[0] === action.id?[user[0],{...user[1],name:action.name,department:action.department,salary:action.salary,updatedDate:action.updatedDate}]: user)
        }
        case ADD_SUCCESS:
        return {
          ...state,
          list : [...state.list,[action.id,action.newUser]]}
        case TRASH_SUCCESS : 
        return {
          ...state,
          list : state.list.filter(user =>user[0] !== action.id)
        }
       default :
       return state
    } 
}