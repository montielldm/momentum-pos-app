import { secureStorage } from "./storage.secure";
import { URL } from "./axios.instance";

export default async function requestNewAccessToken() {
    const refreshToken = secureStorage.get("refresh_token");
  
    if (!refreshToken) {
      throw new Error("No refresh token available.");
    }
  
    const response = await fetch(`${URL}/auth/refresh-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: refreshToken }),
    });
  
    if (response.ok) {
      const { access_token } = await response.json();
      return access_token;
    } else {
      throw new Error("Failed to refresh access token.");
    }
  }