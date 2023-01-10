import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// import routes
import routesAuth from "@/routes/routesAuth";
import routesAdmin from "@/routes/routesAdmin";
import routesLanding from "@/routes/routesLanding";

// import layouts
import AuthLayout from "@/layouts/AuthLayout";
import AdminLayout from "@/layouts/AdminLayout";
import LandingLayout from "@/layouts/LandingLayout";

// import others
import Loading from "../loading";

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routesAuth.map((route) => {
          const Page = route.element;
          const Layout: any = AuthLayout;

          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        {routesAdmin.map((route) => {
          const Page = route.element;
          const Layout: any = AdminLayout;

          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        {routesLanding.map((route) => {
          const Page = route.element;
          const Layout: any = LandingLayout;

          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default Routing;
