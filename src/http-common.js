import axios from "axios";

export default axios.create({
  baseURL: "http://api-bhoomiweb.mykar.in/api",
  headers: {
    "Content-type": "application/json"
  }
});