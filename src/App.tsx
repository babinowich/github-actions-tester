import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


export interface AppProps {
  name?: string
}

export const App = (props: AppProps): JSX.Element => {
  const { name } = props 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Github actions tester
      </header>
    </div>
  );
}

export default App;
