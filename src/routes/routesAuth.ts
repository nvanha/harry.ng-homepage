import { v4 as uuidv4 } from "uuid";

import config from "@/configs";
import {
  LoginPage,
  // RegisterPage, ConfirmAccountPage
} from "@/pages/Auth";

export default [
  {
    id: `auth-${uuidv4()}`,
    path: config.routesAuth.login,
    element: LoginPage,
  },
  // {
  //   id: `auth-${uuidv4()}`,
  //   path: config.routesAuth.register,
  //   element: RegisterPage,
  // },
  // {
  //   id: `auth-${uuidv4()}`,
  //   path: config.routesAuth.confirmAccount,
  //   element: ConfirmAccountPage,
  // },
];
