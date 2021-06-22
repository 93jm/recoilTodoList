import React from "react";
import Apple from "./Apple";
import Banana from "./Banana";
import Orange from "./Orange";
import Child from "./Child";

const arr = [
  {
    id: 1,
    data: [<Apple />, <Banana />, <Orange />],
  },
  {
    id: 2,
    data: <Banana />,
  },
  {
    id: 3,
    data: <Orange />,
  },
];

const Parent = () => {
  return (
    <div>
      <Child arr={arr} />
    </div>
  );
};

export default Parent;
