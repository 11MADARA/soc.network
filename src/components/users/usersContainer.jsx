import { connect } from "react-redux";
import { FollowAC , UnfollowAC, setCurrentPageAC, setUsersAC, setUsersCountAC} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./users";
class UsersCont extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                debugger;
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            })
    }
    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)

            })
    }
    render = () => {
        return <Users usersCount={this.props.usersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      onPageChange={this.onPageChange}
        />
    }
}



let mapStateToProps = (state) => {
    return{
      users:state.usersPage.users,
      pageSize:state.usersPage.pageSize,
      usersCount:state.usersPage.usersCount,
      currentPage:state.usersPage.currentPage
      }
  }
  
  let mapDispatchToProps=(dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(FollowAC(userId));
        },
        unfollow:(userId)=>{
            dispatch(UnfollowAC(userId));
        },
        setUsers:(users)=>{
            let action=setUsersAC(users);
            dispatch(action);
        },
        setCurrentPage:(page)=>{
            let action=setCurrentPageAC(page);
            dispatch(action);
        },
        setUsersCount:(count)=>{
            debugger;
            let action=setUsersCountAC(count);
            dispatch(action);
        }
    }
  }

let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersCont);
export default UsersContainer;