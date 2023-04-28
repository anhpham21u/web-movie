import React from "react";
import OriginalItem from "./OriginalItem";

function OriginalList(props) {
  return (
    <div className="container py-50">
      <div className="flex flex--justify-between">
        {props.data.results.map((element, idx) => {
          if (idx < 10) {
            return <OriginalItem data={element} key={idx} />;
          }
        })}
      </div>
    </div>
  );
}

export default OriginalList;
