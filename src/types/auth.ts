export interface LoginPayload {
  username: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
} 