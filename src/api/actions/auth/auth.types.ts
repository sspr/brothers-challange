export type LoginPayload = {
  login: string;
  password: string;
};

export type CheckIsLoggedInPayload = string | null;

export type AuthResponse = {
  accessToken: string;
  tokenType: string;
  expires: number;
  refreshToken: string;
};
