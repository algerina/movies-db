import { ChangeEvent, FormEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = (onSearch: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-screen max-w-3xl"
    >
      <input
        type="text"
        className="border border-gray-300 rounded-1 py-2 px-4 focus:outline-none focus:border-blue-500 "
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
