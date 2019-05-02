import React, { Component } from 'react';
import Users from "./components/Users";
import AddUser from "./forms/AddUser";
import Navbar from "./layout/Navbar";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import NotFound from "./pages/NotFound";
import './App.css';
import UpdatedUser from './forms/UpdatedUser';
import SideNavbar from "./layout/SideNavbar"
import TrashBox from './components/TrashBox';
import Login from './Login';
import NewUsers from "./components/NewUsers";
import UpdatedUsers from "./components/UpdatedUsers";
import {connect} from "react-redux";
import {getUsers} from "./store/actions"
class App extends Component {

componentDidMount = () => {
  const {firebase,getUsers} = this.props;
  getUsers(firebase.auth.uid);
}
  render() {    
    const {firebase} = this.props;
 
    const isLogin=firebase.auth.isEmpty;

              
    return(
     <Router>

     <div className="App"  >
      
       {
         
         isLogin?
         
         <div className="container-fluid mt-5">
           <div className="row  justify-content-center my-5">
             <Login/>
           </div>
         </div>
         
         :
         <div className="container-fluid">
         <div className="row" >
         <SideNavbar/>
         <Navbar title = "HOME PAGE" />
         <div className="w-100  border myheader"/>
         <Switch>
         <Route exact path="/" component ={Users}/>
         <Route exact path="/add" component ={AddUser}/>
         <Route exact path="/update/:id" component ={UpdatedUser}/>
         <Route exact path="/trashbox" component ={TrashBox}/>
         <Route exact path="/newUsers" component ={NewUsers}/>
         <Route exact path="/updatedUsers" component ={UpdatedUsers}/>
         <Route component = {NotFound}/>
         </Switch>

       
     </div>
         </div>
         }
     </div>
     </Router>
    )
  }
}
const mapStateToProps = state => ({

  firebase :state.firebase
})

const mapDispatchToProps = dispatch => ({
  getUsers : uid => dispatch(getUsers(uid))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
