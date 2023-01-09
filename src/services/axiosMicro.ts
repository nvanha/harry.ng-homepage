import { Auth } from "aws-amplify";
import axios from "axios";

import config from "./serverMicro";

const axiosMicroApiInstance = axios.create({
  baseURL: config.API_URL,
  timeout: config.DEFAULT_REQUEST_TIMEOUT,
});

// Request interceptor for API calls
axiosMicroApiInstance.interceptors.request.use(
  async (config) => {
    // const access_token = localStorage.getItem('accessToken');
    let resAccessToken = await Auth.currentSession();
    let access_token = resAccessToken.getAccessToken().getJwtToken();

    if (resAccessToken.getAccessToken().getExpiration() < Date.now() / 1000) {
      const userInfo = await Auth.currentAuthenticatedUser();

      resAccessToken = await Auth.currentSession();
      access_token = resAccessToken.getAccessToken().getJwtToken();

      await Auth.updateUserAttributes(userInfo, {});
    }

    config.headers = {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosMicroApiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    try {
      const originalRequest = error.config;

      if (error?.response?.status === 403 && !originalRequest["_retry"]) {
        originalRequest["_retry"] = true;
        const access_token = localStorage.getItem("refresh_token");

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;
        return axiosMicroApiInstance(originalRequest);
      }
      if (error?.response?.status === 401) {
        // localStorage.removeItem('accessToken');
        // window.location.replace('/login');
      }

      return Promise.reject(error);
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

export default axiosMicroApiInstance;
