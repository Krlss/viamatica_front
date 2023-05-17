import { ReactNode, createContext, useState, useEffect } from "react";

const AuthContext = createContext<{
  auth: string;
  setAuth: (auth: string) => void;
}>({
  auth: "",
  setAuth: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) setAuth(auth);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
