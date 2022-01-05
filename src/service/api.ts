import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.141.153.234/',
});

export default api;