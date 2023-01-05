import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#16162c]">
      <div className="container mx-auto py-12 px-4 lg:px-0">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="font-bold md:text-2xl text-base">Company</h3>
            <Link to="/" className="md:py-2 py-1 text-base md:text-xl ">
              About Us
            </Link>
            <Link to="/" className="md:py-2 py-1 text-base md:text-xl">
              Contact Us
            </Link>
            <Link to="/" className="md:py-2 py-1 text-base md:text-xl">
              Career
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold md:text-2xl text-base">Legacy</h3>
            <Link to="/" className="md:py-2 py-1 text-base md:text-xl">
              Term of Services
            </Link>
            <Link to="/" className="md:py-2 py-1 text-base md:text-xl">
              Privacy & Policy
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold md:text-2xl text-base">Touch Us</h3>
            <Link to="/" className="md:py-2 py-1 text-base md:text-xl">
              team@catty.com
            </Link>
            <Link to="/" className="md:py-2 py-1 text-base md:text-xl">
              Yogyakarta, Indonesia
            </Link>
            <Link to="/" className="md:py-2 py-1 text-base md:text-xl">
              021 - 112 - 339
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
