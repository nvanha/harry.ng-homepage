import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "@/components/loading";

const AdminLayout = ({ children }) => {
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
      if (!isAuth) navigate("/login");
    }
  }, [isAuth, isCheck]);

  const render = () => {
    if (isLoading) return <Loading />;

    return (
      <div id="admin-layout" className="admin-layout">
        <main className="px-4 max-w-3xl mx-auto">{children}</main>
      </div>
    );
  };

  return render();
};

export default AdminLayout;
