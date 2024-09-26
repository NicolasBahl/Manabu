import DATA from "../../../data/hiragana.json";
import KanaCard from "../KanaCard";

const Hiragana = () => {
  const hiraganas: { kana: string; romaji: string }[] = DATA;
  return (
    <div className="container mx-auto mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {hiraganas.map((hiragana) => {
          return (
            <KanaCard
              key={hiragana.kana}
              type={"ひらがな"}
              kana={hiragana.kana}
              romaji={hiragana.romaji}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hiragana;
