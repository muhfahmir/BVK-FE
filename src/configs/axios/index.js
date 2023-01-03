import axios from "axios";

import errorResponseHandler from "./errorResponseHandler";

// instance pertama untuk url
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}/v1`,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_API_KEY,
  },
});

// error handler
instance.interceptors.response.use(
  (response) => response,
  errorResponseHandler
);

export default instance;
