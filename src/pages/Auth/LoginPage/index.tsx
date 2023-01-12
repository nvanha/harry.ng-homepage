import { useFormik } from "formik";
import { useEffect } from "react";
import { CgSpinner } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import LogoURL from "@/assets/logo/logo-full.png";
import { ButtonCustom, InputPassword, InputText } from "@/components/forms";
import { signInRequest } from "@/redux/auth/actions";

const LoginPage = () => {
  const { isSignInRequest, isSignInSuccess, isSignInFailure, errorMessages } =
    useSelector((store: any) => store.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username/Email is required!"),
      password: Yup.string()
        .required("Password is required!")
        .max(8, "Must be 8 characters or more")
        .max(20, "Must be 20 characters or less"),
    }),
    onSubmit: (values) => {
      dispatch(signInRequest(values));
    },
  });

  useEffect(() => {
    if (isSignInSuccess) {
      navigate(`/auth/dashboard`);
    }
  }, [isSignInSuccess]);

  return (
    <section className="px-14 py-12 rounded-md bg-[#212134] shadow-[1px_1px_10px_rgba(3,3,5,0.2)] text-center register-page">
      <Link to="/" className="inline-block mx-auto">
        <img src={LogoURL} alt="" className="w-[72px]" />
      </Link>
      <h1 className="text-4xl font-bold font-poppins mt-6 mb-2">
        Welcome to Harry.ng CMS!
      </h1>
      <p className="text-colorSecondaryDark mb-6 font-medium">
        Log in to your Harry.ng CMS account
      </p>
      {isSignInFailure && (
        <div className="error-msg mb-6">{errorMessages[0].message}</div>
      )}
      <form noValidate onSubmit={formik.handleSubmit}>
        <InputText
          customClassName="!text-colorPrimaryDark !font-bold"
          label="Username"
          isValid={formik.touched.username && !formik.errors.username}
          isInvalid={formik.touched.username && formik.errors.username}
          isError={formik.touched.username && formik.errors.username}
          msgError={formik.errors.username}
          isRequired
          {...formik.getFieldProps("username")}
        />
        <InputPassword
          customClassName="!text-colorPrimaryDark !font-bold"
          label="Password"
          isValid={formik.touched.password && !formik.errors.password}
          isInvalid={formik.touched.password && formik.errors.password}
          isError={formik.touched.password && formik.errors.password}
          msgError={formik.errors.password}
          isRequired
          {...formik.getFieldProps("password")}
        />
        <ButtonCustom
          variant={isSignInRequest ? "disabled" : "primary"}
          customClassName="w-full h-[50px]"
          type="submit"
        >
          {isSignInRequest ? (
            <CgSpinner className="animate-spin w-5 h-5" />
          ) : (
            "Login"
          )}
        </ButtonCustom>
      </form>
    </section>
  );
};

export default LoginPage;
