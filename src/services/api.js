import axios from "axios";

export const api = axios.create({
    baseURL: "https://foods-explorer-server.onrender.com"
});