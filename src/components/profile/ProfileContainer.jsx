import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile , getUserProfileTC,getUserStatusTC,updateUserStatusTC} from "../../redux/profilePageReducer";
import { useParams } from 'react-router-dom';
import { withRedirect } from "../../HOC/withNavigate";
import { compose } from "redux";

export function withRouter(Children){
  return(props)=>{

     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
} 

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId=this.props.match.params.userId;
    if(!userId){
      userId=30456;
    }
    debugger;
   this.props.getUserProfileTC(userId);
   this.props.getUserStatusTC(userId);
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatusTC}/>
    )
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.userProfile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
})


export default compose(
  connect(mapStateToProps, { setUserProfile, getUserProfileTC,getUserStatusTC,updateUserStatusTC }),
  withRouter,
  withRedirect
)(ProfileContainer);

