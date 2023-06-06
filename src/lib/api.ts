import axios from "axios";

export const api = axios.create({
  baseURL: "https://10.10.10.17:3333",
});
