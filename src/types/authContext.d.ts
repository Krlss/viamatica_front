export type AuthContextType = {
  token: string;
  setToken: (token: string) => void;
  removeToken: () => void;
};

export type AuthState = {
  token: string;
};

export type AuthAction =
  | { type: "SET_TOKEN"; payload: string }
  | { type: "REMOVE_TOKEN" };
