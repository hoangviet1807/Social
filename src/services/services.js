import axios from "axios";

export const fetchUsers = () => {
  return axios.get("/user").then((res) => res.data);
};


export const createUser = (data) => {
  return axios.post("/user", data)
    .then((response) => response.data)
}