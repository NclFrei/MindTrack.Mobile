import axios from "axios";

export const api = axios.create({
  baseURL: "https://suaapi.com", // trocar depois
  timeout: 5000,
});
