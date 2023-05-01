import React from "react";
import styles from "./OriginalItem.module.scss";
import { MyContext } from "./../../App.js";

function OriginalItem({ data }) {
  const headLink = "https://image.tmdb.org/t/p/original";

  const { showModal, setShowModal, dataModal, setDataModal } =
    React.useContext(MyContext);

  const handleClick = () => {
    setDataModal(data);
    setShowModal(true);
  };

  return (
    <div
      style={{ backgroundImage: `url(${headLink + data.poster_path})` }}
      className={styles.originalItem}
      onClick={handleClick}
    ></div>
  );
}

export default OriginalItem;
