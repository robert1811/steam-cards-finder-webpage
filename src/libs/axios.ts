import axios from "axios";

const steamApi = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true
})

export default steamApi