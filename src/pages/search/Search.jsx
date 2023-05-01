import React, { useEffect, useState } from "react";
import Navbar from "./../browse/Navbar.js";
import SearchForm from "./SearchForm.js";
import ResultList from "./ResultList.js";

const Search = () => {
  const api_key = "8014da7ed20c5eeb085b2e91972368e3";
  const language = "en";

  const [data, setData] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&language=${language}`
    )
      .then((response) => response.json())
      .then((dataRes) => {
        setData(dataRes);
      })
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <div className="bg-dark">
      <Navbar />
      <div style={{ height: "100px" }}></div>
      <SearchForm data={{ query, setQuery }} />
      {query !== "" && <ResultList data={data} />}
    </div>
  );
};

export default Search;
