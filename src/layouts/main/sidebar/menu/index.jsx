import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utils/consts";
import More from "./more";
import NewX from "./new";
export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((menu, index) => (
        <NavLink key={index} to={menu.path} className="block py-1 group">
          {({ isActive }) => (
            <div
              className={classNames(
                "inline-flex items-center transition-colors p-3 rounded-full gap-5  group-hover:bg-[#eff3f41a]",
                { "font-bold": isActive }
              )}
            >
              <div className="w-[26px] h-[26px] relative ">
                {menu?.notifications && (
                  <span className="absolute flex items-center justify-center -top-1.5 text-[11px] -right-1 w-[18px] h-[18px] rounded-full bg-[#1d9bf0]">
                    {menu?.notifications}
                  </span>
                )}
                {!isActive && menu.icon.passive}
                {isActive && menu.icon.active}
              </div>
              <div className="pr-4 text-xl">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
        
        <More/>
       <NewX/>
    </nav>
  );
}
