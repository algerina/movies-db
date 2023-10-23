import { ChangeEvent, FormEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = () => {
  return (
    <form className="flex items-center w-screen max-w-3xl">
      <input
        type="text"
        className="border border-gray-300 rounded-1 py-2 px-4 focus:outline-none focus:border-500-blue "
      />
    </form>
  );
};

export default SearchBar;
