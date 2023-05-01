import React, { useState, useRef } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SearchForm.module.scss";

library.add(fas);

function SearchForm({ data }) {
  const inputSearch = useRef(null);

  const handleClick = () => {
    data.setQuery(inputSearch.current.value);
  };

  return (
    <div className="container flex flex--justify-center pb-30">
      <div className={styles.searchForm}>
        <div className="flex flex--justify-between flex--align-center p-20">
          <input type="text" className={styles.inputText} ref={inputSearch} />
          <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass"
            style={{ color: "#cccccc" }}
            onClick={handleClick}
            className="cursor"
          />
        </div>

        <hr className={styles.hr} />
        <div className="flex flex--justify-end p-30">
          <input
            type="submit"
            value="RESET"
            className={styles.btnRe + " mx-10"}
          />
          <input
            type="submit"
            value="SEARCH"
            className={styles.btnSub}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
