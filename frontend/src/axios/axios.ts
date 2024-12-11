import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://menu-fullstack.onrender.com", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
