import React from "react";
import s from "./Gallery.css";
import img from "../../assets/images/car.svg";

const gallery = () => {
  return (
    <div className={s.gallery}>
      <div className={s.svgHolder}>
        <figure>
          <img src={img} />
        </figure>
      </div>
      <div className={s.ellipse}></div>
    </div>
  );
};

export default gallery;
