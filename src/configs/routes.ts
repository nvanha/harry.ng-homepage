const routesAuth = {
  login: "/auth/login",
  dashboard: "/auth/dashboard",
};

const routesLanding = {
  home: "/",
  works: "/works",
  workItem: "/works/:workId",
};

const routesGeneral = {
  notFound: "*",
};

export { routesAuth, routesLanding, routesGeneral };
