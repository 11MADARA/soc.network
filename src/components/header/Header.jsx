import React from "react";
import a from "./Header.module.css";
import logo from "../../logo.png"
import { NavLink } from "react-router-dom";
 const Header=(props)=>{
  debugger;
    return <header className={a.header}>
        <img className={a.img} src={logo} />
        <div className={a.login}> 
        {props.isAuth?props.login:
        <NavLink to="/login"><button className={a.button}>login</button></NavLink>}
        </div>
      </header>
 }
 export default Header;