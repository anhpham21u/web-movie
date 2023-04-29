import React from "react";
import TypeItem from "./TypeItem";
import styles from "./ListType.module.scss";

function ListType({ data, id }) {
  return (
    <div className="container pb-50" style={{ color: "#fff" }}>
      <h3 className="mb-10">{id}</h3>
      <div className={"flex " + styles.listType}>
        {data.results.map((ele, idx) => {
          return <TypeItem data={ele} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default ListType;
