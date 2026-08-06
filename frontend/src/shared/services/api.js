import axios from 'axios';

// Base URL mengarah ke backend yang sudah kita buat tadi
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor untuk merapikan response, 
// agar kita bisa langsung pakai `response.data` di komponen
api.interceptors.response.use(
  (response) => {
    // Backend kita membungkus data di dalam `data` dan `pagination`
    return response.data;
  },
  (error) => {
    console.error('API Error:', error.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

export default api;
