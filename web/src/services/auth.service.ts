import axios from "axios";

export const login = async (username: string, password: string) => {
  const response = await axios
    .post(process.env.REACT_APP_API_URL + "auth/login", {
      username,
      password,
    });

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