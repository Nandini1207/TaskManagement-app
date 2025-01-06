import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Pass the search query to the parent component
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control mt-4"
        placeholder="Search tasks..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
