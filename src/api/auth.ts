import axios from "axios";
import { LoginPayload, LoginResponse } from "../types/auth";

const API_URL = "https://api-test-web.agiletech.vn";

console.log("API URL:", `${API_URL}/auth/login`);

export const login = async (payload: { username: string }) => {
  console.log("API URL:", `${API_URL}/auth/login`);
  console.log("Payload:", payload);
  try {
    const response = await axios.post(`${API_URL}/auth/login`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Login response:", response);
    return response.data;
  } catch (err: any) {
    console.error("Login error:", err);
    throw err;
  }
};

export const logout = async (): Promise<void> => {
  await axios.post(`${API_URL}/auth/logout`);
};

export const refreshToken = async (refreshToken: string): Promise<LoginResponse> => {
  const response = await axios.post(`${API_URL}/auth/refreshToken`, { refreshToken });
  return response.data;
};

export const getPosts = async (params?: { title?: string; page?: number }) => {
  const response = await axios.get(`${API_URL}/posts`, { params });
  return response.data;
};
