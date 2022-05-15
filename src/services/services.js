import axios from "axios";

export const fetchUsers = () => {
  return axios.get("/user").then((res) => res.data);
};


export const createUser = (data) => {
  return axios.post("/user", data)
    .then((response) => response.data)
}

export const login = (data) => {
  return axios.post("/user/login", data, { headers: { "Content-Type": "application/json", } })
    .then((response) => response.data)
}