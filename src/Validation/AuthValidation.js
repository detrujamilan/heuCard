import * as Yup from "yup";

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const registrationValidation = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name should be at least 2 characters long")
    .max(50, "First name should not exceed 50 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Last name should be at least 2 characters long")
    .max(50, "Last name should not exceed 50 characters"),
  mobileNumber: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
