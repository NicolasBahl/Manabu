"use client";

import { Button } from "@/components/ui/button";
import * as React from "react";

type Button = {
  label: string;
  onClick: () => void;
  isSelected: boolean;
  buttonNumber: number;
  className?: string;
};

const getButtonColor = (buttonNumber: number) => {
  if (buttonNumber === 1) return "rgb(239 68 68)";
  if (buttonNumber === 2) return "rgb(234 179 8)";
  if (buttonNumber === 3) return "rgb(34 197 94)";
  if (buttonNumber === 4) return "rgb(59 130 246)";
  if (buttonNumber === 5) return "rgb(168 85 247)";
};

const FilterButton = (props: Button) => {
  const { label, onClick, isSelected, buttonNumber, className } = props;
  return (
    <Button
      onClick={onClick}
      style={{
        backgroundColor:
          isSelected === buttonNumber
            ? getButtonColor(buttonNumber)
            : "#171717",
      }}
      className={className}
    >
      {label}
    </Button>
  );
};

export default FilterButton;
