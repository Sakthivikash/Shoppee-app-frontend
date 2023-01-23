import axios from "axios";

const instance = axios.create({
  baseURL: "https://shoppee-app-server.onrender.com",
});

export default instance;
