import React from "react";
import Post from "./post/post";
import s from "./myPosts.module.css"
function MyPosts(props) {


  let PostsElement = props.posts.map(p => <Post content={p.content} likes={p.likes} />);
  let newPostElement = React.createRef();
  let AddPost = () => {
    props.AddPost()
  }

  let onTextChange = () => {
    let Text = newPostElement.current.value;
    props.onTextChange(Text)
  }
  return <div>
    <div className={s.item}>
      <div>new post:</div>
      <textarea onChange={onTextChange} ref={newPostElement} value={props.newPostText} />
      <button onClick={AddPost}>publish</button>
    </div>
    <div className={s.item}>
      my posts:
    </div>
    {PostsElement}
  </div>
}
export default MyPosts;