import axios from "axios";

const steamApi = axios.create({
    baseURL: 'https://custom-steam-api-production.up.railway.app/',
    withCredentials: true
})

export default steamApi