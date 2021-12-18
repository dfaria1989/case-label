import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:3060/api/";

export const getConditions = async () => {
  try {
    const { data: { message } } = await axios.get(API_URL + "conditions", { headers: authHeader() });
    return message;
  } catch (error) {
    console.log("error")

  }
  return false;
};
