import axios from "axios";

const api = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

const keyApi = "f307cf87";
export { api, keyApi };
//apikey=f307cf87
