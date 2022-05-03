import axios from "axios";

export const fetchUsers = () => {
  return axios.get("http://localhost:5000/user").then((res) => res.data);
};
