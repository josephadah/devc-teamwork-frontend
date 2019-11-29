import store from "../../state/store";
import jwtDecode from "jwt-decode";
import baseApiUrl from "../../config";
import http from "./httpService";
import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_CURRENT_USER
} from "../../state/actions/types";

const tokenKey = "token";
const userKey = "user";

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
  const { status, data: user } = await http.post(
    `${baseApiUrl}auth/signin`,
    userDto
  );
  if (status === 200 && user) {
    const username = user.firstName + user.lastName;
    localStorage.setItem(tokenKey, user.token);
    localStorage.setItem(userKey, username);
    store.dispatch({ type: LOGIN_USER });
    store.dispatch({
      type: SET_CURRENT_USER,
      payload: user.firstName + user.lastName
    });

    return user;
  } else {
    return null;
  }
};

const loginUserLocal = () => {
  const token = localStorage.getItem(tokenKey);
  if (token) {
    try {
      const result = jwtDecode(token);
      if (result) {
        const claimsPrefix =
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/";
        const user = {
          userId: parseInt(result.unique_name, 10),
          firstname: result[claimsPrefix + "givenname"],
          surname: result[claimsPrefix + "surname"],
          email: result[claimsPrefix + "emailaddress"],
          expireIn: result.exp
        };
        const roles =
          result[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ];
        user.roles = roles;
        user.isAdmin = roles.includes("Admin");
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
