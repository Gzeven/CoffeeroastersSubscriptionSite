import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "./Icons/FacebookIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import TwitterIcon from "./Icons/TwitterIcon";

export default function Footer() {
  return (
    <footer className="w-full ">
      <div className="max-w-[1280px] mx-6 md:mx-10 xl:mx-auto mb-[72px] bg-dark-grey-blue md:px-10 xl:px-20 py-[54px] flex flex-col xl:flex-row items-center justify-center xl:justify-start">
        {/* Logo */}
        <Image
          src="/images/shared/desktop/logo-white.svg"
          alt="Logo"
          width={200}
          height={40}
          style={{ width: "auto", height: "auto" }}
          loading="lazy"
        />

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row items-center gap-6 md:gap-[28px] xl:gap-8 my-12 md:mt-8 md:mb-16 xl:my-0 text-grey text-xs font-nav font-bold uppercase xl:ml-[102px]">
          <Link href="/" className="hover:text-light-cream transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-light-cream transition">
            About Us
          </Link>
          <Link href="/subscribe" className="hover:text-light-cream transition">
            Create Your Plan
          </Link>
        </nav>

        {/* Social Media Links */}
        <div className="flex items-center gap-6 xl:ml-auto">
          <Link
            href="https://facebook.com"
            target="_blank"
            aria-label="Visit us on Facebook"
            className="group"
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            aria-label="Visit us on Twitter"
            className="group"
          >
            <TwitterIcon />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            aria-label="Visit us on Instagram"
            className="group"
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
