"use client";
import React from "react";
import Logo from "../assets/images/UTESLogo.svg";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky inset-x-0 top-0 z-30 w-full shadow-lg shadow-cyan-500/80 bg-white/90 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-full items-center justify-between py-6">
          <Link
            href={"/"}
            className="flex flex-row duration-300 hover:scale-105 active:scale-95"
          >
            <Image
              src={Logo}
              alt="UTES logo"
              height={80}
              width={80}
              quality={100}
            />{" "}
            <h1 className="w-60 flex-wrap pt-4 pl-5 text-primary max-sm:text-sm">
              University of Toronto Esports
            </h1>{" "}
          </Link>
          {/* non mobile nav */}

          <div className="hidden lg:flex space-x-7 font-bold text-lg uppercase text-primary tracking-widest">
            <Link
              href={"/about"}
              className="duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500"
            >
              about
            </Link>
            <Link
              href={"/staff"}
              className="duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500"
            >
              staff
            </Link>
            <Link
              href={"/teams"}
              className="duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500"
            >
              teams
            </Link>
            <Link
              href={"/contact"}
              className="duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500"
            >
              contact
            </Link>
            <Link
              href={"/sponsors"}
              className="duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500"
            >
              sponsors
            </Link>
          </div>

          {/* Mobile nav */}
          {!open && (
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="lg:hidden "
            >
              <Menu className="h-10 w-10" />
            </button>
          )}
        </div>
        {open && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-black/80"></div>
        )}
        {open && (
          <div className="font-bold text-2xl uppercase text-primary tracking-widest flex flex-col z-40 bg-white fixed h-screen right-0 top-0 lg:hidden w-2/3 min-w-[320px] p-12">
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="mb-12"
            >
              <X className="h-10 w-10" />
            </button>
            <Link
              href={"/about"}
              className="border-b border-zinc-200 py-6 duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500"
            >
              about
            </Link>
            <Link
              href={"/staff"}
              className="border-b border-zinc-200 py-6 duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500"
            >
              staff
            </Link>
            <Link
              href={"/teams"}
              className="border-b border-zinc-200 py-6 duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500"
            >
              teams
            </Link>
            <Link
              href={"/contact"}
              className="border-b border-zinc-200 py-6 duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500"
            >
              contact
            </Link>
            <Link
              href={"/sponsors"}
              className="border-b border-zinc-200 py-6 duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500"
            >
              sponsors
            </Link>
          </div>
        )}
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
