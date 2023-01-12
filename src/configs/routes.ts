const routesAuth = {
  login: "/login",
  register: "/register",
  confirmAccount: "/confirm-account/:username",
};

const routesAdmin = {
  dashboard: "/auth/dashboard",
  contentManager: "/auth/content-manager",
  contentManagerDetails: "/auth/content-manager/:table",
};

const routesLanding = {
  home: "/",
  works: "/works",
  workItem: "/works/:workId",
};

const routesGeneral = {
  notFound: "*",
};

export { routesAuth, routesAdmin, routesLanding, routesGeneral };
