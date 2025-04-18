import axios from "axios";
import { secureStorage } from "@/helpers/storage.secure";
import requestNewAccessToken from "@/helpers/request.services";

export const URL = "http://localhost:8000";

export const api = axios.create({
  baseURL: URL,
});

// Interceptor para incluir el access token en cada petición
api.interceptors.request.use(
  async (config) => {
    const token = secureStorage.get("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de respuestas para manejar tokens expirados
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Marcar el request para evitar loops infinitos
      const newToken = await requestNewAccessToken();

      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest); // Reintenta la petición original con el nuevo token
      } else {
        secureStorage.remove("access_token");
        secureStorage.remove("refresh_token");
        window.location.href = "/auth/login";
      }
    }

    return Promise.reject(error);
  }
);