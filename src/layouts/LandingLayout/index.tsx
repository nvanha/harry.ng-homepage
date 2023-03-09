import { useEffect } from "react";

import { Footer, Header, ThreeSection } from "./components";

const LandingLayout = ({ children }) => {
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (!currentTheme) {
      localStorage.setItem("theme", "dark");
    }

    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div id="landing-layout" className="landing-layout">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pt-14">
        <ThreeSection />
        <div className="relative z-[2]">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
