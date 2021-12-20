import axios from "axios";
import authHeader from "./auth.header";

export const getCases= () => {
  return axios.get(process.env.REACT_APP_API_URL + "all",{ headers: authHeader() });
};

export const getConditions = () => {
  return axios.get(process.env.REACT_APP_API_URL + "user", { headers: authHeader() });
};
