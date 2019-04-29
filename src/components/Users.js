import React, { Component } from 'react'
import User from "./User";
import { connect } from 'react-redux';


 class Users extends Component {

  render() {
      
      const {users, usersLoading } = this.props;
 

      return (
        <div className="col-12 mt-2">
          <div className="col-12 col-sm-6 mx-auto ">
            <button className ="btn btn-info btn-block" onClick={this.firebase}>FIREBASE</button>
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
  usersLoading: state.loading['USERS'] 
  
  
})

export default connect(mapStateToProps)(Users);
