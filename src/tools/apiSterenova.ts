import axios from 'axios';

const API_URL = "http://localhost:3001";

const apiSterenova = axios.create({
    baseURL: API_URL,
});

export default apiSterenova;