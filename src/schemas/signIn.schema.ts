import { object } from "yup";
import { username, password } from "../validations/signin";

export const validationSchema = object({
  username: username,
  password: password,
});
