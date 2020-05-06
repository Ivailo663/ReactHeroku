import React from "react";

const car = (props) => {
  return (
    <div>
      <ul>{props.children}</ul>
    </div>
  );
};

export default car;
