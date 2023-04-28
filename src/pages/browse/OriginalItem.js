import React from "react";
import styles from "./OriginalItem.module.scss";

function OriginalItem({ data }) {
  const headLink = "https://image.tmdb.org/t/p/original";

  return (
    <div
      style={{ backgroundImage: `url(${headLink + data.poster_path})` }}
      className={styles.originalItem}
    ></div>
  );
}

export default OriginalItem;
