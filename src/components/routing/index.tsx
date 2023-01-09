import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// import routes
import routesAuth from "@/routes/routesAuth";
import routesLanding from "@/routes/routesLanding";

// import layouts
import AuthLayout from "@/layouts/AuthLayout";
import LandingLayout from "@/layouts/LandingLayout";

// import others
import Loading from "../loading";

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routesAuth.map((route) => {
          const Page = route.element;
          const Layout = AuthLayout;

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
          const Layout = LandingLayout;

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
