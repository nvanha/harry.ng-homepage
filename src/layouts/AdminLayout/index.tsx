import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "@/components/loading";
import { Sidebar } from "./components";

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
      <div
        id="admin-layout"
        className="bg-[#181826] w-screen min-h-screen text-colorPrimaryDark admin-layout"
      >
        <div className="flex">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    );
  };

  return render();
};

export default AdminLayout;
