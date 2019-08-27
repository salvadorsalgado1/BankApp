import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import JumboTron from './components/JumboTron';
import Keypad from './components/Keypad';
import Profile from './components/Profile';
import Header from './components/Header';
import NavbarPage from './components/NavbarPage';
import Login from './components/Login';
import Balance from './components/Balance';
import Transactions from './components/Transactions';
import Freeze from './components/Freeze';
import Signout from './components/Signout';
import Transfer from './components/Transfer';
import Account from './components/Account';
import {Router, Route, BrowserRouter, Link} from "react-router-dom";





function App() {

  return (
   
    <div className="App">
      
    {/*
    <Balance/>

    <Account/>
    <Transactions/>
    <Freeze/>
    <Signout/>
    <Transfer/>
    <Login/>
  
    */}
  
    <Main/>

    </div>


   
  
  );
}



export default App;
