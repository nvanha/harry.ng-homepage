import React from "react";
import { v4 as uuidv4 } from "uuid";

import config from "@/configs";

const HomePage = React.lazy(() => import("@/pages/Landing/HomePage"));
const WorkItemPage = React.lazy(() => import("@/pages/Landing/WorkItemPage"));
const WorksPage = React.lazy(() => import("@/pages/Landing/WorksPage"));
const NotFoundPage = React.lazy(() => import("@/pages/Other/NotFoundPage"));

export default [
  {
    id: `landing-${uuidv4()}`,
    path: config.routesLanding.home,
    element: HomePage,
  },
  {
    id: `landing-${uuidv4()}`,
    path: config.routesLanding.works,
    element: WorksPage,
  },
  {
    id: `landing-${uuidv4()}`,
    path: config.routesLanding.workItem,
    element: WorkItemPage,
  },
  {
    id: `landing-${uuidv4()}`,
    path: config.routesLanding.notFound,
    element: NotFoundPage,
  },
];
