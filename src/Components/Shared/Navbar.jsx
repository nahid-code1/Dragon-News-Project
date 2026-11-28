import Link from "next/link";
import React from "react";
import avatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const links = (
  <>
    <li>
      <NavLink href={"/"}>Home</NavLink>
    </li>
    <li>
      <NavLink href={"/about"}>About</NavLink>
    </li>
    <li>
      <NavLink href={"/career"}>Career</NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar flex justify-center items-center  container mx-auto mt-2 md:mt-4">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {""}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
              {""}
            </svg>
          </div>
          <div className=" ">
            <ul
              tabIndex={-1}
              className="menu text-lg menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-gray-600 "
            >
              {links}
            </ul>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg text-gray-600">
          {links}
        </ul>
      </div>
      <div className="navbar-end  flex  items-center gap-2">
        <Image
          className="hidden md:flex"
          src={avatar}
          alt="user avatar"
        ></Image>
        <Link href={"/login"} className="btn btn-neutral">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
