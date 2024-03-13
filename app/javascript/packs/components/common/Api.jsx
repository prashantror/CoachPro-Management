import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/";
const DEVISE_BASE_URL = "http://localhost:3000/";

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

export const fetchCompanyProgramsData = async (company_id) => {
  try {
    const response = await axios.get(`${BASE_URL}companies/${company_id}/company_programs`, {
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


export const acceptCoachInvitation = async (invitation_token, password) => {
  const data = {
    user: {
      invitation_token: invitation_token,
      password: password,
      password_confirmation: password
    }
  };

  try {
    const response = await axios.put(`${DEVISE_BASE_URL}/users/invitation`, data, {
      headers: { 'Accept': 'application/json' }
    });
    return response.data;
  } catch (error) {
    console.error("Error accepting coach invitation:", error.response.data.errors);
    return error.response.data
  }
};
