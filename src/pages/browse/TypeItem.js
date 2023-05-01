import React, { useState } from "react";
import styles from "./TypeItem.module.scss";
import { MyContext } from "./Browse";

function TypeItem({ data }) {
  const headLink = "https://image.tmdb.org/t/p/original";

  const { showModal, setShowModal, dataModal, setDataModal } =
    React.useContext(MyContext);

  const handleClick = () => {
    setDataModal(data);
    setShowModal(true);
  };

  return (
    <div
      className={styles.typeItem}
      style={{ backgroundImage: `url(${headLink + data.backdrop_path})` }}
      onClick={handleClick}
    ></div>
  );
}

export default TypeItem;
