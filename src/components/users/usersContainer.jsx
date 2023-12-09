import { connect } from "react-redux";
import { follow, truggleIsFetching, unfollow, setCurrentPage, setUsers, setUsersCount } from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./users";
import Preloader from "../common/preloader/preloader";
class UsersCont extends React.Component {

    componentDidMount() {
        this.props.truggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
                this.props.truggleIsFetching(false);
            })
    }
    onPageChange = (pageNumber) => {
        this.props.truggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.truggleIsFetching(false);
            }) 
    }
    render = () => {
        return<>
        {this.props.isFetching?<Preloader/>:null}
         <Users usersCount={this.props.usersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChange={this.onPageChange}
        />
        </>
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}



let UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersCount,
    truggleIsFetching
})(UsersCont);
export default UsersContainer;