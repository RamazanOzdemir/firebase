import React, { Component } from 'react';
import { connect } from 'react-redux';
import {userCheck,signUp} from './store/actions';
//import axios from "axios" 
class Login extends Component {
  state = {
        sign : false,
        email : "",
        password :"",
        registered :"",
        
  }
    
  changeInput = (e)=>{
        this.setState({
           [ e.target.name] : e.target.value
        })
  }

  check =(e) =>{
    e.preventDefault();
    const {email,password} = this.state

      this.props.userCheck(email,password)
  
  }


  signup = (e) =>{
      e.preventDefault();
      const {email,password} = this.state
       const newSavedUser ={email,password,returnSecureToken:true}
      this.props.signUp(newSavedUser);
      this.setState(()=>({sign:false})) 
  }      

  openSigninPage = (e)=>{
    this.setState({sign:true})
  }

  componentDidMount = ()=>{
      //this.props.getSavedUser();       
  }

  render() {
    const {email,password,sign} = this.state
 
    
    return(
          !sign?
              <div className=" border border-danger rounded col-sm-6 col-10 my-5">
                  <form onSubmit={this.addUser} className="my-2 mx-2" >
                  <div className="form-group">
                      <label htmlFor="email">User Name:</label>
                          <input
                          type = "email"
                          name = "email"
                          id = "idemail"
                          placeholder = "Enter Your Email"
                          className = "form-control"
                          aria-describedby="emailHelp" 
                          value = {email}
                          onChange ={this.changeInput}      
                          />                        
                     </div>
                     <div className="form-group">
                      <label htmlFor="password">Password :</label>
                          <input
                          type = "text"
                          name = "password"
                          id = "idPassword"
                          placeholder = "Enter Password"
                          className = "form-control"
                          value = {password}
                          onChange ={this.changeInput}      
                          />                        
                     </div>        
                      <button className="btn btn-danger btn-block" onClick ={this.check}>LOG IN</button>
                      <button className="btn btn-info btn-block" onClick ={this.openSigninPage}>SIGN IN</button>
                  </form>
              </div>
        : 
        <div className=" border border-danger rounded col-sm-6 col-10 my-5">
                  <form onSubmit={this.addUser} className="my-2 mx-2" >
                  <div className="form-group">
                      <label htmlFor="email">User Name:</label>
                          <input
                          type = "email"
                          name = "email"
                          id = "idemail"
                          placeholder = "Enter Your Email"
                          className = "form-control"
                          aria-describedby="emailHelp" 
                          value = {email}
                          onChange ={this.changeInput}      
                          />                        
                     </div>
                     <div className="form-group">
                      <label htmlFor="password">Password :</label>
                          <input
                          type = "text"
                          name = "password"
                          id = "idPassword"
                          placeholder = "Enter Password"
                          className = "form-control"
                          value = {password}
                          onChange ={this.changeInput}      
                          />                        
                     </div>                            
                                     
                      <button className="btn btn-info btn-block" onClick ={this.signup}>SIGN IN</button>
                  </form>
              </div>
          
   )
  }
}
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  userCheck : (email,password)=> dispatch(userCheck(email,password)),
  signUp : user => dispatch(signUp(user)) 


})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
 