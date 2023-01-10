import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

import LogoURL from "@/assets/logo/logo-full.png";
import { InputText } from "@/components/forms";
import { confirmSignUpRequest } from "@/redux/auth/actions";
import { Button } from "@material-tailwind/react";
import { Auth } from "aws-amplify";

const ConfirmAccountPage = () => {
  const {
    isConfirmSignUpRequest,
    isConfirmSignUpSuccess,
    isConfirmSignUpFailure,
    errorMessages,
  } = useSelector((store: any) => store.auth);
  const dispatch = useDispatch();

  const { username } = useParams();

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string().trim().required("Code is required!"),
    }),
    onSubmit: (values) => {
      const payload = {
        code: values.code,
        username: username,
      };
      dispatch(confirmSignUpRequest(payload));
    },
  });

  useEffect(() => {
    if (isConfirmSignUpSuccess) {
      navigate(`/login`);
    } else if (isConfirmSignUpFailure) {
      setErrorMessage(errorMessages[0].message);
    }
  }, [isConfirmSignUpSuccess, isConfirmSignUpFailure]);

  const resendCode = async () => {
    try {
      const res = await Auth.resendSignUp(username || "");
      setErrorMessage("");
      setSuccessMessage(
        `A verification code sent to ${res.CodeDeliveryDetails.Destination}!`
      );
    } catch (error: any) {
      setErrorMessage(error);
    }
  };

  return (
    <section className="px-14 py-12 rounded-md bg-[#212134] shadow-[1px_1px_10px_rgba(3,3,5,0.2)] text-center register-page">
      <Link to="/" className="inline-block mx-auto">
        <img src={LogoURL} alt="" className="w-[72px]" />
      </Link>
      <h1 className="text-4xl font-semibold mt-6 mb-2">Enter the code here!</h1>
      <p className="text-colorSecondaryDark mb-6 font-medium">
        We’ve sent a code to your email to make sure your logins are set up just
        right. Copy it from the email and drop it in the box below.
      </p>
      {errorMessage && <div className="error-msg">{errorMessage}</div>}
      {successMessage && (
        <div className="error-msg text-green-500">{successMessage}</div>
      )}
      <form noValidate onSubmit={formik.handleSubmit}>
        <InputText
          customClassName="!text-colorPrimaryDark"
          label="Activation code"
          isValid={formik.touched.code && !formik.errors.code}
          isInvalid={formik.touched.code && formik.errors.code}
          isError={formik.touched.code && formik.errors.code}
          msgError={formik.errors.code}
          isRequired
          {...formik.getFieldProps("code")}
        />
        <Button
          disabled={isConfirmSignUpRequest}
          className="w-full h-[50px] flex items-center justify-center"
          type="submit"
        >
          {isConfirmSignUpRequest ? (
            <CgSpinner className="animate-spin w-5 h-5" />
          ) : (
            "Create Account"
          )}
        </Button>
      </form>
      <p
        className="mt-6 inline-block text-blue-600 font-medium cursor-pointer hover:underline"
        onClick={resendCode}
      >
        Resend Code
      </p>
    </section>
  );
};

export default ConfirmAccountPage;
