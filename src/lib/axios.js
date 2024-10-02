import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "https://travel-journal-api-bootcamp.do.dibimbing.id",
    headers: {
        "Content-Type": "application/json",
        "apiKey": process.env.NEXT_PUBLIC_API_KEY,
    },
});

export const axiosInstanceUploadImage = axios.create({
    baseURL: "https://travel-journal-api-bootcamp.do.dibimbing.id",
    headers: {
        "Content-Type": "multipar/form-data",
        "apiKey": process.env.NEXT_PUBLIC_API_KEY,
    },
})