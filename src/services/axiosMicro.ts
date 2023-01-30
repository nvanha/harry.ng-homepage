import axios from "axios";

import config from "./serverMicro";

const axiosMicroApiInstance = axios.create({
  baseURL: config.API_URL,
  timeout: config.DEFAULT_REQUEST_TIMEOUT,
});

// Request interceptor for API calls
axiosMicroApiInstance.interceptors.request.use(
  async (config) => {
    config.headers = {
      "Content-Type": "application/json",
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosMicroApiInstance;
