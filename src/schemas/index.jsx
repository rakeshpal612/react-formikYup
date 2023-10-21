import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(15).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().min(6).required("Please Enter Your Password"),
  confirm_password: Yup.string()
    .required("Please Enter Your Password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
