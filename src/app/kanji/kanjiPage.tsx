"use client";

import * as React from "react";
import DATA from "../../data/kanji.json";

import KanjiCard from "@/app/kanji/kanjiCard";

import KanjiPagination from "@/app/kanji/kanjiPagination";

import { handleSpeak } from "@/lib/utils";
import InputContainer from "@/app/kanji/inputContainer";

const KanjiPage = () => {
  const kanjiEntries = Object.entries(DATA).sort(
    ([, detailsA], [, detailsB]) => detailsB.jlpt_new - detailsA.jlpt_new,
  );

  const [filteredData, setFilteredData] = React.useState(kanjiEntries);

  const [startIndex, setStartIndex] = React.useState(0);

  const [selectedLevel, setSelectedLevel] = React.useState<number | null>(null);

  const [endIndex, setEndIndex] = React.useState(12);

  const rowsPerPage = 12;

  const [inputValue, setInputValue] = React.useState("");

  // const [debounceTimer, setDebounceTimer] =
  //   React.useState<NodeJS.Timeout | null>(null);

  const handleFilter = (level: number) => {
    if (level === selectedLevel) {
      // Reset filter when the same level is clicked
      setSelectedLevel(null);
      setFilteredData(kanjiEntries);
    } else {
      // Apply filter for the selected level
      const filtered = kanjiEntries.filter(
        ([, details]) => details.jlpt_new === level,
      );
      setSelectedLevel(level);
      setFilteredData(filtered);
    }
    setStartIndex(0);
    setEndIndex(rowsPerPage);
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (selectedLevel === null) {
      setInputValue(e.currentTarget.value);
      const filteredKanji = kanjiEntries.filter(([kanji]) => {
        return kanji.includes(e.currentTarget.value);
      });
      setFilteredData(filteredKanji);
    } else {
      setInputValue(e.currentTarget.value);
      const filteredKanji = kanjiEntries.filter(([kanji, details]) => {
        return (
          kanji.includes(e.currentTarget.value) &&
          details.jlpt_new === selectedLevel
        );
      });
      setFilteredData(filteredKanji);
    }
  };

  return (
    <>
      <InputContainer
        handleFilter={handleFilter}
        handleInputChange={handleInputChange}
        selectedLevel={selectedLevel}
      />
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
        <KanjiPagination
          startIndex={startIndex}
          endIndex={endIndex}
          filteredData={filteredData}
          rowsPerPage={rowsPerPage}
          setStartIndex={setStartIndex}
          setEndIndex={setEndIndex}
        />
      )}
    </>
  );
};

export default KanjiPage;
