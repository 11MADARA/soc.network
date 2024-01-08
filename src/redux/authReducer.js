import { headerApi } from "../components/header/headerApi";
import { profileApi } from "../components/profile/profileApi";
import { setUserProfile } from "./profilePageReducer";

const SET_USER_DATA = "SET-USER-DATA";
let initialState = {
  login: null,
  userId: null,
  email: null,
  isFetching: false,
  isAuth: false,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state;
  }
}
export default authReducer;

export const setUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, login, email,isAuth }
})


export const isAuthProfileTC = () => {
  return (dispatch) => {
    headerApi.isAuth()
      .then(response => {
        if (response.resultCode === 0) {
          let { id, login, email } = response.data;
          dispatch(setUserData(id, login, email, true));
          profileApi.getProfile(id)
            .then(response => {
              dispatch(setUserProfile(response.data))
            })
        }
      })
  }
}
export const LoginTC = (email, password, rememberMe) => (dispatch) => {
  return new Promise((resolve, reject) => {
    headerApi.login(email, password, rememberMe)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(isAuthProfileTC());
          resolve(); 
        } else {
          reject(response.data.messages[0]); // Отправляем ошибку
        }
      })
      .catch(error => {
        reject(error); 
      });
  });
};

export const LogoutTC = () => (dispatch) => {
  headerApi.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
    })
}