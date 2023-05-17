import * as yup from "yup";

export const username = yup.string().required();
export const password = yup.string().min(5).required();
