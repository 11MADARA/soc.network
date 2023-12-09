const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_COUNT = "SET-USERS-COUNT";
const TRUGGLE_IS_FETCHING="TRUGGLE_IS_FETCHING";

let initialState = {
  users: [],
  pageSize: 5,
  usersCount: 0,
  currentPage: 1,
  isFetching:false,
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

export default UsersReducer;