import { add_PostActionCreator, update_Post_TextActionCreator } from "../../../redux/profilePageReducer";
import MyPosts from "./myPosts";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddPost: () => {
      dispatch(add_PostActionCreator());
    },
    onTextChange: (text) => {
      let action = update_Post_TextActionCreator(text);
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;