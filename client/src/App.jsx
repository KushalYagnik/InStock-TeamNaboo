import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Inventory from './pages/Inventory.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/inventory"><Inventory /></Route>
        <Route path="/locations"><Home /></Route>
      </Switch>
  </BrowserRouter>
  );
}