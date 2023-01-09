const routesAuth = {
  login: "/login",
  dashboard: "/auth/dashboard",
};

const routesLanding = {
  home: "/",
  works: "/works",
  workItem: "/works/:workId",
  notFound: "*",
};

export { routesAuth, routesLanding };
