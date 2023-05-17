import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/auth/authProvider";

const RequireAuth = () => {
  const { auth } = useContext(AuthContext);

  if (!auth) return <Navigate to="/login" />;

  return <Outlet />;
};

export default RequireAuth;
