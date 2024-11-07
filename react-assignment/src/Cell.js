import React, { useState, useContext } from 'react';
import { CountContext } from './CountContext';

function Cell({ onToggle }) {
  const [isOn, setIsOn] = useState(false);
  const { handleToggle } = useContext(CountContext); 

  // handle each click
  const handleClick = () => {
    setIsOn(!isOn);
    handleToggle(!isOn); // to the parent
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: '100px',
        height: '100px',
        border: '1px solid grey',
        backgroundColor: isOn ? 'black' : 'white',
        display: 'inline-block',
      }}
    />
  );
}

export default Cell;
