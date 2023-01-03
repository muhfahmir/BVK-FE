import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import "./index.scss";
export default function Header() {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const headerNav = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Breeds",
      path: "/breeds",
    },
  ];
  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <section
      ref={headerRef}
      className="h-32 fixed top-0 left-0 w-full z-50 header"
    >
      <div className="flex flex-row container h-full justify-between m-auto items-center">
        <div className="text-4xl font-semibold">
          <Link to="/">Catty.</Link>
        </div>

        <ul className="header__nav flex ">
          {headerNav.map((e, i) => (
            <li
              key={i}
              className={`font-medium py-1 ml-8 relative hover:text-red-500 hover:font-bold text-xl  ${
                i === active ? "active" : ""
              } `}
            >
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
