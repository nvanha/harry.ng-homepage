import { v4 as uuidv4 } from "uuid";

import config from "@/configs";
import { DashboardPage } from "@/pages/Admin";

export default [
  {
    id: `admin-${uuidv4()}`,
    path: config.routesAdmin.dashboard,
    element: DashboardPage,
  },
];
