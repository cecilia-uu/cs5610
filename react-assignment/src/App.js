import './App.css';
import React from 'react';
import Grid from './Grid';
import { CountContext, CountProvider } from './CountContext';

function App() {
  return (
    <div className="App">
    <CountProvider>
      <Grid />
    </CountProvider>
      
    </div>
  );
}

export default App;
