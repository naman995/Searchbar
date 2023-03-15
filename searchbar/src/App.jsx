import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import SearchResutsList from "./components/SearchResutsList";
function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-[#eee]">
      <Searchbar setResults={setResults} />
      <SearchResutsList results={results}/>
    </div>
  );
}

export default App;
