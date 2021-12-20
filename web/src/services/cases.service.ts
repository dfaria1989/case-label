import axios from "axios";
import authHeader from "./auth.header";


export const getCases = async () => {
  try {
    const { data: { message } } = await axios.get(process.env.REACT_APP_API_URL + "cases?viewed=false", { headers: authHeader() });
    return message;
  } catch (error) {
    console.log("error")

  }
  return false;
};

export const labelCaseCondition = async ({ caseId, conditionId }: { caseId: string, conditionId: string }) => {
  try {
    console.log( authHeader())
    const { data: { message } } = await axios.patch(process.env.REACT_APP_API_URL + `cases/${caseId}/conditions/${conditionId}`, {},{ headers: authHeader() });
    return message;
  } catch (error) {
    console.log("error", error)

  }
  return false;
};
