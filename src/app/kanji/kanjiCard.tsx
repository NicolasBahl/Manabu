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

  const getBadgeColor = (jlpt: number | null) => {
    if (jlpt === 1) {
      return "bg-red-500";
    }
    if (jlpt === 2) {
      return "bg-yellow-500";
    }
    if (jlpt === 3) {
      return "bg-green-500";
    }
    if (jlpt === 4) {
      return "bg-blue-500";
    }
    if (jlpt === 5) {
      return "bg-purple-500";
    }
  };

  const getMeaningTextColor = (jlpt: number | null) => {
    if (jlpt === 1) {
      return "text-red-500";
    }
    if (jlpt === 2) {
      return "text-yellow-500";
    }
    if (jlpt === 3) {
      return "text-green-500";
    }
    if (jlpt === 4) {
      return "text-blue-500";
    }
    if (jlpt === 5) {
      return "text-purple-500";
    }
  };

  const handleCardClick = () => setIsFlipped(!isFlipped);

  const handleSpeakClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleSpeak(kanji);
  };

  return (
    <Flippy
      flipOnClick={false}
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      <FrontSide>
        <Card
          onClick={handleCardClick}
          className="w-64 h-80 flex flex-col justify-between transition-all duration-300 hover:shadow-lg cursor-pointer relative group"
        >
          <Badge
            className={cn(
              "text-white px-3 py-1 absolute top-2 left-2 transition-colors",
              getBadgeColor(details.jlpt_new),
            )}
          >
            {details.jlpt_new === null
              ? "Non-JLPT"
              : `JLPT N${details.jlpt_new}`}
          </Badge>

          <CardHeader className="flex-grow flex items-center justify-center p-6 pt-10">
            <div className="text-6xl font-bold mb-4 group-hover:scale-110 transition-transform">
              {kanji}
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end p-2">
            <button
              onClick={handleSpeakClick}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Speak kanji"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </CardFooter>
        </Card>
      </FrontSide>

      <BackSide>
        <Card
          onClick={handleCardClick}
          className="w-64 h-80 flex flex-col justify-between overflow-hidden group"
        >
          <CardHeader className="text-center pt-6">
            <h3 className="text-lg font-semibold text-muted-foreground">
              Meaning
            </h3>
            <p
              className={cn(
                "text-3xl font-bold mt-2",
                getMeaningTextColor(details.jlpt_new),
              )}
            >
              {details.meanings[0]}
            </p>
          </CardHeader>
          <CardContent className="px-4 flex-grow">
            <h3 className="text-center text-lg font-semibold text-muted-foreground mb-2">
              Readings
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span
                  className={cn(
                    "font-medium",
                    getMeaningTextColor(details.jlpt_new),
                  )}
                >
                  On:
                </span>
                {details.readings_on.length === 0 ? (
                  <span className="text-right">None</span>
                ) : (
                  <span className="text-right">{details.readings_on}</span>
                )}
              </div>
              <div className="flex justify-between items-center">
                <span
                  className={cn(
                    "font-medium",
                    getMeaningTextColor(details.jlpt_new),
                  )}
                >
                  Kun:
                </span>
                {details.readings_kun.length === 0 ? (
                  <span className="text-right">None</span>
                ) : (
                  <span className="text-right">{details.readings_kun}</span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </BackSide>
    </Flippy>
  );
};

export default KanjiCard;
