import Image from "next/image";
import Link from "next/link";
import React from "react";
import Searchbar from "../molecules/Searchbar";
import { Bell, Home } from "lucide-react";
import ShoppingCart from "../molecules/ShoppingCart";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border border-gray-200 pb-4">
      {/* {Left} */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          Trendie Shop
        </p>
      </Link>
      {/* {Right} */}
      <div className="flex gap-6 py-2 items-center ">
        <Searchbar />
        <Link href="/" className="">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCart />
        <Link href="/sing-in">Sign-In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
