import React from "react";
import Searchresult from "./Searchresult";

const SearchResutsList = ({ results }) => {
  return (
    <div className="flex flex-col items-left  w-[325px] max-h-64  scroll-y overflow-auto mt-4">
      {results.map((result, id) => (
        <Searchresult result={result} key={id} />
      ))}
    </div>
  );
};

export default SearchResutsList;
