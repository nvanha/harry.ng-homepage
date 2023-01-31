import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const MenuMobile = () => {
  return (
    <Menu>
      <MenuHandler>
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center hover:opacity-70">
          <IoMenu className="text-2xl sm:hidden" />
        </div>
      </MenuHandler>
      <MenuList className="border-[1px] border-colorBorderDefaultLight bg-colorMainBgLight text-colorTextPrimaryLight shadow-shadowMediumLight dark:border-colorBorderDefaultDark dark:bg-colorMainBgDark dark:text-colorTextPrimaryDark dark:shadow-shadowMediumDark">
        <NavLink
          to="/works"
          className="block rounded-md border-0 px-3 py-2 outline-0 transition-all hover:bg-blue-800 hover:text-white dark:hover:bg-blue-700"
        >
          Works
        </NavLink>
      </MenuList>
    </Menu>
  );
};

export default MenuMobile;
