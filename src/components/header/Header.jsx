import React from "react";
import a from "./Header.module.css";
import logo from "../../logo.png"
 const Header=()=>{
    return <header className={a.header}>
        <img className={a.img} src={logo} />
      </header>
 }
 export default Header;