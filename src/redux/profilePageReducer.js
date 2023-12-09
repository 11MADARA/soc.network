const ADD_POST="ADD-POST";
const UPDATE_POST_TEXT="UPDATE-POST-TEXT";
const SET_USER_PROFILE="SET-USER-PROFILE";

export const add_PostActionCreator=()=>({
    type:ADD_POST
  })

export const update_Post_TextActionCreator=(text)=>({
    type:UPDATE_POST_TEXT,
    text:text
  })


  export const setUserProfile=(profile)=>({
      type:SET_USER_PROFILE,
      profile
  })


  let initialState={
    posts:[
        {content:"hello guyZ",likes:"15"},
        {content:"Durex xuynya",likes:"100"},
        {content:"BimBimBamBAm",likes:"20"}
      ],
    newPostText:"add new post here =>",
    userProfile: null,
};

let ProfileReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_POST:
          let newPost={
            content:state.newPostText,
            likes:0,
          };
          return{
            ...state,
            posts:[newPost,...state.posts],
            newPostText:""
          } 
        case UPDATE_POST_TEXT:
          return{
            ...state,
            newPostText:action.text
          }
          case SET_USER_PROFILE:
          return{
            ...state,
            userProfile:action.profile
          }
        default:
            return state;
    }
}
export default ProfileReducer;