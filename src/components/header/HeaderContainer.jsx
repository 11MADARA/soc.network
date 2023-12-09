import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setUserData } from "../../redux/authReducer";
import { setUserProfile } from "../../redux/profilePageReducer";
class HeaderContainer extends React.Component{
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
    .then(response => {
      if(response.data.resultCode===0){
        let {id,login,email}=response.data.data;
        this.props.setUserData(id,login,email);


        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+id)
        .then(response=>{
            this.props.setUserProfile(response.data)
        })
      }
    }) 
  }
  render(){
    return<Header {...this.props}/>
  }
}
let mapStateToProps=(state)=>({
  isAuth:state.auth.isAuth,
  login:state.auth.login
});

export default connect(mapStateToProps,{setUserData,setUserProfile})(HeaderContainer);