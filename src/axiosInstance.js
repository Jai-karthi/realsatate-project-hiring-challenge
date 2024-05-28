// src/api.js (or src/axiosInstance.js)
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000', // Proxy server URL
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true // If you need to send cookies
});

export default instance;
