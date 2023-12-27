import Link from "next/link";
import React from "react";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Notes",
    href: "/notes",
  },
  {
    title: "About",
    href: "/about",
  },
];

export default function NavBar() {
  return (
    <section className="l">
      <nav>
        <ul className="flex gap-5 p-4 max-w-2xl">
          {navItems.map((item) => (
            <Link href={item.href}>
              {" "}
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </section>
  );
}
