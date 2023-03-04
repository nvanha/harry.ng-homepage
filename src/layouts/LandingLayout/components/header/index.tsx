import { Tooltip } from "@material-tailwind/react";
import { useRef, useState } from "react";
import { BsSoundwave } from "react-icons/bs";
import { IoMoon, IoSunnyOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

import LogoURL from "@/assets/logo/logo-full.png";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isMusicPlay, setIsMusicPlay] = useState(false);

  const audioRef: any = useRef();

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

  const handlePlayMusic = () => {
    if (isMusicPlay) {
      audioRef.current.pause();
      setIsMusicPlay(false);
    } else {
      audioRef.current.play();
      setIsMusicPlay(true);
    }
  };

  return (
    <header className="grain-bg fixed top-0 left-0 z-50 w-screen bg-colorHeaderBgLight bg-opacity-25 text-colorHeaderTextLight backdrop-blur-md dark:bg-colorHeaderBgDark dark:bg-opacity-25 dark:text-colorHeaderTextDark">
      <div className="mx-auto flex max-w-3xl items-center justify-between p-2">
        <ul className="flex items-center">
          <li className="group">
            <Link to="/" className="mr-5 flex items-center font-bold">
              <img
                src={LogoURL}
                alt=""
                className="mr-2 block h-10 -rotate-[30deg] transition-transform group-hover:rotate-0"
              />
              harry.<span className="font-bold text-[#00987a]">_</span>
            </Link>
          </li>
          <Tooltip
            content={isMusicPlay ? "Turn off" : "Turn on"}
            className="text-sm font-semibold"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: -25 },
            }}
          >
            <li
              className={`mr-2 flex h-10 w-10 cursor-pointer items-center justify-center ${
                !isMusicPlay ? "opacity-50" : ""
              }`}
              onClick={handlePlayMusic}
            >
              <BsSoundwave
                className={`text-2xl ${isMusicPlay ? "animate-pulse" : ""}`}
              />
              <audio controls loop ref={audioRef} className="hidden">
                <source
                  src={`${
                    import.meta.env.VITE_AWS_S3_URI
                  }/music/Magical-Piano-Version.mp3`}
                  type="audio/mpeg"
                />
              </audio>
            </li>
          </Tooltip>
          <li className="hidden sm:block">
            <NavLink
              to="/works"
              className={({ isActive }) =>
                `relative mr-2 p-2 font-medium hover:underline hover:underline-offset-4 ${
                  isActive ? "underline underline-offset-4" : ""
                }`
              }
            >
              // Works{" "}
              <span className="absolute -top-[6px] right-0 text-[10px]">
                01
              </span>
            </NavLink>
          </li>
          <li className="hidden sm:block">
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `relative mr-2 p-2 font-medium hover:underline hover:underline-offset-4 ${
                  isActive ? "underline underline-offset-4" : ""
                }`
              }
            >
              // Blogs{" "}
              <span className="absolute -top-[6px] right-0 text-[10px]">
                02
              </span>
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center">
          <div
            className="flex h-10 w-10 cursor-pointer items-center justify-center hover:opacity-70"
            onClick={handleChangeTheme}
          >
            {theme === "light" ? (
              <IoMoon className="text-lg" />
            ) : (
              <IoSunnyOutline className="text-lg" />
            )}
          </div>
          <MenuMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
