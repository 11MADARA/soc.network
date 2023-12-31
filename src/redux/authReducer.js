import { headerApi } from "../components/header/headerApi";
import { profileApi } from "../components/profile/profileApi";
import { setUserProfile } from "./profilePageReducer";

const SET_USER_DATA="SET-USER-DATA";


  let initialState={
    login:null,
    userId:null,
    email:null,
    isFetching:false,
    isAuth:false,
};

let authReducer=(state=initialState,action)=>{
    switch(action.type){
          case SET_USER_DATA:
          return{
            ...state,
            ...action.data,
            isAuth:true,
          }
        default:
            return state;
    }
}
export default authReducer;

export const setUserData=(userId,login,email)=>({
  type:SET_USER_DATA,
  data:{userId,login,email}
})

export const isAuthProfileTC=()=>{
  return (dispatch)=>{
    headerApi.isAuth()
    .then(response => {
      if(response.resultCode===0){
        let {id,login,email}=response.data;
        dispatch(setUserData(id,login,email));
        profileApi.getProfile(id)
        .then(response=>{
            dispatch(setUserProfile(response.data))
        })
      }
    }) 
  }
}