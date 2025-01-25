"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";

const Navbar = () => {

  const pathname = usePathname();

  const navLinks = [
    {
      href: "/",
      title: 'صفحه اصلی ',
    },
    {
      href: "/store",
      title: "فروشگاه",
    }
  ];
  return (
    <nav className="shadow p-4">
      <Container>
        <div className="flex justify-between">
        <div>
        {navLinks.map((item) => (
          <Link
          className={`mr-4 ${pathname === item.href ? "text-sky-400" : ""} `}
          key={item.href}
          href={item.href}
          >
            {item.title}
          </Link>
        ))}
        </div>

<div>
  <Link href="/cart">سبد خرید</Link>
</div>
        
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
