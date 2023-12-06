import React from "react";
import s from "./navigation.module.css";
import Friend from "./friend/friend";
import { NavLink } from "react-router-dom";



function Nav(props) {
let eachFriend=props.dialogs.map(el=><Friend name={el.name} avaImg={el.avaImg} id={el.id}/> )

  return (
    <nav className={s.navigation}>
      <div ><NavLink to="/profile" className={navData => navData.isActive ? (s.active + ' ' + s.item) : s.item}>Profile</NavLink ></div>
      <div ><NavLink to="/dialoges" className={navData => navData.isActive ? (s.active + ' ' + s.item) : s.item}>Messages</NavLink ></div>
      <div ><NavLink to="/news" className={navData => navData.isActive ? (s.active + ' ' + s.item) : s.item}>News</NavLink ></div>
      <div ><NavLink to="/users" className={navData => navData.isActive ? (s.active + ' ' + s.item) : s.item}>Users</NavLink ></div>
      <div ><NavLink to="/music" className={navData => navData.isActive ? (s.active + ' ' + s.item) : s.item}>Music</NavLink ></div>
      <div ><NavLink to="/settings" className={navData => navData.isActive ? (s.active + ' ' + s.item) : s.item}>Settings</NavLink ></div>
      <div>
        <div className={s.friend} ><NavLink to="/friends" className={navData => navData.isActive ? (s.active + ' ' + s.item) : s.item}>Friends</NavLink ></div>
        <div className={s.BestFriends}>{eachFriend}</div>
      </div>
    </nav>
  );
}
export default Nav;