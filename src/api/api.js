import axios from "axios";

export const base = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/products"
})