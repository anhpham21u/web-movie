import React from "react";
import ListType from "../browse/ListType";
import { MyContext } from "../../App";
import Modal from "./../browse/Modal.js";

function ResultList({ data }) {
  const { showModal, setShowModal, dataModal, setDataModal } =
    React.useContext(MyContext);

  return (
    <div className="container" style={{ color: "#fff" }}>
      <ListType data={data} id="Search Result" />
      <Modal data={dataModal} />
    </div>
  );
}

export default ResultList;
