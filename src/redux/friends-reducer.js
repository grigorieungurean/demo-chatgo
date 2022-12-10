import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objects-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_ISFOLLOWING_PROGRESS = 'TOGGLE-ISFOLLOWING-PROGRESS';

const initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const friendsReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
      }

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
      }

    case SET_USERS: {
      return {
        ...state,
        users: action.users
      }
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }

    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count
      }
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
    case TOGGLE_ISFOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter(id => id !== action.userId)]
      }
    }

    default:
      return state;
  }
}

export const followSucess = (userId) => ({ type: 'FOLLOW', userId });

export const unfollowSucess = (userId) => ({ type: 'UNFOLLOW', userId });

export const setUsers = (users) => ({ type: 'SET-USERS', users });

export const setCurrentPage = (currentPage) => ({ type: 'SET-CURRENT-PAGE', currentPage });

export const setTotalUsersCount = (totalUsersCount) => ({ type: 'SET-TOTAL-USERS-COUNT', count: totalUsersCount });

export const toggleIsFetching = (isFetching) => ({ type: 'TOGGLE-IS-FETCHING', isFetching });

export const toggleFollowingProgress = (isFetching, userId) => ({ type: 'TOGGLE-ISFOLLOWING-PROGRESS', isFetching, userId });

export const requestUsers = (page, pageSize) => {
  return async (dispatch) => {

    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const data = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));

  const response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSucess);
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    const apiMethod = usersAPI.unfollow.bind(usersAPI);
    const actionCreator = unfollowSucess;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  };
};

export default friendsReducer;