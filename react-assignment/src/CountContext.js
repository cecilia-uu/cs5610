import React, { createContext, useState } from 'react';

export const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [onCount, setOnCount] = useState(0);

  const handleToggle = (isTurningOn) => {
    setOnCount(onCount + (isTurningOn ? 1 : -1));
  };

  return (
    <CountContext.Provider value={{ onCount, handleToggle }}>
      {children}
    </CountContext.Provider>
  );
};
