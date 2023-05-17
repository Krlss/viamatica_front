import { useContext } from "react";
import AuthContext from "../contexts/auth/authProvider";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setAuth("");
    navigate("/login");
  };

  return { logout };
};

export default useLogout;
