import axios from "axios";

const api = axios.create({
  baseURL: "https://games-test-api-81e9fb0d564a.herokuapp.com/api/",
  headers: {
    "dev-email-address": "caiocsm97@gmail.com",
  },
});

export default api;
