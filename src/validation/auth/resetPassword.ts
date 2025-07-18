import * as yup from "yup";

export const schema = yup
  .object({
    new_password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(50)
      .trim()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])(?=.*\d).*/,
        "Password must include at least one uppercase character, one lowercase character, one special character, and one digit"
      )
      .required("Input Password"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("new_password")], "Passwords must match")
      .required("Please confirm your password"),
  })
  .required();
