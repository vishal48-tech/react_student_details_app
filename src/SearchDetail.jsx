import React from "react";

const SearchDetail = ({ search, setSearch }) => {
  return (
    <div className="form-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          placeholder="Search Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="Searchbox"
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default SearchDetail;
