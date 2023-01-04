import { v4 as uuidv4 } from "uuid";

import config from "@/configs";
import { HomePage, WorkItemPage, WorksPage } from "@/pages/Landing";
import { NotFoundPage } from "@/pages/Other";

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
