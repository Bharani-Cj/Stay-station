import axios from "axios";
import { toast } from "react-toastify";
import dayjs from "dayjs";

const api = axios.create({
  baseURL: "https://stay-station.onrender.com",
  // baseURL: "http://127.0.0.1:5000",
});
export const getAllProperties = async () => {
  try {
    const response = await api.get("/api/v1/residency/getAllResidency");
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
export const signIn = async (data) => {
  try {
    const response = await api.post(`/api/v1/users/login`, data);
    return response.data;
  } catch (error) {
    toast.error(`${error.response.data.message}`);
  }
};

export const bookVisit = async (email, propertyId, dates) => {
  try {
    await api.post(`/api/v1/users/bookvisit`, {
      email: email,
      id: propertyId,
      date: dayjs(dates).format("DD/MM/YYYY"),
    });
    const date = new Date(dates);
    const month = date.getMonth();
    const day = date.getDay();
    console.log(month, day);
    toast.success(`Booked successfully on ${dates}`);
  } catch (error) {
    const errors = error.response.data.message;
    toast.error(`${errors}`);
  }
};
