import { Route, Routes } from "react-router-dom";

// import routes
import routesLanding from "@/routes/routesLanding";

// import layouts
import LandingLayout from "@/layouts/LandingLayout";
import { Suspense } from "react";
import Loading from "../loading";

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
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
