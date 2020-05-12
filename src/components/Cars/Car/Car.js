import React, { useContext } from "react";
import styleContext from "../../../context/context";

const car = (props) => {
  const colorContext = useContext(styleContext);
  return (
    <div>
      <ul>{props.children}</ul>
      <h1 style={{ color: colorContext }}>Testing the color</h1>
    </div>
  );
};

export default car;
