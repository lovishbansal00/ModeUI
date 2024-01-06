"use client";
import Image from "next/image";
import Link from "next/link";
import rightarrow from "../public/assets/images/right-arrow.svg";
import MobileMenu from "./MobileMenu";
import { links } from "@/components/type";

export default function Header() {
  return (
    <>
      <nav className="my-5 mx-20 py-0 px-8 box-border bg-white flex justify-between items-center">
        <Image
          src={"/assets/images/Logo.svg"}
          alt="Logo"
          width={98}
          height={40}
        />
        <ul className="lg:flex md:flex flex-row py-5 items-center justify-center gap-5 text-left text-sm text-darkslategray font-poppins hidden ">
          {links.map((link) => (
            <li key={link.link}>
              <Link
                href={`/${link.link}`}
                className=" hover:text-orangered-100 hover:underline hover:underline-orangered-100 hover:underline-offset-8 hover:underline-ease-in-out "
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <button className="relative hidden lg:inline-block md:inline-block items-center justify-between rounded-md bg-neutral-1200">
          <div className="inline-block text-base text-neutral-400 mx-1 leading-5 font-inter font-semibold ">
            Login
            <Image
              className=" inline-block px-1 z-50"
              src={rightarrow}
              alt="arrow"
            />
          </div>
        </button>
        <div className="lg:hidden md:hidden">
          <button className="navbar-burger flex items-center text-orangered-100">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div className="lg:hidden md:hidden">
        {" "}
        <MobileMenu />{" "}
      </div>
    </>
  );
}
