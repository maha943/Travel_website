import React from 'react';
import {BrowserRouter as Router , Route , Switch } from "react-router-dom"
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import Products from "./Components/Pages/Products";
import SignUp from "./Components/Pages/SignUp";

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route  path="/" exact component ={Home}/>
          <Route  path="/services" exact component ={Services}/>
          <Route  path="/Products" exact component ={Products}/>
          <Route  path="/SignUp" exact component ={SignUp}/>
        </Switch>
      </Router>
     
    </>
  );
}

export default App;
