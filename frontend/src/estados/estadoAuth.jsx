import {create} from "zustand";
import { axiosInstance } from "../lib/axios.js"
import toast from "react-hot-toast";
//socket.io
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";