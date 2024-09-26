"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Volume2 } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

type KanaCardProps = {
  type: "ひらがな" | "カタカナ";
  kana: string;
  romaji: string;
};

const KanaCard = (props: KanaCardProps) => {
  const getKanaBadgeColor = (type) => {
    if (type === "ひらがな") return "bg-red-500";
    else return "bg-yellow-500";
  };

  const handleSpeak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    speechSynthesis.speak(utterance);
  };

  const { type, kana, romaji } = props;
  return (
    <Card className="w-[250px] h-[200px] flex flex-col justify-between transition-all duration-300 hover:shadow-lg cursor-pointer relative">
      <Badge
        className={cn(
          "text-white px-3 py-1 absolute top-2 left-2",
          getKanaBadgeColor(type),
        )}
      >
        {type}
      </Badge>
      <CardHeader className="flex justify-center  items-center">
        <div className="text-7xl font-bold">{kana}</div>
        <div className={"text-center text-gray-400"}>
          {romaji.toUpperCase()}
        </div>
      </CardHeader>

      <CardFooter className="flex justify-end pb-2 pr-2">
        <button
          onClick={() => {
            handleSpeak(kana);
          }}
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </CardFooter>
    </Card>
  );
};

export default KanaCard;
