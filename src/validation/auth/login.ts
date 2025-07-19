import * as yup from "yup";

export const schema = yup
  .object({
    email: yup.string().required("Input Email"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(50)
      .trim()
      .required("Input Password"),
  })
  .required();
