import React from "react";
import PropTypes from "prop-types";
import Car from "./Car/Car";
import s from "./Cars.css";

const cars = (props) => {
  const cars = props.cars.map((el) => {
    return (
      <Car key={el._id}>
        <li className={s.item}>{el.brand}</li>
        <li>{el.model}</li>
        <li>{el.price}</li>
        <li>{el.km}</li>
      </Car>
    );
  });
  return <div className={s.cars}>{cars}</div>;
};

cars.propTypes = {
  cars: PropTypes.array,
};

export default cars;
