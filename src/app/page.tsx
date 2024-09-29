import Image from "next/image";
import Landingpage from "@/assets/images/landing-page.png";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import WebSiteConceptCard from "@/components/webSiteConceptCard";

import * as React from "react";
export default function Page() {
  return (
    <>
      <div className={"py-24 px-10 flex items-center justify-around"}>
        <div className={" flex-col"}>
          <h2 className={"uppercase text-6xl font-bold"}>
            Start your journey with
            <br />
            <span className={"text-6xl text-slate-300"}>MANABU (学ぶ)</span>
          </h2>
          <p className="text-lg mt-5 text-slate-300">
            Embrace the challenge, discover the language, and take the first
            stroke toward fluency.
          </p>
          <p className="text-lg text-slate-300">
            Your journey to mastering Japanese begins here!
          </p>
          <Button className={"mt-3"} variant={"secondary"}>
            <Play className="mr-1 h-4 w-4" height={15} width={15} />
            Start your journey
          </Button>
        </div>
        <Image
          className={"hidden md:block rounded-3xl"}
          src={Landingpage}
          alt={"landing page image"}
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col items-center md:flex md:flex-row md:justify-between lg:flex lg:justify-around">
        <WebSiteConceptCard
          title={"Hiragana"}
          description={
            "Discover Hiragana, the essential phonetic script used in the Japanese language, perfect for beginners to read and write Japanese."
          }
          icon={"ひらがな"}
        />
        <WebSiteConceptCard
          title={"Katakana"}
          description={
            "Learn about Katakana, the script used primarily for foreign words, loanwords, and onomatopoeia in Japanese, adding flair to your language skills."
          }
          icon={"カタカナ"}
        />
        <WebSiteConceptCard
          title={"Kanji Characters"}
          description={
            "Explore the complex and expressive world of Kanji, where each character carries unique meanings and historical significance."
          }
          icon={"文字"}
        />
      </div>
    </>
  );
}
