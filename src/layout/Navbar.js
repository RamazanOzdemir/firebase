import React from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { side,logOut } from '../store/actions';
//import firebase from "../config/fbConfig"
//import PropTypes from 'prop-types'


const Navbar = (props)=>{
    
    const logOut =(loginUser)=>{
        props.logOut(loginUser)
        window.href="/"
    }
    const {side,loginUser} = props

    return(
        
       <div className="col-12 border border-dark fixed-top myheader px-0">
        <nav className="navbar-nav navbar-expand bg-dark navbar-dark  pr-3 myheader ">
           <span className="navbar-nav mr-2 bg-light  my-auto fas fa-ellipsis-v size-3 fa-2x d-sm-none" 
            onClick={side} style={{cursor:"pointer"}}
            ></span>
            <a href="/" className="navbar-brand my-auto ml-sm-5 ">Home Page</a>
            <div className="collapse navbar-collapse" >
            <ul className="navbar-nav ml-auto ">
                <li className="nav-item active">
                <Link to = "/" className = "nav-link">Home</Link>
                </li>
                <li className="nav-item active">
                <Link to = "/add" className = "nav-link">Add User</Link>
                </li>
                <li className="nav-item active">
                <a href="/" onClick={logOut.bind(this,loginUser)}  className = "nav-link">Log Out</a>
                </li>
            
            </ul>
            </div>
        
        </nav>
        </div>
    )
}
const mapStateToProps = state => ({
    
    loginUser : state.loginUser.loginUser
})
  
const mapDispatchToProps = dispatch => ({
    side : ()=> dispatch(side()),
    logOut : id => dispatch(logOut(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
