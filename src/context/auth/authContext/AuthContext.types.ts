export type AuthContextValuesTypes = {
  isAuthenticated: boolean;
  setToken: (token: string | null) => void;
};
