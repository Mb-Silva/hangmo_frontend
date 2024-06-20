import axios from "axios";

const apiClient = axios.create({
    baseURL:'https://localhost:7237',
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials: true

})

export default apiClient;