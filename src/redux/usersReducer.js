import UsersApi from "../components/users/usersApi";
const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_COUNT = "SET-USERS-COUNT";
const TRUGGLE_IS_FETCHING = "TRUGGLE_IS_FETCHING";
const FOLLOW_ON_PROCESS = "FOLLOW_ON_PROCESS";


let initialState = {
  users: [],
  pageSize: 5,
  usersCount: 0,
  currentPage: 1,
  isFetching: false,
  following: [],
}


const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          return (u.id === action.id) ? ({ ...u, followed: true }) : u;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          return (u.id === action.id) ? ({ ...u, followed: false }) : u;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case SET_USERS_COUNT:
      return {
        ...state,
        usersCount: action.count,
      }
    case TRUGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case FOLLOW_ON_PROCESS:
      return {
        ...state,
        following: action.following
          ? [...state.following, action.userId]
          : state.following.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}

export const follow = (userId) => ({
  type: FOLLOW,
  id: userId
})

export const unfollow = (userId) => ({
  type: UNFOLLOW,
  id: userId
})
export const setUsers = (users) => ({
  type: SET_USERS,
  users
})
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
})
export const setUsersCount = (count) => ({
  type: SET_USERS_COUNT,
  count: count,
})
export const truggleIsFetching = (isFetching) => ({
  type: TRUGGLE_IS_FETCHING,
  isFetching: isFetching
})
export const followInProcess = (following, userId) => ({
  type: FOLLOW_ON_PROCESS,
  following,
  userId,
})

export const getUsersTC = (pageNumber, pageSize) => {
  return async (dispatch) => {
    dispatch(truggleIsFetching(true));
    dispatch(setCurrentPage(pageNumber));
    let response = await UsersApi.getUsers(pageNumber, pageSize)
    dispatch(setUsers(response.items));
    dispatch(setUsersCount(response.totalCount))
    dispatch(truggleIsFetching(false));
  }
}

export const followTC = (userId) => {
  return async (dispatch) => {
    dispatch(followInProcess(true, userId));
    let response = await UsersApi.postFollow(userId)
    if (response.resultCode === 0) {
      dispatch(follow(userId))
    }
    dispatch(followInProcess(false, userId))
  }
}
export const unfollowTC = (userId) => {
  return async (dispatch) => {
    dispatch(followInProcess(true, userId));
    let response = await UsersApi.deleteFollow(userId)
    if (response.resultCode === 0) {
      dispatch(unfollow(userId))
    }
    dispatch(followInProcess(false, userId))
  }
}

export default UsersReducer;