import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    baseURL: `https://disneyparentdb.herokuapp.com/api`,
    headers: {
      authorization: localStorage.getItem("token")
    }
  });
};

export default axiosWithAuth;