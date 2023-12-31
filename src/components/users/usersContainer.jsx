import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, followInProcess, getUsersTC,unfollowTC,followTC} from "../../redux/usersReducer";
import React from "react";
import Users from "./users";
import Preloader from "../common/preloader/preloader";
import { withRedirect } from "../../HOC/withNavigate";
import { compose } from "redux";
class UsersCont extends React.Component {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage,this.props.pageSize);
    }
    onPageChange = (pageNumber) => {
    this.props.getUsersTC(pageNumber,this.props.pageSize);
    }
    render = () => {
        return<>
        {this.props.isFetching?<Preloader/>:null}
         <Users usersCount={this.props.usersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChange={this.onPageChange}
            following={this.props.following}
            followTC={this.props.followTC}
            unfollowTC={this.props.unfollowTC}
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
        following:state.usersPage.following,
    }
}



export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        followInProcess,
        getUsersTC,
        followTC,
        unfollowTC
    }),
    withRedirect
)(UsersCont);