import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:3060/api/";

export const getCases= () => {
  return axios.get(API_URL + "all",{ headers: authHeader() });
};

export const getConditions = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};
