import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebarItems }) => {
  return (
    <div className="w-[232px] h-screen border-r-[1px] border-[#32324d] sidebar">
      <div className="sidebar-title">Content Manager</div>
      <div className="py-6">
        <p className="uppercase text-colorSecondaryDark font-bold text-xs pl-6 pr-4">
          Select table
        </p>
        <ul className="py-2">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.slug}
                className={({ isActive }) =>
                  `sidebar-link--item ${isActive ? "active" : ""}`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
