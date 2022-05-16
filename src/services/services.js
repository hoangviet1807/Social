import axios from "axios";

export const fetchUsers = () => {
  return axios.get("http://localhost:8080/user").then((res) => res.data);
};


export const createUser = (data) => {
  return axios.post("http://localhost:8080/user", data)
    .then((response) => response.data)
}

export const login = (data) => {
  return axios.post("http://localhost:8080/user/login", data, { headers: { "Content-Type": "application/json", } })
    .then((response) => response.data)
}

export const getRoom = (user) => {
  return axios.get(`http://localhost:8080/room/${user}`,)
    .then((response) => response.data)
}

export const getMessage = (roomId) => {
  return axios.get(`http://localhost:8080/message/${roomId}`,)
    .then((response) => response.data)
}

export const updateMessage = (data) => {
  return axios.put(`http://localhost:8080/message/${data.roomId}`, data)
    .then((response) => response.data)
}