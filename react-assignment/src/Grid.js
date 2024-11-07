import React, { useContext } from 'react';
import { CountContext } from './CountContext';
import Cell from './Cell';

function Grid() {
    const { onCount } = useContext(CountContext);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>On Count: {onCount}</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px', 
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 100px)', gap: '5px' }}>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    </div>
  );
  
}

export default Grid;
