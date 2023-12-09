import React from "react";
import Description from "./aboutProfile/description";
import MyPostsContainer from "./myPosts/myPostsContainer";

 function Profile(props){ 
    return <div>
        <Description profile={props.profile}/>
        <MyPostsContainer />
      </div>
 }
 export default Profile;