import React from "react";
import s from "./friend.module.css"
import { NavLink } from "react-router-dom";
const Friend=(props)=>{
    let path="/friend/"+props.id;
    return<div className={s.object}>
        <img className={s.avaImg} src={props.avaImg}/>
        <NavLink className={s.name} to={path}>{props.name}</NavLink>
    </div>
}
export default Friend;