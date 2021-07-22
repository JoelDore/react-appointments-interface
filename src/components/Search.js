import React, { useState } from "react";
import { BiCaretDown, BiCaretUp, BiCheck, BiSearch } from "react-icons/bi";

const Dropdown = ({
  toggle,
  sortBy,
  onSortByChange,
  sortOrder,
  onSortOrderChange,
}) => {
  if (!toggle) return null;

  return (
    <div
      className="origin-top-right absolute right-0 mt-2 w-56
        rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
          onClick={() => onSortByChange("petName")}
        >
          Pet Name {sortBy === "petName" && <BiCheck />}
        </div>
        <div
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
          onClick={() => onSortByChange("ownerName")}
        >
          Owner Name {sortBy === "ownerName" && <BiCheck />}
        </div>
        <div
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
          onClick={() => onSortByChange("aptDate")}
        >
          Date {sortBy === "aptDate" && <BiCheck />}
        </div>
        <div
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
          role="menuitem"
          onClick={() => onSortOrderChange("asc")}
        >
          Asc {sortOrder === "asc" && <BiCheck />}
        </div>
        <div
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
          onClick={() => onSortOrderChange("desc")}
        >
          Desc {sortOrder === "desc" && <BiCheck />}
        </div>
      </div>
    </div>
  );
};

const Search = ({
  query,
  onQueryChange,
  sortBy,
  onSortByChange,
  sortOrder,
  onSortOrderChange,
}) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className="py-5">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input
          type="text"
          name="query"
          id="query"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <button
              onClick={() => setToggleDropdown(!toggleDropdown)}
              type="button"
              className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 rounded-r-md text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sort By{" "}
              {toggleDropdown ? (
                <BiCaretUp className="ml-2" />
              ) : (
                <BiCaretDown className="ml-2" />
              )}
            </button>
            <Dropdown
              toggle={toggleDropdown}
              sortBy={sortBy}
              onSortByChange={onSortByChange}
              sortOrder={sortOrder}
              onSortOrderChange={onSortOrderChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
