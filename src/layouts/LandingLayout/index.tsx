import { useEffect } from "react";

import { Footer, Header, ThreeItem } from "./components";

const LandingLayout = ({ children }) => {
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div id="landing-layout" className="landing-layout">
      <Header />
      <main className="pt-14 px-4 max-w-3xl mx-auto">
        <ThreeItem />
        <div className="relative z-[2]">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
