import React, { useState }  from 'react';

import SquareComponent from './component';

import './styles.scss';

const Square =()=>{
  const [value , setValue] = useState(0);

  const handleIncrement=()=>{
    setValue(value+1);
  } 

  const handleDecrement=()=>{
    setValue(value-1);
  } 

  return (
    <SquareComponent
      value={value}
      onIncrement = {handleIncrement}
      onDecrement = {handleDecrement}
    />
  )
}

export default Square;
