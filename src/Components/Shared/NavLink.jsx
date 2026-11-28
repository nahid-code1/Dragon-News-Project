"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  //   console.log(pathName);
  const isActive = href === pathName;
  return (
    <Link
      href={href}
      className={`${isActive ? "underline underline-offset-2" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
