import axios from 'axios';
import process from 'process';

const API_URL = process.env.API_URL; // Replace with your actual environment variable name

const apiSterenova = axios.create({
    baseURL: API_URL,
});

export default apiSterenova;