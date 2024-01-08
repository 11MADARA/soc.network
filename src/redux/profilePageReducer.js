import { profileApi } from "../components/profile/profileApi";


const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";

export const add_PostActionCreator = () => ({
  type: ADD_POST
})

export const update_Post_TextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text: text
})


export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})
export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status: status
})


let initialState = {
  posts: [
    { content: "hello guyZ", likes: "15" },
    { content: "Durex xuynya", likes: "99" },
    { content: "BimBimBamBAm", likes: "20" }
  ],
  newPostText: "add new post here =>",
  userProfile: null,
  status:""
};

let ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        content: state.newPostText,
        likes: 0,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: ""
      }
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.profile
      }
      case SET_USER_STATUS:
      return {
        ...state,
        status:action.status
      }
    default:
      return state;
  }
}

export const getUserProfileTC = (userId) => {
  return (dispatch) => {
    profileApi.getProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response.data))
      })
  }
}
export const getUserStatusTC = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId)
      .then(response => {
        dispatch(setUserStatus(response.data))
      })
  }
}
export const updateUserStatusTC = (status) => {
  return (dispatch) => {
    profileApi.updateStatus(status)
      .then(response => {
        if(response.data.resultCode===0){
          dispatch(setUserStatus(status))
        }
      })
  }
}
export default ProfileReducer;