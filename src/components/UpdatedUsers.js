import React, { Component } from 'react'
import User from "./User";
import {connect} from "react-redux";

 class UpdatedUsers extends Component {

  render() {
      
    const {users,usersLoading} = this.props;
    const x = Date.now()-86400000;
     return (
       <div className ="col-12 mt-2">
       <div className="col-12 col-sm-6 mx-auto ">
        <h1 className ="bg-danger text-white mb-3 text-center rounded" 
        >UPDATED USERS</h1></div>

           {
               
               
                 usersLoading?
                 <div className="col-12 col-sm-6 mx-auto ">
                   <div className="spinner-border" role="status">
                     <span className="sr-only">Loading...</span>
                   </div>
                 </div>
                 :    
               users.filter(user=>!user[1].isTrash&&user[1].updatedDate>x)
               .map(user=>{
                 
                 
                   return(
                    <User
                    key = {user[0]}
                    id = {user[0]}
                    name = {user[1].name}
                    department ={ user[1].department}
                    salery = {user[1].salery}
                    isTrash={user[1].isTrash}
                    
                    />
                   )
                 
               })                            
                 }
         </div>
       )
    
  }
}  
const mapStateToProps = state => ({
  users : state.users.list,
  usersLoading: state.loading['USERS'] 
})

export default connect(mapStateToProps)(UpdatedUsers);
