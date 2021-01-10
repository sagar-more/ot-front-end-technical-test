import axios from "axios";

// This will help us in creating uniform API approach
const axiosInstance = axios.create({
    baseURL: "https://demo6922545.mockable.io/",
    headers: { "Content-Type": "application/json" },
});

const getData = async () => await axiosInstance.get("/").then(res => res.data);

export { getData };