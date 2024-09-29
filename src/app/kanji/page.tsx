import KanjiPage from "@/app/kanji/kanjiPage";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Kanji",
  description: "Kanji page",
};

const Page = () => {
  return <KanjiPage />;
};

export default Page;
