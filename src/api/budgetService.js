import axios from "axios";

const API_URL = "http://localhost:3001/budget";

export const getBudgetData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.myBudget;
  } catch (error) {
    console.error("Error fetching budget data:", error);
    return [];
  }
};