"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`${pathName === href ? "border-b-2 pb-0.5 font-semibold text-black border-b-cyan-500" : "text-black font-semibold"} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
