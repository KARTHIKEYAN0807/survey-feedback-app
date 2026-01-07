import axios from "axios";

const api = axios.create({
  baseURL: "https://survey-feedback-app.onrender.com/api"
});

export default api;
