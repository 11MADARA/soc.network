import React from "react";
import s from "./post.module.css";
function Post(props) {
  return <div className={s.item}>
    <img src="https://i.pinimg.com/736x/40/6f/fc/406ffcbdf1c7e60d2a4f038e185f63a1.jpg"/>
    {props.content}
    <button>{props.likes} like</button>
  </div>
}
export default Post;