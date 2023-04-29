import React from "react";
import TypeItem from "./TypeItem";

function ListType({ data, id }) {
  console.log(id);
  console.log(data);

  return (
    <div className="container" style={{ color: "#fff" }}>
      <h3>{id}</h3>
      <div className="flex" style={{ overflowX: "scroll" }}>
        {data.results.map((ele, idx) => {
          if (idx < 10) {
            return <TypeItem data={ele} key={idx} />;
          }
        })}
      </div>
    </div>
  );
}

export default ListType;
