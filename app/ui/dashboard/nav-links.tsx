"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect,useState } from "react";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

const themes = [
  { name: "blue", color: "#2589FE" },
  { name: "red", color: "#e74c3c" },
  { name: "green", color: "#27ae60" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<string>("#2589FE");
  let root: any;
  if (typeof window !== "undefined") {
    root = document.documentElement;
  }
  useEffect(()=>{
    root.style.setProperty("--color-fill", theme)
  },[theme])
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-primary-base": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
      <div className="hidden md:block">
        <hr className=" md:block" />
        <p className=" md:flex gap-2 px-2 mt-4">
          <PaintBrushIcon className="w-6" /> Themes
        </p>
      </div>
      <div className="hidden justify-between px-2 cursor-pointer md:flex">
        {themes?.map((ele) => {
          return (
            <div
              key={ele.name}
              style={{ backgroundColor: ele.color }}
              className={clsx(
                `h-10 w-10 mt-2 rounded-full  `,
                { "outline outline-offset-4": ele.color === theme }
              )}
              onClick={() => {
                setTheme(ele.color);
              }}
            />
          );
        })}
      </div>
    </>
  );
}
