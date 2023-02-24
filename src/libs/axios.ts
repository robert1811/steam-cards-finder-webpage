import axios from "axios";

const steamApi = axios.create({
    baseURL: 'https://custom-steam-no0ot085i-robert1811.vercel.app/',
    withCredentials: true
})

export default steamApi