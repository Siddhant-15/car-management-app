import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Set up axios instance
const api = axios.create({
    baseURL: API_URL,
});

// Add Authorization header if token is available
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers['Authorization'] = `Bearer ${token}`;
    return config;
});

// Authentication
export const login = async (email, password) => api.post('/auth/login', { email, password });
export const register = async (data) => api.post('/auth/register', data);

// Car Management
export const getCars = async () => api.get('/cars/list');
export const getCar = async (id) => api.get(`/cars/detail/${id}`);
export const createCar = async (data) => api.post('/cars/create', data);  // No explicit Content-Type header for FormData
export const updateCar = async (id, data) => api.put(`/cars/update/${id}`, data);  // No explicit Content-Type header for FormData
export const deleteCar = async (id) => api.delete(`/cars/delete/${id}`);
