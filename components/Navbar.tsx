"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

export default function Navbar() {
  const params = useParams();
  const routes = [
    {
      href: `${params}/products`,
      label: "Products",
    },
    {
      href: `${params}/newsletter`,
      label: "NewsLetter",
    },
    {
      href: `${params}/newsletter`,
      label: "YouTube",
    },
    {
      href: `${params}/jobs`,
      label: "Jobs",
    },
    {
      href: `${params}/login`,
      label: "Login",
    },
  ];
  return (
    <nav className="bg-slate-900 md:bg-white text-white md:text-black py-4 px-2 fixed top-0 w-full z-10">
      <div className="flex justify-between items-center">
        <div className="flex">
          <Menu className="mr-4 md:hidden" />
          <Image
            src={
              "https://bytebytego.com/_next/static/media/logo-h5.43646616.svg"
            }
            height={100}
            width={100}
            alt="Bytebytego"
            className="md:hidden"
          />
          <Image
            src={"https://bytebytego.com/_next/static/media/logo.5c3ffd6e.svg"}
            height={120}
            width={120}
            alt="Bytebytego"
            className="hidden md:block ml-4"
          />
        </div>
        <div className="flex ">
          {routes.map((route) => (
            <Button
              key={route.label}
              variant={"link"}
              className={" hidden md:flex font-normal"}
            >
              {route.label}
            </Button>
          ))}
          <Button variant={"link"} className={"text-white md:hidden"}>
            Products
          </Button>
          <Button variant={"link"} className={"text-white md:hidden"}>
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
}
