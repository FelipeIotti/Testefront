import axios from 'axios';

const api = axios.create({
  baseURL: 'https://3.141.153.234/',
});

export default api;