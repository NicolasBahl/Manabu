"use client";

import Manabu from "@/assets/images/manabu.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Links = {
  name: string;
};

type NavigationBarProps = {
  links: Links[];
};

const NavigationBar = (props: NavigationBarProps) => {
  const { links } = props;
  const pathname = usePathname();

  return (
    <div className="container flex flex-col items-center justify-between  py-4 md:flex-row md:gap-0 md:px-6 md:py-6 ">
      <nav className="flex flex-col sm:flex sm:flex-row items-center gap-4 md:flex-row md:gap-6">
        <Link href="/" className="" prefetch={false}>
          <Image
            className={"w-[300px] mt-2.5 mb-2.5 "}
            src={Manabu}
            alt="logo of Manabu"
          />
        </Link>
        {links.map((link) => {
          const isActive = pathname === `/${link.name.toLowerCase()}`;
          return (
            <Link
              className={cn(
                isActive ? "text-slate-200" : "text-white",
                "text-xl",
              )}
              key={link.name.toUpperCase()}
              href={`/${link.name.toLowerCase()}`}
            >
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default NavigationBar;
