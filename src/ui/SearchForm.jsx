import { useState } from "react";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mx-auto w-full max-w-[325px]"
    >
      <label htmlFor="search-input" className="sr-only">
        Search by team or competition
      </label>
      <input
        type="text"
        id="search-input"
        className="w-full rounded-[29px] border border-[hsla(0,0%,94%,1)] bg-[hsla(0,0%,98%,1)] py-[6px] pl-12 pr-4 text-sm text-[hsla(187,6%,64%,1)] ring-0 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-[hsla(273,70%,36%,1)]"
        placeholder="Search by team or competition"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search by team or competition"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-4">
        <img src="/icons/magnify.svg" className="h-6 w-6" aria-hidden="true" />
      </div>
      <button type="submit" className="sr-only" aria-label="Submit search">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
