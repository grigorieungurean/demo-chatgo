import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from "../../../redux/friends-reducer";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../../redux/users-selectors";
import Friends from "./friends";

class FriendsContainer extends React.Component {

   componentDidMount() {
      const {currentPage, pageSize} = this.props;
      this.props.requestUsers(currentPage, pageSize);

   }

   onPageChanged = (pageNumber) => {
      const {pageSize} = this.props;
      this.props.requestUsers(pageNumber, pageSize);
   }

   render() {
      return (
         <Friends followingInProgress={this.props.followingInProgress} isFetching={this.props.isFetching} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} users={this.props.users} followed={this.props.followed} unfollow={this.props.unfollow} follow={this.props.follow} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} />
      )
   }
}

const mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
};

export default compose(connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})) (FriendsContainer);