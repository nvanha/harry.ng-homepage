import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

import { ButtonCustom } from "@/components/forms";

const MenuMobile = () => {
  return (
    <Menu>
      <MenuHandler>
        <ButtonCustom
          color="blue"
          customClassName="w-10 h-10 p-0 ml-2 sm:hidden"
        >
          <IoMenu className="w-5 h-5" />
        </ButtonCustom>
      </MenuHandler>
      <MenuList className="text-black-700 bg-backgroundHeaderLight dark:bg-backgroundBodyDark dark:text-colorPrimaryDark">
        <NavLink
          to="/works"
          className={({ isActive }) =>
            `px-3 py-2 block rounded-md transition-all hover:bg-backgroundDropdownItemActive ${
              isActive
                ? "bg-backgroundDropdownItemActive dark:text-black-700"
                : ""
            }`
          }
        >
          Works
        </NavLink>
      </MenuList>
    </Menu>
  );
};

export default MenuMobile;
