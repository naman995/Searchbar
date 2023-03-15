import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        // console.log(value);
        const result = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(result);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper flex items-center bg-white  rounded-xl">
      <FaSearch id="search-icons" className="text-blue-500 ml-2" />
      <input
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        className=" mr-5 py-4 inline-block w-72 focus:outline-none placeholder:pl-3"
        type="text"
        placeholder="Type To Search"
      />
      {/* {input} */}
    </div>
  );
};

export default Searchbar;
