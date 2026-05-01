"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./Button";

export const Navbar = () => {
  const pathname = usePathname();

  // Do not show navbar on the starting page
  if (pathname === "/") return null;

  return (
    <nav className="w-full bg-black/80 backdrop-blur-md border-b border-[#3D2F1B] fixed top-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-12 py-4 max-w-[1440px] mx-auto w-full">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-xl md:text-2xl uppercase font-bebas-neue tracking-wider">
            THE OPEN DOOR
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <Button
            className="px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm"
            variant="gold"
          >
            Order Now
          </Button>
        </div>
      </div>
    </nav>
  );
};
