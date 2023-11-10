import axios from "axios";

export const base = axios.create({
    baseURL: "https://vapepiapi.shopdoora.com/vapepi/api"
})