import "./Filter.css";
import React, { useState } from "react";

const Filter = () => {
  const [search, setSearch] = useState();
  return (
    <div className="filter-main">
      <p className="filter-main__title">Filter by Title</p>
      <input
        type="text"
        value={search}
        className="filter-main__textbox"
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};

export default Filter;
