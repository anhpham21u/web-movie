import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import { MyContext } from "./Browse";

// modal
let modalRoot = document.getElementById("modal-root");

if (!modalRoot) {
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal-root";
  document.body.appendChild(modalDiv);
  modalRoot = modalDiv;
}

function Modal({ data }) {
  const headLink = "https://image.tmdb.org/t/p/original";

  const { showModal, setShowModal, dataModal, setDataModal } =
    React.useContext(MyContext);

  const handlerClick = () => {
    setShowModal(false);
  };

  return createPortal(
    <div
      className={styles.modal + ` fixed ${showModal === false ? "hidden" : ""}`}
    >
      <div className={styles.parentModal + " relative container"}>
        <div className={styles.mainModal + " absolute p-30"}>
          <h2 className="mb-30">{data.title}</h2>
          <hr className="mb-10" />
          <div className="flex flex--justify-between flex--align-center">
            <div style={{ width: "70%" }}>
              <p className="mb-5">Release Date: {data.release_date}</p>
              <p className="mb-10">Vote: {data.vote_average} / 10</p>
              <p>{data.overview}</p>
            </div>
            <img
              src={headLink + data.backdrop_path}
              width="175px"
              height="95px"
            />
          </div>
        </div>
      </div>
      <div
        className={styles.modalOpacity + " absolute"}
        onClick={handlerClick}
      ></div>
    </div>,
    modalRoot
  );
}

export default Modal;
