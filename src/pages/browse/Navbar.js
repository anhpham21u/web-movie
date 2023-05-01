import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Navbar.module.scss";

library.add(fas);

function Navbar() {
  const [background, setBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackground("#111");
      } else {
        setBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.navBar} style={{ backgroundColor: background }}>
      <div className="container flex flex--justify-between flex--align-center">
        <h2
          className={styles.homeBtn + " cursor"}
          onClick={() => {
            window.location.replace("./");
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
    </div>
  );
}

export default Navbar;
