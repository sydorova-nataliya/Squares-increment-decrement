import React from "react";
import './styles.scss';

const SquareComponent = ({value,onIncrement, onDecrement }) => (
  <div className="square">
    <button onClick={onDecrement}>-</button>
    <h1 className="value">{value}</h1>
    <button onClick={onIncrement}>+</button>
  </div>
)

export default SquareComponent;
