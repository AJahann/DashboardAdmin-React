import axios from "axios";

export const adminApi = axios.create({
  baseURL: "https://my-supabase-api.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
