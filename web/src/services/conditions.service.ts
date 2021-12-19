import { throws } from "assert";
import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:3060/api/";


type ConditionsType = {
  ICD_10: string
  ICD_10_Description: string,
  _id: string
}
export const getConditions = async (): Promise<ConditionsType> => {
  try {
    const { data: { message } } = await axios.get(API_URL + "conditions", { headers: authHeader() });
    return message;
  } catch (error: any) {
    throw new Error("error fetching conditions");
  }
}
