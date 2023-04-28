import React, { useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Navbar.module.scss";

library.add(fas);

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="flex flex--justify-between flex--align-center mb-50">
      <h2
        className={styles.homeBtn + " cursor"}
        onClick={() => {
          window.location.replace("");
        }}
      >
        Movie App
      </h2>
      <FontAwesomeIcon
        icon="fa-solid fa-magnifying-glass"
        style={{ color: "#cccccc" }}
        onClick={() => {
          window.location.replace("./search");
        }}
        className="cursor"
      />
    </div>
  );
}

export default Navbar;
