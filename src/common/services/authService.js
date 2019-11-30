import store from "../../state/store";
import jwtDecode from "jwt-decode";
import config from "../../config";
import http from "./httpService";
import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_CURRENT_USER
} from "../../state/actions/types";

const baseApiUrl = config.baseApiUrl;
const tokenKey = "token";

http.setJwt(localStorage.getItem(tokenKey));

const createUser = async userDto => {
  console.log(userDto);
  const { status } = await http.post(`${baseApiUrl}create-user`, userDto);
  if (status === 200) {
    return true;
  } else {
    return false;
  }
};

const login = async userDto => {
  const { data: response } = await http.post(
    `${baseApiUrl}auth/signin`,
    userDto
  );
  const { data } = response;
  console.log(data);
  if (data && data.token) {
    localStorage.setItem(tokenKey, data.token);
    return true;
  } else {
    return null;
  }
};

const loginUserLocal = () => {
  const token = localStorage.getItem(tokenKey);
  if (token) {
    try {
      const result = jwtDecode(token);
      console.log(result);
      if (result) {
        const user = {
          userId: parseInt(result.userId, 10),
          firstname: result.firstName,
          lastName: result.lastName,
          email: result.email,
          expireIn: result.iat,
          isAdmin: result.isAdmin
        };
        user.displayName = `${user.firstname} ${
          user.surname ? user.surname : ""
        }`;

        // TODO: clear token after expire
        // if (user && user.expireIn) {
        //   const expiryTime = new Date(user.expireIn);
        //   console.log(expiryTime);
        //   if (expiryTime < new Date()) {
        //     localStorage.clear();
        //     return;
        //   }
        // }

        store.dispatch({ type: LOGIN_USER });
        store.dispatch({ type: SET_CURRENT_USER, payload: user });
      }
    } catch (error) {}
  }
};

const logOutUser = () => {
  localStorage.clear();
  store.dispatch({ type: LOGOUT_USER });
};

export default { createUser, login, logOutUser, loginUserLocal };
