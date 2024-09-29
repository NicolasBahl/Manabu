"use client";

import FilterButton from "@/app/kanji/filterButton";
import { Input } from "@/components/ui/input";
import * as React from "react";

type InputContainerProps = {
  handleFilter: (level: number) => void;
  handleInputChange: (value: React.FormEvent<HTMLInputElement>) => void;
  selectedLevel: number | null;
};

const InputContainer = (props: InputContainerProps) => {
  const { handleFilter, handleInputChange, selectedLevel } = props;

  const buttons = [
    { label: "JLPT 5", level: 5 },
    { label: "JLPT 4", level: 4 },
    { label: "JLPT 3", level: 3 },
    { label: "JLPT 2", level: 2 },
    { label: "JLPT 1", level: 1 },
  ];

  return (
    <div className="mr-2.5 ml-2.5 flex flex-col md:flex md:flex-row">
      {buttons.map((button) => (
        <FilterButton
          className={"sm: mt-2 sm: mb-2 "}
          key={button.label}
          label={button.label}
          isClicked={selectedLevel === button.level}
          onClick={() => handleFilter(button.level)}
        />
      ))}
      <Input className={"mt-2"} onChange={handleInputChange} placeholder="Search by kanji" />
    </div>
  );
};

export default InputContainer;
