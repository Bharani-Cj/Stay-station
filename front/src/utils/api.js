import axios from "axios";
// import dayjs from "dayjs";
import { toast } from "react-toastify";

export const getAllProperties = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:5000/api/v1/residency/getAllResidency", {
      timeout: 10 * 1000,
    });
    return response.data;
  } catch (error) {
    toast.error(`Something went wrong`);
  }
};

export const getProperty = async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:5000/api/v1/residency/getResidency/${id}`, {
      timeout: 10 * 1000,
    });
    return response.data;
  } catch (error) {
    toast.error(`Something went wrong`);
  }
};
