const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_COUNT="SET-USERS-COUNT";

let initialState = {
  users: [],
  pageSize: 5,
  usersCount:0,
  currentPage: 1,
}


const UsersReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          return (u.id === action.id) ? ({ ...u, follow: true }) : u;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          return (u.id === action.id) ? ({ ...u, follow: false }) : u;
        })
      }
    case SET_USERS:
      debugger;
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
      debugger;
      return {
        ...state,
        usersCount: action.count,
      }
    default:
      return state;
  }
}

export const FollowAC = (userId) => ({
  type: FOLLOW,
  id: userId
})

export const UnfollowAC = (userId) => ({
  type: UNFOLLOW,
  id: userId
})
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users
})
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
})
export const setUsersCountAC = (count) => ({
  type: SET_USERS_COUNT,
  count: count,
})

export default UsersReducer;