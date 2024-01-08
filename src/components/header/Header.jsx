import React, { useEffect } from "react";
import a from "./Header.module.css";
import logo from "../../logo.png"
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { LogoutTC } from "../../redux/authReducer";
import { connect } from "react-redux";

const Header = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.isAuth) {
        navigate("/profile");
    }
  }, [props.isAuth]);

  return (
    <header className={a.header}>
      <button className={a.logout} onClick={props.LogoutTC}>logout</button>
      <img className={a.img} src={logo} />
      <div className={a.login}>
        {props.isAuth ? props.login :
          <NavLink to="/login"><button className={a.logout}>login</button></NavLink>}
      </div>
    </header>
  );
};

export default connect(null, { LogoutTC })(Header);