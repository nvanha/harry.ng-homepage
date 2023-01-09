import React from "react";
import { v4 as uuidv4 } from "uuid";

import config from "@/configs";

const LoginPage = React.lazy(() => import("@/pages/Auth/LoginPage"));
const DashboardPage = React.lazy(() => import("@/pages/Auth/DashboardPage"));
const NotFoundPage = React.lazy(() => import("@/pages/Other/NotFoundPage"));

export default [
  {
    id: `auth-${uuidv4()}`,
    path: config.routesAuth.login,
    element: LoginPage,
  },
  {
    id: `auth-${uuidv4()}`,
    path: config.routesAuth.dashboard,
    element: DashboardPage,
  },
];
