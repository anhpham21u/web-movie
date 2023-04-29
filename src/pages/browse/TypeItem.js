import React from "react";
import styles from "./TypeItem.module.scss";

function TypeItem({ data }) {
  const headLink = "https://image.tmdb.org/t/p/original";

  return (
    <div
      className={styles.typeItem}
      style={{ backgroundImage: `url(${headLink + data.backdrop_path})` }}
    ></div>
  );
}

export default TypeItem;
