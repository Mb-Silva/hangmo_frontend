import axios from "axios";

const apiClient = axios.create({
    baseURL:'https://hangmo-game-ad894dbd8da1.herokuapp.com',
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials: true

})

export default apiClient;