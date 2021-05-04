import axios from 'axios';

const api = axios.create({
    baseURL: 'https://invision-backend.herokuapp.com',
});

export default api;