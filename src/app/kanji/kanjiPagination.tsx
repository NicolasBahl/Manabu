import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const KanjiPagination = ({
  startIndex,
  endIndex,
  filteredData,
  rowsPerPage,
  setStartIndex,
  setEndIndex,
}: {
  startIndex: number;
  endIndex: number;
  filteredData: any[];
  rowsPerPage: number;
  setStartIndex: (startIndex: number) => void;
  setEndIndex: (endIndex: number) => void;
}) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={
              startIndex === 0
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
            onClick={() => {
              if (startIndex > 0) {
                setStartIndex(startIndex - rowsPerPage);
                setEndIndex(endIndex - rowsPerPage);
              }
            }}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            className={
              endIndex >= filteredData.length
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
            onClick={() => {
              if (endIndex < filteredData.length) {
                setStartIndex(startIndex + rowsPerPage);
                setEndIndex(endIndex + rowsPerPage);
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default KanjiPagination;
