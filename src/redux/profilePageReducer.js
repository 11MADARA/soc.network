const ADD_POST="ADD-POST";
const UPDATE_POST_TEXT="UPDATE-POST-TEXT";

export const add_PostActionCreator=()=>({
    type:ADD_POST
  })

export const update_Post_TextActionCreator=(text)=>({
    type:UPDATE_POST_TEXT,
    text:text
  })

  let initialState={
    posts:[
        {content:"hello guyZ",likes:"15"},
        {content:"Durex xuynya",likes:"100"},
        {content:"BimBimBamBAm",likes:"20"}
      ],
    newPostText:"add new post here =>"
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
        default:
            return state;
    }
}
export default ProfileReducer;