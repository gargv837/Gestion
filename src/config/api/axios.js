import axios from "axios";

export default axios.create({
  baseURL:
    "https://gestion-api-go1l.onrender.com/",

  headers: { "Content-Type": "application/json" },
});
