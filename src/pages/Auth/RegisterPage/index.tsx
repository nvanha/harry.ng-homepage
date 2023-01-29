import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import LogoURL from "@/assets/logo/logo-full.png";
import { InputPassword, InputText } from "@/components/forms";
import Helmet from "@/components/helmet";
import { signUpRequest } from "@/redux/auth/actions";
import { Button } from "@material-tailwind/react";

const RegisterPage = () => {
  const { isSignUpRequest, isSignUpSuccess, isSignUpFailure, errorMessages } =
    useSelector((store: any) => store.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .trim()
        .required("Username is required!")
        .min(2, "Must be 2 characters or more")
        .max(20, "Must be 20 characters or less"),
      email: Yup.string()
        .trim()
        .required("Email is required!")
        .email("Invalid email address"),
      password: Yup.string()
        .trim()
        .required("Password is required!")
        .min(8, "Must be 8 characters or more")
        .max(20, "Must be 20 characters or less")
        .matches(/[A-Z]/, "Password must contain uppercase letters.")
        .matches(/[0-9]/, "Password must contain number letters."),
      rePassword: Yup.string()
        .required("Confirm Password is required!")
        .oneOf([Yup.ref("password")], "Password not match"),
    }),
    onSubmit: (values) => {
      const { email, password, username } = values;
      const data = {
        username,
        password,
        attributes: {
          email,
        },
      };
      setUsername(username);
      dispatch(signUpRequest(data));
    },
  });

  useEffect(() => {
    if (isSignUpSuccess) {
      navigate(`/confirm-account/${username}`);
    }
  }, [isSignUpSuccess]);

  return (
    <Helmet title="Register page . CMS" customClassName="register-page">
      <section className="px-14 py-12 rounded-md bg-[#212134] shadow-[1px_1px_10px_rgba(3,3,5,0.2)] text-center">
        <Link to="/" className="inline-block mx-auto">
          <img src={LogoURL} alt="" className="w-[72px]" />
        </Link>
        <h1 className="text-4xl font-semibold mt-6 mb-2">
          Welcome to Harry.ng CMS!
        </h1>
        <p className="text-colorSecondaryDark mb-6 font-medium">
          Register your account Harry.ng CMS
        </p>
        {isSignUpFailure && (
          <div className="error-msg">{errorMessages[0].message}</div>
        )}
        <form noValidate onSubmit={formik.handleSubmit}>
          <InputText
            customClassName="!text-colorPrimaryDark"
            label="Username"
            isValid={formik.touched.username && !formik.errors.username}
            isInvalid={formik.touched.username && formik.errors.username}
            isError={formik.touched.username && formik.errors.username}
            msgError={formik.errors.username}
            isRequired
            {...formik.getFieldProps("username")}
          />
          <InputText
            customClassName="!text-colorPrimaryDark"
            label="Email"
            isValid={formik.touched.email && !formik.errors.email}
            isInvalid={formik.touched.email && formik.errors.email}
            isError={formik.touched.email && formik.errors.email}
            msgError={formik.errors.email}
            isRequired
            {...formik.getFieldProps("email")}
          />
          <InputPassword
            customClassName="!text-colorPrimaryDark"
            label="Password"
            isValid={formik.touched.password && !formik.errors.password}
            isInvalid={formik.touched.password && formik.errors.password}
            isError={formik.touched.password && formik.errors.password}
            msgError={formik.errors.password}
            isRequired
            {...formik.getFieldProps("password")}
          />
          <InputPassword
            customClassName="!text-colorPrimaryDark"
            label="Confirm Password"
            isValid={formik.touched.rePassword && !formik.errors.rePassword}
            isInvalid={formik.touched.rePassword && formik.errors.rePassword}
            isError={formik.touched.rePassword && formik.errors.rePassword}
            msgError={formik.errors.rePassword}
            isRequired
            {...formik.getFieldProps("rePassword")}
          />
          <Button
            disabled={isSignUpRequest}
            className="w-full h-[50px] flex items-center justify-center"
            type="submit"
          >
            {isSignUpRequest ? (
              <CgSpinner className="animate-spin w-5 h-5" />
            ) : (
              "Create Account"
            )}
          </Button>
        </form>
        <Link
          to="/login"
          className="mt-6 inline-block text-blue-600 font-medium hover:underline"
        >
          Already have an account?
        </Link>
      </section>
    </Helmet>
  );
};

export default RegisterPage;
