import axios from "axios";
import { toast } from "react-toastify";
import loader from "../utils/loader";

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(config => {
  loader.show();
  return config;
});

axios.interceptors.response.use(
  response => {
    loader.hide();
    return response;
  },
  error => {
    loader.hide();
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      toast.error("An unexpected error occured");
    }

    return Promise.reject(error);
  }
);

function setJwt(jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
