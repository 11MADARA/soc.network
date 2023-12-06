import React from "react";
import { NavLink } from "react-router-dom";
import s from "./dialoge.module.css"
const Dialoge=(props)=>{
    let path="/dialoges/"+props.id;
    return<div>
      <img className={s.img} src={props.avaImg}/>
      <NavLink className={s.item} to={path}>{props.name}</NavLink></div>
  }
  export default Dialoge;