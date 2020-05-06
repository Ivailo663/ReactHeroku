import React from "react";
import Car from "./Car/Car";
import s from './Cars.css'

const cars = (props) => {
  const cars = props.cars.map((el) => {
    return (
      <Car key={el._id}>
        <li>{el.brand}</li>
        <li>{el.model}</li>
        <li>{el.price}</li>
        <li>{el.km}</li>
      </Car>
    );
  });
  return <div>{cars}</div>;
};

export default cars;
