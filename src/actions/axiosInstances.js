import axios from "axios";

// Dynamically set base url depending on "Development" vs "Production"
const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/api/"
    : "/api/";

const axioInstance = axios.create({
  baseURL: baseURL
});

export default axioInstance;
