"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Manabu from "@/assets/images/manabu.png";

type Links = {
  name: string;
};
type NavigationBarProps = {
  links: Links[];
};

const NavigationBar = (props: NavigationBarProps) => {
  const { links } = props;

  return (
    <div  className={"flex flex-col justify-center items-center md:flex-row md:justify-around "}>
      <Link href={"/"}>
        <Image
          className={"w-[300px] mt-2.5 mb-2.5 md:w-[200px]"}
          src={Manabu}
          alt="logo of Manabu"
        />
      </Link>
      {links.map((link, index) => {
        return (
          <Link
            className={"text-2xl mt-2 mb-2 font-bold md:text-xl "}
            key={index}
            href={`/${link.name.toLowerCase()}`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationBar;
