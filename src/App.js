import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import JumboTron from './components/JumboTron';
import Keypad from './components/Keypad';


function App() {
  return (
    <div className="App">
      <JumboTron/>
      <Main/>
      
    </div>
  );
}

export default App;
