"use client";

import * as React from "react";
import DATA from "../../data/kanji.json";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import KanjiCard from "@/app/kanji/kanjiCard";
import FilterButton from "@/app/kanji/filterButton";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

const Page = () => {
  const kanjiEntries = Object.entries(DATA).sort(
    ([, detailsA], [, detailsB]) => detailsB.jlpt_new - detailsA.jlpt_new,
  );

  const [filteredData, setFilteredData] = React.useState(kanjiEntries);
  const [toggle, setToggle] = React.useState(false);

  const [startIndex, setStartIndex] = React.useState(0);

  const [selectedLevel, setSelectedLevel] = React.useState<number | null>(null);

  const [endIndex, setEndIndex] = React.useState(12);

  const rowsPerPage = 12;

  const [inputValue, setInputValue] = React.useState("");

  const [debounceTimer, setDebounceTimer] =
    React.useState<NodeJS.Timeout | null>(null);

  const handleSpeak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    speechSynthesis.speak(utterance);
  };

  const handleFilter = (level: number) => {
    if (selectedLevel === level) {
      setSelectedLevel(null);
      setFilteredData(kanjiEntries);
    } else {
      setSelectedLevel(level);
      const filtered = kanjiEntries.filter(
        ([, details]) => details.jlpt_new === level,
      );
      setFilteredData(filtered);
    }
    setToggle(!toggle);
    setStartIndex(0);
    setEndIndex(rowsPerPage);
  };

  useEffect(() => {
    if (inputValue === "" && selectedLevel === null) {
      setFilteredData(kanjiEntries);
    }
  }, [kanjiEntries, inputValue, selectedLevel]);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setInputValue(value);

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const newTimer = setTimeout(() => {
      setFilteredData(kanjiEntries.filter(([kanji]) => kanji.includes(value)));
    }, 1000);
    setDebounceTimer(newTimer);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row ml-10 mr-10">
        <FilterButton
          className={"mx-3 sm:mx-3 my-3"}
          isSelected={selectedLevel}
          label="JLPT 5"
          onClick={() => handleFilter(5)}
          buttonNumber={5}
        />
        <FilterButton
          className={"mx-3 sm:mx-3 mt-3 mb-3"}
          isSelected={selectedLevel}
          label="JLPT 4"
          onClick={() => handleFilter(4)}
          buttonNumber={4}
        />
        <FilterButton
          className={"mx-3 sm:mx-3 mt-3 mb-3"}
          isSelected={selectedLevel}
          label="JLPT 3"
          onClick={() => handleFilter(3)}
          buttonNumber={3}
        />
        <FilterButton
          className={"mx-3 sm:mx-3 mt-3 mb-3"}
          isSelected={selectedLevel}
          label="JLPT 2"
          onClick={() => handleFilter(2)}
          buttonNumber={2}
        />
        <FilterButton
          className={"mx-3 sm:mx-3 mt-3 mb-3"}
          isSelected={selectedLevel}
          label="JLPT 1"
          onClick={() => handleFilter(1)}
          buttonNumber={1}
        />
        <Input
          className={"mt-3 mb-3"}
          onChange={handleInputChange}
          placeholder="Search by kanji"
        />
      </div>

      <div className="container mx-auto mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 justify-items-center">
          {filteredData.slice(startIndex, endIndex).map(([kanji, details]) => (
            <KanjiCard
              key={kanji}
              kanji={kanji}
              details={details}
              handleSpeak={handleSpeak}
            />
          ))}
        </div>
      </div>
      {inputValue === "" && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className={
                  startIndex === 0
                    ? "pointer-events-none opacity-50"
                    : undefined
                }
                onClick={() => {
                  setStartIndex(startIndex - rowsPerPage);
                  setEndIndex(endIndex - rowsPerPage);
                }}
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                className={
                  endIndex >= filteredData.length
                    ? "pointer-events-none opacity-50"
                    : undefined
                }
                onClick={() => {
                  setStartIndex(startIndex + rowsPerPage);
                  setEndIndex(endIndex + rowsPerPage);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default Page;
