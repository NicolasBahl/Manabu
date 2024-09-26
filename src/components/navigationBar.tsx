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
    <div  className={"bg-gr flex justify-between items-center"}>
      <Link href={"/"}>
        <Image
          className={"mx-2 my-2"}
          src={Manabu}
          width={150}
          height={150}
          alt="logo of Manabu"
        />
      </Link>
      {links.map((link, index) => {
        return (
          <Link
            className={"text-base font-bold mr-8"}
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
