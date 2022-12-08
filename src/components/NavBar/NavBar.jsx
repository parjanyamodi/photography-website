import React from "react";
import { useNavigate } from "react-router-dom";
import WatermarkLight from "../../assets/watermark-light.png";
const navRoutes = [
  {
    title: "Explore",
    path: "/explore",
  },
  {
    title: "The Artist",
    path: "/the-artist",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
];

function Navbar() {
  const navigate = useNavigate();
  const redirectToPage = (e) => {
    const path = e.target.getAttribute("data-redirect");
    navigate(path);
  };

  return (
    <nav className="w-full flex flex-col fixed z-40 bg-white dark:bg-zinc-900 shadow-xl">
      <div className="w-full flex flex-col justify-between items-center bg-white dark:bg-zinc-900 relative">
        <div
          className="w-full flex flex-row justify-center hover:cursor-pointer"
          data-redirect="/"
          onClick={redirectToPage}
        >
          <img src={WatermarkLight} alt="watermark" className="w-80" />
        </div>
        <div className="w-full flex flex-col justify-between items-center bg-white dark:bg-zinc-900 relative"></div>
        <ul className="w-full flex flex-row gap-16 justify-center px-20 py-6">
          {navRoutes.map((navItem, idx) => {
            return (
              <li
                data-redirect={navItem.path}
                className="dark:text-white hover:text-sky-500 hover:cursor-pointer font-semibold text-lg"
                onClick={redirectToPage}
              >
                {navItem.title}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
