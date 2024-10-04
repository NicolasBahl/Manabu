"use client";

import { Button } from "@/components/ui/button";
import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  label: string;
  onClick: () => void;
  isClicked?: boolean;
  className?: string;
};

const getButtonColor = (buttonLabel: string) => {
  if (buttonLabel === "JLPT 1") return "bg-red-500";
  if (buttonLabel === "JLPT 2") return "bg-yellow-500";
  if (buttonLabel === "JLPT 3") return "bg-green-500";
  if (buttonLabel === "JLPT 4") return "bg-blue-500";
  if (buttonLabel === "JLPT 5") return "bg-purple-500";
};

const FilterButton = (props: ButtonProps) => {
  const { label, onClick, isClicked, className } = props;

  return (
    <Button
      variant={"filter"}
      onClick={onClick}
      className={cn(
        isClicked ? getButtonColor(label) : "bg-gray-800",
        className,
        "w-44",
      )}
    >
      {label}
    </Button>
  );
};

export default FilterButton;
