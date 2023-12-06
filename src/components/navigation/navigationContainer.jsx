import React from "react";
import Nav from "./navigation";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
  return{
    dialogs:state.dialogsPage.dialogs
    }
}

let mapDispatchToProps=(dispatch)=>{
  return{

  }
}

const NavContainer=connect(mapStateToProps, mapDispatchToProps)(Nav)
export default NavContainer;