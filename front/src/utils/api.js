import axios from "axios";
// import dayjs from "dayjs";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "https://stay-station.onrender.com",
  // baseURL: "http://127.0.0.1:5000",
});
export const getAllProperties = async () => {
  try {
    const response = await api.get("/api/v1/residency/getAllResidency");
    console.log(response);
    return response.data;
  } catch (error) {
    toast.error(`Backend is hosted on a free domain, try reloading page again🥲`);
  }
};

export const getProperty = async (id) => {
  try {
    const response = await api.get(`/api/v1/residency/getResidency/${id}`);
    return response.data;
  } catch (error) {
    toast.error(`Backend is hosted on a free domain, try reloading page again🥲`);
  }
};

export const signUp = async (data) => {
  try {
    const response = await api.post(`/api/v1/users/signup`, data);
    return response.data;
  } catch (error) {
    toast.error(`Something went wrong`);
  }
};
