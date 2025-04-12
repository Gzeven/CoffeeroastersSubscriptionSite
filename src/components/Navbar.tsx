"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    const menu = document.getElementById("mobile-menu");
    if (menu) {
      if (!isOpen) {
        menu.setAttribute("inert", "");
      } else {
        menu.removeAttribute("inert");
      }
    }
  }, [isOpen]);

  return (
    <>
      <nav className="margin-item flex justify-between items-center py-8 md:py-10 md:pb-[54px] xl:pb-[50px] xl:py-[50px] relative max-w-[1280px] z-50">
        <Link href="/">
          <Image
            src="/images/shared/desktop/logo.svg"
            alt="Coffeeroasters"
            width={163}
            height={18}
            priority
            className="w-auto h-auto"
          />
        </Link>

        <button
          className="md:hidden flex flex-col gap-[3px] w-8 h-8 justify-center items-center relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle mobile menu"
        >
          {/* Hamburger bars */}
          <span
            className={`w-4 h-[3px] bg-dark-grey-blue transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-4 h-[3px] bg-dark-grey-blue transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-4 h-[3px] bg-dark-grey-blue transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        <ul className="hidden md:flex gap-8 uppercase text-sm tracking-widest text-grey font-body font-bold">
          <li>
            <Link href="/" className="hover:text-dark-grey-blue">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-dark-grey-blue">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/subscribe" className="hover:text-dark-grey-blue">
              Create Your Plan
            </Link>
          </li>
        </ul>
      </nav>

      <nav
  id="mobile-menu"
  className={`fixed top-[90px] left-0 w-full h-[calc(100vh-80px)] transition-transform duration-300 ease-in-out z-40 ${
    isOpen
      ? "translate-x-0 pointer-events-auto"
      : "translate-x-[100%] pointer-events-none"
  }`}
  style={{
    background: `linear-gradient(180deg, #FEFCF7 0%, #FEFCF7 55.94%, rgba(254, 252, 247, 0.504981) 100%)`,
  }}
>
        <ul className="flex flex-col items-center justify-start h-full space-y-8 font-bold text-xl text-dark-grey-blue pt-8 font-heading text-2xl">
          <li>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/subscribe"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
            >
              Create Your Plan
            </Link>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <style jsx global>{`
          body {
            overflow: hidden;
          }
        `}</style>
      )}
    </>
  );
};

export default Navbar;
