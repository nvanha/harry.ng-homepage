import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[232px] min-h-screen border-r-[1px] border-[#32324d]">
      <div className="pl-6 h-[73px] flex items-center text-lg font-bold relative after:absolute after:bottom-0 after:left-6 after:w-[40px] after:h-[1px] after:bg-[#32324d]">
        Content
      </div>
      <div className="py-6">
        <p className="uppercase text-colorSecondaryDark font-bold text-xs pl-6 pr-4">
          Select table
        </p>
        <ul className="py-2">
          <li>
            <NavLink
              to="/auth/content-manager/works"
              className={({ isActive }) =>
                `py-2 font-bold w-full block pl-[50px] relative before:absolute before:w-1 before:h-1 before:bg-white before:rounded-full before:left-9 before:top-1/2 before:-translate-y-1/2 ${
                  isActive
                    ? "text-green-400 before:bg-green-400 after:absolute after:w-[3px] after:h-full after:top-0 after:right-0 after:bg-green-400 after:rounded-tl-md after:rounded-bl-md"
                    : ""
                }`
              }
            >
              WorksWorkspace
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth/content-manager/demos"
              className={({ isActive }) =>
                `py-2 font-bold w-full block pl-[50px] relative before:absolute before:w-1 before:h-1 before:bg-white before:rounded-full before:left-9 before:top-1/2 before:-translate-y-1/2 ${
                  isActive
                    ? "text-green-400 before:bg-green-400 after:absolute after:w-[3px] after:h-full after:top-0 after:right-0 after:bg-green-400 after:rounded-tl-md after:rounded-bl-md"
                    : ""
                }`
              }
            >
              Demo
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
