import React, { Component } from 'react'
import User from "./User";
import { connect } from 'react-redux';
import {getUsers} from "../store/actions/user";


 class Users extends Component {
  componentDidMount = () =>{
    const {getUsers,uid} = this.props;
    getUsers(uid);
  }
  render() {
      
      const {users, usersLoading } = this.props;
 

      return (
        <div className="col-12 mt-2">
          <div className="col-12 col-sm-6 mx-auto ">
            <h1 className="bg-danger text-white mb-3 text-center rounded">
              ALL USERS
            </h1>
            </div>

        { usersLoading ?
            <div className="col-12 col-sm-6 mx-auto ">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                       </div></div>
          : 
         

           users.filter(user =>!user[1].isTrash )
              .map(user =>{
                
                return (
                  <User
                    key={user[0]}
                    id={user[0]}
                    name={user[1].name}
                    department={user[1].department}
                    salary={user[1].salary}
                    isTrash={user[1].isTrash}
                  />
                );
              })
              
          }
        </div>
      );
                    
                
    
    
  }
}  
const mapStateToProps = state => ({
  users : state.users.list,
  isOpen : state.isOpen.isOpen,
  usersLoading: state.loading['USERS'], 
  uid : state.firebase.auth.uid
  
})

const mapDispatchToProps = dispatch => ({

  getUsers : uid => dispatch(getUsers(uid))
 
})

export default connect(mapStateToProps,mapDispatchToProps)(Users);
