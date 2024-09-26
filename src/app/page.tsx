import Image from "next/image";
import Landingpage from "@/assets/images/landing-page.png";
import { Button } from "@/components/ui/button";
import { Play, Rocket, Swords } from "lucide-react";
import CardUi from "@/components/card";
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
      <div className="flex flex-col items-center sm:flex-col sm:items-center md:flex-row lg:flex-row lg:justify-around">
        <CardUi
          title={"Learn at Your Own Pace"}
          description={
            "Discover a flexible learning experience tailored to your schedule and progress."
          }
          icon={<Rocket />}
        />
        <CardUi
          title={"Engaging and Interactive"}
          description={
            "Dive into fun quizzes, flashcards, and writing exercises that keep you motivated and inspired."
          }
          icon={<Swords />}
        />
        <CardUi
          title={"Master Hiragana, Katakana, and Kanji"}
          description={
            "Build a solid foundation in all three writing systems, unlocking the beauty of the Japanese language."
          }
          icon={"文字"}
        />
      </div>
    </>
  );
}
