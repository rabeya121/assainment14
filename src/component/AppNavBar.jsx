import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const AppNavBar = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/database/menuData.json");
      const data = await res.json();
      setMenu(data);
    })();
  }, []);
  return (
    <div className="bg-clight py-5">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="flex justify-between items-center px-1">
          <h1 className="font-bold text-xl">
            Design<span className="uppercase text-cOrange">Agency</span>
          </h1>
          <ul className="flex p-1 gap-5 font-poppin font-semibold">
            {menu.map((item) => (
              <li key={item.id.toString()}>
                <NavLink className="p-2 block rounded" to={item.link}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <button className=" rounded-lg px-4 border-cDark border-2">
              Login
            </button>
            <button className=" rounded-lg px-3 bg-cDark text-white border-cDark border-2">
              Register
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppNavBar;
