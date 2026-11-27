import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="text-center py-4 md:py-8 space-y-2">
      <Image
        src={logo}
        alt="logo"
        className="mx-auto md:w-auto w-2xs h-auto"
      ></Image>
      <p className="md:text-lg">Journalism Without Fear or Favour</p>
      <p className="md:text-xl">{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
