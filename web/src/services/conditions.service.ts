import axios from "axios";
import authHeader from "./auth.header";

type ConditionsType = {
  ICD_10: string
  ICD_10_Description: string,
  _id: string
}
export const getConditions = async (): Promise<ConditionsType> => {
  try {
    const { data: { message } } = await axios.get(process.env.REACT_APP_API_URL + "conditions", { headers: authHeader() });
    return message;
  } catch (error: any) {
    throw new Error("error fetching conditions");
  }
}
