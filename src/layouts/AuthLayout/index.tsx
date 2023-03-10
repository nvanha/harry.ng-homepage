import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "@/components/loading";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isCheck, setIsCheck] = useState(false);

  const checkAuth = async () => {
    try {
      await Auth.currentSession();
      setIsAuth(true);
      setIsLoading(false);
      setIsCheck(true);
    } catch (e) {
      setIsLoading(false);
      setIsCheck(true);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isCheck) {
      if (isAuth) navigate("/auth/dashboard");
    }
  }, [isAuth, isCheck]);

  const render = () => {
    if (isLoading) return <Loading />;

    return (
      <div
        id="auth-layout"
        className="bg-[#181826] w-screen min-h-screen text-colorPrimaryDark auth-layout"
      >
        <main className="py-14 px-4 max-w-2xl mx-auto">{children}</main>
      </div>
    );
  };

  return render();
};

export default AuthLayout;
