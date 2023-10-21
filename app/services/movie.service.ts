import axios from "axios";

const API_key = "d13bf4ed69c1e3bd2a9e5352b34d889f";
const API_BASE_URL = "https://api.themoviedb.org/3";

const client = axios.create({
  baseURL: API_BASE_URL,
  params: { api_key: API_key },
});
