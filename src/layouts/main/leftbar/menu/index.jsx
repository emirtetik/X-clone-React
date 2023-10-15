import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utils/consts";
import More from "./more";
import NewX from "./new";
import { useAccount } from "~/store/auth/hooks";
export default function Menu() {
  
 const account = useAccount()

  return (
    <nav className="mt-0.5 mb-1" key={account}>
      {mainMenu.map((menu, index) => (
        <NavLink key={index} to={typeof menu.path === 'function' ? menu.path() : menu.path} className="block py-1 group">
          {({ isActive }) => (
            <div
              className={classNames(
                "inline-flex items-center transition-colors p-3 rounded-full gap-5  text-[var(--color-base)] group-hover:bg-[--background-third]",
                { "font-bold": isActive }
              )}
            >
              <div className="w-[26px] h-[26px] relative ">
                {menu?.notifications && (
                  <span className="absolute flex items-center text-[var(--background--primary)] border border-[var(--background-primary)] justify-center -top-1.5 text-[11px] -right-1 w-[18px] h-[18px] rounded-full bg-[var(--color-primary)]">
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
