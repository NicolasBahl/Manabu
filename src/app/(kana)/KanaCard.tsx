"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Volume2 } from "lucide-react";
import * as React from "react";
import { cn, handleSpeak } from "@/lib/utils";
import { M_PLUS_1 } from "next/font/google";

type KanaCardProps = {
  type: "ひらがな" | "カタカナ";
  kana: string;
  romaji: string;
};

const kanseiOpti = M_PLUS_1({
    subsets: ["latin-ext"],
    weight: ["700"],
    display: "swap",
    variable: "--font-kaisei-opti",
});

export default function KanaCard({ type, kana, romaji }: KanaCardProps) {
  const getKanaBadgeColor = (type: string) => {
    return type === "ひらがな" ? "bg-red-500" : "bg-yellow-500";
  };

  return (
    <Card className="w-full max-w-[250px] h-[200px] flex flex-col justify-between transition-all duration-300 hover:shadow-lg cursor-pointer relative group">
      <Badge
        className={cn(
          "text-white px-3 py-1 absolute top-2 left-2 transition-opacity",
          getKanaBadgeColor(type),
        )}
      >
        {type}
      </Badge>
      <div className={"absolute top-2 right-2"}>
        <button
          onClick={() => handleSpeak(kana)}
          className="p-2 rounded-full bg-primary/10 "
          aria-label="Speak kana"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>
      <CardContent className="flex flex-col items-center justify-center h-full pt-10">
        <div className={`${kanseiOpti.variable} font-sans text-7xl font-bold mb-2`}>{kana}</div>
        <div className="text-sm text-muted-foreground">
          {romaji.toUpperCase()}
        </div>
      </CardContent>
    </Card>
  );
}
