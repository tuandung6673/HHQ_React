import axios from "axios";
const axiosAuth = axios.create({
    baseURL: 'https://tank8.bsite.net/'
})

axiosAuth.interceptors.request.use((config) => {
    const token = localStorage.getItem('userData')?.token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

export default axiosAuth