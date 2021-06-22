import React from "react";

const Child = ({ arr }) => {
  return (
    <div>
      {arr.map((el, idx) => {
        return el.data;
      })}
    </div>
  );
};

export default Child;
