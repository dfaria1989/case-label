import axios from "axios";

const API_URL = "http://localhost:3060/api/";

export const login = async (username: string, password: string) => {
  const response = await axios
    .post(API_URL + "auth/login", {
      username,
      password,
    });
  console.log("response.data", response.data);
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = async () => {
  localStorage.removeItem("user");
  return true;
};

export const isAuthenticated = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};