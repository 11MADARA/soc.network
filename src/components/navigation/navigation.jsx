import React from "react";
import s from "./navigation.module.css";
import Friend from "./friend/friend";
import { NavLink } from "react-router-dom";
import settingsIcon from "../../settings icon.jpg";
import profileIcon from "../../profile icon.png";
import messagesIcon from "../../message icon.avif";
import newsIcon from "../../news icon.jpg";
import usersIcon from "../../png-transparent-computer-icons-command-boss-baby-background-cleaning-silhouette-business.png"
import musicIcon from "../../music icon.png"
function Nav(props) {
  

  return (
    <nav className={s.navigation}>
      <div className={s.marg}>
        <img src={profileIcon} className={s.img} />
       <NavLink to="/profile" className={navData => navData.isActive ? (s.active + ' ' + s.item) : s.item}>Profile</NavLink >
      </div>
      <div className={s.marg}>
        <img src={messagesIcon} className={s.img} />
        <NavLink to="/dialoges" className={navData => navData.isActive ? (s.active + ' ' + s.item) : s.item}>Chats</NavLink >
      </div>
      <div className={s.marg}>
        <img src={newsIcon} className={s.img} />
        <NavLink to="/news" className={navData => navData.isActive ? (s.active + ' ' + s.item) : s.item}>News</NavLink >
      </div>
      <div className={s.marg}>
        <img src={usersIcon} className={s.img} />
        <NavLink to="/users" className={navData => navData.isActive ? (s.active + ' ' + s.item) : s.item}>Users</NavLink >
      </div>
      <div className={s.marg}>
        <img src={musicIcon} className={s.img} />
        <NavLink to="/music" className={navData => navData.isActive ? (s.active + ' ' + s.item) : s.item}>Music</NavLink >
      </div>
      <div className={s.marg}>
        <img src={settingsIcon} className={s.img} />
        <NavLink to="/settings" className={navData => navData.isActive ? (s.active + ' ' + s.item) : s.item}>Settings</NavLink >
      </div>
      
    </nav>
  );
}
export default Nav;