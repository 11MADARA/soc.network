import React from "react";
import Post from "./post/post";
import s from "./myPosts.module.css"
import NewPost from "./newPost/newPost";
function MyPosts(props) {


  let PostsElement = props.posts.map(p => <Post content={p.content} likes={p.likes} />);

  return<div> 
    <NewPost AddPost={props.AddPost} onTextChange={props.onTextChange}/>
    <div>
      my posts:
    </div>
    {PostsElement}
  </div>
}
export default MyPosts;