import React, { useState } from "react";

function FilterList({ list }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("ASC");
  let filteredList = list;

  if (query !== "") {
    filteredList = list.filter((list) => {
      return list.type.toLowerCase().includes(query.toLowerCase());
    });
  } else if (query === "" || sort === "") {
    filteredList = list;
  }

  filteredList = filteredList.sort((a, b) => {
    const isReversed = sort === "ASC" ? 1 : -1;
    return isReversed * a.name.localeCompare(b.name);
  });

  const changeHandler = (event) => {
    setQuery(event.target.value);
  };
  const sortHandler = (event) => {
    setSort(event.target.value);
  };
  return (
    <div>
      {/* <input
        onChange={changeHandler}
        type="text"
        placeholder="Type a query..."
      /> */}

      <select value={query} onChange={changeHandler}>
        <option value=""></option>
        <option value="Fruit">Fruit</option>
        <option value="Car">Car</option>
      </select>
      <select value={sort} onChange={sortHandler}>
        <option value="ASC">Ascending</option>
        <option value="DEC">Descending</option>
      </select>
      {filteredList.map((list) => (
        <div key={list.id}>{list.name}</div>
      ))}
      <div>{filteredList.length === 0 && query !== "" && "No matches..."}</div>
    </div>
  );
}

export default FilterList;
