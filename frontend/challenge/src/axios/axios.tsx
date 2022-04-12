import axios from "axios"

const instance = axios.create({
  baseURL: ' https://server-message-app.herokuapp.com',
  
});




export default instance;