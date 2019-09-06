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
import {Router, Route, BrowserRouter, Link, Redirect,Switch, HashRouter} from "react-router-dom";





function App() {

  return (
   
    <div className="App">
      
    {/*
    <Balance/>
    <Main/>
    <Account/>
    <Transactions/>
    <Freeze/>
    <Signout/>
    <Transfer/>
    <Login/>
  
    */}
  
  
  
<HashRouter>
     
{/* 
 <Route path = {"/login"} component = {Login}></Route>*/}
 <Switch>
 <Route exact from ={"/"} component = {Login}></Route>
 

      <Route path = {"/balance"} component = {Balance}></Route>
       <Route path = {"/transfer"} component = {Transfer}></Route>
          <Route path = {"/account"} component = {Account}></Route>
          <Route path = {"/freeze"} component = {Freeze}></Route>
          <Route path = {"/transactions"} component = {Transactions}></Route>
          
          </Switch>
 
    
      
     
  </HashRouter>
  




    </div>


   
  
  );
}



export default App;
