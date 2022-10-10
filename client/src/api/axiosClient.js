import axios from "axios";

const BASE_URL = "http://localhost:5050/api/v1";
const axiosClient = axios.create({
  baseURL: BASE_URL,
});
