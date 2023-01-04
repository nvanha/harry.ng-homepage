import { useEffect, useState } from "react";
import { IoMoon, IoSunnyOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

import LogoURL from "@/assets/logo/logo-full.png";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const handleChangeTheme = () => {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-screen bg-white dark:bg-[#20202380] bg-opacity-25 backdrop-blur-md z-50 header-landing">
      <div className="max-w-3xl mx-auto p-2 flex items-center justify-between">
        <ul className="flex items-center">
          <li>
            <Link to="/" className="flex items-center gap-2 mr-5 font-bold">
              <img
                src={LogoURL}
                alt=""
                className="block h-10 transition-transform"
              />
              harry.ng
            </Link>
          </li>
          <li className="hidden sm:block">
            <NavLink
              to="/works"
              className="p-2 mr-2 hover:underline hover:underline-offset-4"
            >
              Works
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center">
          <button
            onClick={handleChangeTheme}
            className="w-10 h-10 flex items-center justify-center rounded-md bg-purple-500 dark:bg-orange-200 text-white dark:text-black-700 transition-opacity hover:opacity-70"
          >
            {theme === "light" ? <IoMoon /> : <IoSunnyOutline />}
          </button>
          <MenuMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
