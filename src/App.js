import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from "./VendingMachine";
import Bugles from "./Bugles"
import Fresca from './Fresca';
import Chili from './Chili';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Route exact path="/bugles">
          <Bugles />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/fresca">
          <Fresca />
        </Route>
        <Route exact path="/chili">
          <Chili />
        </Route>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
