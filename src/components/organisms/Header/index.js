import Button from "components/atoms/Button";
import InputText from "components/atoms/Form/InputText";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import showItem from "utils/scrollTo";

import "./index.scss";
export default function Header({ breedRef, isDetail, homeRef }) {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const headerNav = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Breeds",
      path: "#breeds",
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

  useEffect(() => {
    if (!isDetail) {
      const sections = document.querySelectorAll("section");
      console.log("sections", sections);
      const navLink = document.querySelectorAll(".nav-link");
      console.log("navLink :>> ", navLink);
      // console.log("navLink :>> ", navLink);
      function onScroll() {
        let len = sections.length;
        while (--len && window.scrollY + 250 < sections[len].offsetTop) {}
        navLink.forEach((link) => {
          link?.classList?.remove("active");
        });
        navLink?.[len]?.classList?.add("active");
      }
      window?.addEventListener("scroll", onScroll);
      return () => {
        window?.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  const handleOnClick = (item, e) => {
    e.preventDefault();
    showItem(item);
  };

  return (
    <div
      ref={headerRef}
      className="h-24 fixed top-0 left-0 w-full z-[99] header"
    >
      <div className="flex flex-row container h-full justify-between m-auto items-center px-4 lg:px-0 ">
        <div className="text-4xl font-semibold">
          <a href="/">Catty.</a>
        </div>

        <ul className="header__nav flex ">
          {homeRef ? (
            <li
              className={`font-medium py-1 ml-8 relative hover:text-primaryColor text-xl nav-link ${
                isDetail ? "" : "active"
              }`}
              onClick={(eve) => handleOnClick(homeRef, eve)}
            >
              <Link to={"/#home"}>Home</Link>
            </li>
          ) : (
            <li
              className={`font-medium py-1 ml-8 relative hover:text-primaryColor text-xl nav-link ${
                isDetail ? "" : "active"
              }`}
            >
              <Link to={"/"}>Home</Link>
            </li>
          )}

          {!isDetail && (
            <li
              className={`font-medium py-1 ml-8 relative hover:text-primaryColor text-xl nav-link `}
              onClick={(eve) => handleOnClick(breedRef, eve)}
            >
              <Link to={"/#breeds"}>Breeds</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
