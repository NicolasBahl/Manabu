"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Volume2 } from "lucide-react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { Kanji } from "@/types/kanji";
import { cn } from "@/lib/utils";

type KanjiCardProps = {
  kanji: string;
  details: Kanji;
  handleSpeak: (kanji: string) => void;
};

const KanjiCard = ({ kanji, details, handleSpeak }: KanjiCardProps) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const getColorsBadge = (jlpt: number) => {
    if (jlpt === 1) return "bg-red-500";
    if (jlpt === 2) return "bg-yellow-500";
    if (jlpt === 3) return "bg-green-500";
    if (jlpt === 4) return "bg-blue-500";
    if (jlpt === 5) return "bg-purple-500";
  };

  const getColorText = (jlpt: number) => {
    if (jlpt === 1) return "text-red-400";
    if (jlpt === 2) return "text-yellow-400";
    if (jlpt === 3) return "text-green-400";
    if (jlpt === 4) return "text-blue-400";
    if (jlpt === 5) return "text-purple-400";
  };

  return (
    <Flippy
      flipOnClick={false}
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      <FrontSide>
        <Card
          onClick={() => setIsFlipped(true)}
          className="w-[250px] h-[300px] flex flex-col justify-between transition-all duration-300 hover:shadow-lg cursor-pointer relative"
        >
          <Badge
            className={cn(
              "text-white px-3 py-1 absolute top-2 left-2",
              getColorsBadge(details.jlpt_new),
            )}
          >
            {details.jlpt_new === null ? "HORS JLPT" : `JLPT N${details.jlpt_new}`}
          </Badge>

          <CardHeader className="flex-grow flex items-center justify-center p-6 pt-10">
            <div className="text-7xl font-bold mb-4">{kanji}</div>
          </CardHeader>
          <CardFooter className="flex justify-end p-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSpeak(kanji);
              }}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </CardFooter>
        </Card>
      </FrontSide>

      <BackSide>
        <Card
          onClick={() => setIsFlipped(false)}
          className="w-[250px] h-[300px]"
        >
          <CardHeader className="text-center pt-8">
            <h3 className="text-xl font-semibold">Meaning</h3>
            <p
              className={cn(
                "text-3xl font-bold",
                getColorText(details.jlpt_new),
              )}
            >
              {details.meanings[0]}
            </p>
          </CardHeader>
          <CardContent className={"px-4"}>
            <h3 className="text-center text-xl font-semibold">Readings</h3>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <span className="font-medium">On:</span>
              <span> {details.readings_on}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <span className="font-medium">Kun:</span>
              <span> {details.readings_kun}</span>
            </div>
          </CardContent>
          <CardFooter className="text-center pb-4"></CardFooter>
        </Card>
      </BackSide>
    </Flippy>
  );
};

export default KanjiCard;
