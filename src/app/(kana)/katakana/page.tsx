import DATA from "../../../data/katakana.json";
import KanaCard from "../KanaCard";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Katakana",
    description: "Katana page",
};

const Katakana = () => {
  const katakanas: { kana: string; romaji: string }[] = DATA;
  return (
    <div className="container mx-auto mt-6 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {katakanas.map((hiragana) => {
          return (
            <KanaCard
              key={hiragana.kana}
              type={"カタカナ"}
              kana={hiragana.kana}
              romaji={hiragana.romaji}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Katakana;
