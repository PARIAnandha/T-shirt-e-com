import axios from 'axios';

const BASE_URL = 'http://localhost:7000'; // Base URL for your backend API

// Create an Axios instance with base URL
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data', // Ensure JSON content is being sent
  },
});

export default axiosInstance;
