import React, { Component } from 'react'
import { connect } from 'react-redux';
import { side} from '../store/actions';
import {Link} from "react-router-dom";
class SideNavbar extends Component {
  state = {
    screen : window.innerWidth
  }
  sideBarOpen=(isOpen)=>{
    if(isOpen)
        return 40
    else
        return 0

  }
  change = ()=>{
    this.setState(()=>
    {return {screen : window.innerWidth}}
   
   )
  }

  render() {
    const {isOpen,side,trash} = this.props;
    const {screen} = this.state 
    window.addEventListener("resize",this.change)
    
    return(
        <div className="  fixed-top d-flex sidebar " 
        style={screen<578?{width:`${this.sideBarOpen(isOpen)}%`}:{width:"15%"}}>
        
        <div className="navbar-nav px-2">
        <span className="navbar-brand mt-1 ml-auto d-sm-none" style={{color:"white",cursor:"pointer"}}
          onClick ={isOpen?side:null}>X</span>
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item " style={{marginTop:"100%"}}>
              <Link to="/add"  >ADD USER</Link><hr/>
            </li>
            <li className="nav-item ">
              <Link to="/newUsers">NEW USERS</Link><hr/>
            </li>
            <li className="nav-item ">
              <Link to="/updatedUsers">UPDATED USERS</Link><hr/>
            </li>

            <li className="nav-item " style={{marginTop:"40%"}}>
              <Link to="/trashbox" ><span>TRASH BOX</span>
              {trash?<span className="badge badge-light ml-2 badge-3em">{trash}</span>:null}
              </Link>
            </li>
          </ul>
          </div>  
        </div> 
    )
  }
}
const mapStateToProps = state => ({
    
  isOpen : state.isOpen.isOpen,
  trash : state.users.trash
  
  
})

const mapDispatchToProps = dispatch => ({
  side : ()=> dispatch(side()),


})
export default connect(mapStateToProps, mapDispatchToProps)(SideNavbar);

