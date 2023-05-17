import { useFormik } from "formik";
import { validationSchema } from "../schemas/signIn.schema";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import AuthContext from "../contexts/auth/authProvider";

export const initialValue = {
  username: "",
  password: "",
  remember: false,
};

const useSignIn = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [error, setError] = useState({
    state: false,
    message: "",
  });

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.username === "admin" && values.password === "admin") {
        localStorage.setItem("token", "bearer");
        setAuth("bearer");
        navigate("/");
      } else {
        setError({
          state: true,
          message: "Username or password is incorrect",
        });
      }
    },
  });

  return { formik, error, setError };
};

export default useSignIn;
