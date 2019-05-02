import React, { Component } from 'react';
import { connect } from 'react-redux';
import {userCheck,signUp} from './store/actions';
//import axios from "axios" 
class Login extends Component {
  state = {
        sign : false,
        email : "",
        password : "",
        password2 : "",
        registered : "",
        signUpError : ""
        
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
      const {email,password} = this.state
      
        const newSavedUser ={email,password,returnSecureToken:true}
        this.props.signUp(newSavedUser);
        this.setState(()=>({sign:false})) 
       
  
    }      
  
  control = (e)=>{
    e.preventDefault();
    const {email,password,password2} = this.state ;
    const ctrlEmail = email.includes("@") && email.includes(".",email.indexOf("@"));
    const ctrlPassword = password.includes("&")||password.includes("|")||password.includes("/")||
    password.includes("=")||password.includes("[")||password.includes("]")||password.length<6;
    console.log("ctrlEmail => "+ ctrlEmail + "ctrlPassword => " + ctrlPassword );
    if(!ctrlEmail)
      this.setState({signUpError:"Please enter a valid email."}); 
    else if(ctrlPassword)
      this.setState(()=>({signUpError:"Your password is greater than 6 characters and must not contain the characters '&' - '/' - '[' - ']' - '='. Please reissue your password !"}));
    else if(password !== password2)
      this.setState(()=>({signUpError:"Password repetition was wrong! Please check your password."}));
    else {
      this.signup()
      this.setState(()=>({signUpError:""}));
    }
      
  }  

  openSigninPage = (e)=>{
    e.preventDefault();
    this.setState({sign:true});
  }

  render() {
    const {email,password,password2,sign,signUpError} = this.state;
    const {loginError,signError} = this.props;
    return(
          !sign&& signError===null ?
              <div className=" border border-danger rounded col-sm-6 col-10 my-5">
                  <form onSubmit={this.addUser} className="my-2 mx-2" >
                  <div className="form-group">
                      {
                        loginError !==null?<div className="alert alert-danger">
                           <p className ="my-auto">{loginError}</p>
                        </div>
                        : null
                      }
                      <label htmlFor="email">User Name:</label>
                          <input
                          type = "email"
                          name = "email"
                          id = "idemail"
                          placeholder = "Enter Your Email"
                          className = "form-control"
                          aria-describedby="emailHelp" 
                          autoComplete="username"
                          value = {email}
                          onChange ={this.changeInput}      
                          />                        
                     </div>
                     <div className="form-group">
                      <label htmlFor="password">Password :</label>
                          <input
                          type = "password"
                          name = "password"
                          id = "idPassword"
                          placeholder = "Enter Password"
                          className = "form-control"
                          aria-describedby="passwordHelp" 
                          autoComplete="new-password"
                          value = {password}
                          onChange ={this.changeInput}      
                          /> 
                          <small id="passwordHelp" className="form-text text-muted">
                           your password must be more than six characters</small>                       
                     </div>        
                      <button className="btn btn-danger btn-block" onClick ={this.check}>LOG IN</button>
                      <button className="btn btn-info btn-block" onClick ={this.openSigninPage}>SIGN IN</button>
                  </form>
              </div>
        : 
        <div className=" border border-danger rounded col-sm-6 col-10 my-5">
                  <form onSubmit={this.addUser} className="my-2 mx-2" >
                  <div className="form-group">
                      {
                        signUpError !=="" || signError !== null ?
                        <div className = "alert alert-danger">
                          <p>{signUpError !== ""?signUpError:signError}</p>
                        </div>
                        : null
                      }
                      <label htmlFor="email">User Name:</label>
                          <input
                          type = "email"
                          name = "email"
                          id = "idemail"
                          placeholder = "Enter Your Email"
                          className = "form-control"
                          autoComplete="username"
                          value = {email}
                          onChange ={this.changeInput}      
                          />                        
                     </div>
                     <div className="form-group">
                      <label htmlFor="password">Password :</label>
                      
                          <input
                          type = "password"
                          name = "password"
                          id = "idPassword"
                          placeholder = "Enter Password"
                          className = "form-control"
                          autoComplete="new-password"
                          value = {password}
                          onChange ={this.changeInput}      
                          />                        
                     </div>  
                     <div className="form-group">
                      <label htmlFor="password2">Password Again :</label>
                          <input
                          type = "password"
                          name = "password2"
                          id = "idPassword2"
                          placeholder = "Enter Password"
                          className = "form-control"
                          aria-describedby="passwordHelp" 
                          autoComplete="new-password"
                          value = {password2}
                          onChange ={this.changeInput}      
                          /> 
                          <small id="passwordHelp" className="form-text text-muted">
                           your password must be more than six characters</small>                       
                     </div>                          
                                     
                      <button className="btn btn-info btn-block" onClick ={this.control}>SIGN UP</button >
                  </form>
              </div>
          
   )
  }
}

const mapStateToProps = state =>({
  loginError : state.login.loginError,
  signError : state.signup.signUpError
})
const mapDispatchToProps = dispatch => ({
  userCheck : (email,password)=> dispatch(userCheck(email,password)),
  signUp : user => dispatch(signUp(user)) 


})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
 