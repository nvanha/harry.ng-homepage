import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";

import LogoURL from "@/assets/logo/logo-full.png";

const Sidebar = () => {
  return (
    <div className="sticky top-0 left-0 w-[224px] h-screen bg-[#212134] border-r-[1px] border-[#32324d] flex flex-col">
      <div className="flex items-center py-4 px-3 border-b-[1px] border-[#32324d]">
        <Link to="/auth/dashboard">
          <img src={LogoURL} alt="" className="w-[34px]" />
        </Link>
        <div className="ml-2">
          <h3 className="text-sm font-semibold">Harry.ng CMS</h3>
          <p className="mt-1 text-xs text-colorSecondaryDark font-medium">
            Dashboard
          </p>
        </div>
      </div>
      <div className="flex-1 py-3 pl-3 pr-2">
        <ul>
          <li>
            <NavLink
              to="/auth/content-manager"
              className={({ isActive }) =>
                `flex items-center p-2 text-sm font-semibold text-colorSecondaryDark transition-all rounded-md hover:bg-[#181826] ${
                  isActive
                    ? "bg-[#181826] !text-green-500"
                    : "hover:text-colorPrimaryDark"
                }`
              }
            >
              <IoCreateOutline className="w-5 h-5 mr-2" /> Content Manager
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="py-4 px-3 border-t-[1px] border-[#32324d] flex items-center">
        <div className="w-[26px] h-[26px] rounded-full bg-[#009b7c] mr-2 font-bold text-center">
          H
        </div>
        <p className="text-sm flex-1 text-colorSecondaryDark font-medium">
          Nguyen Van Ha
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
