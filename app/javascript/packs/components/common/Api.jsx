import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/";

export const fetchCompanyData = async (slug) => {
  try {
    const response = await axios.get(`${BASE_URL}companies/${slug}/landing_page`, {
      headers: { 'Accept': 'application/json' }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      console.log("Company data not found.");
    } else {
      console.error("Error fetching company data:", error);
    }
    return null;
  }
};

export const fetchAllCompanies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}companies`, {
      headers: { 'Accept': 'application/json' }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      console.log("Company data not found.");
    } else {
      console.error("Error fetching company data:", error);
    }
    return null;
  }
};