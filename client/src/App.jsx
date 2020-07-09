import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Inventory from './pages/Inventory.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => {return <Home props={props}/>}}/>
        <Route path="/locations" render={props => {return <Home props={props}/>}}/>
        <Route path="/locations/:id" render={props => {return <Home props={props}/>}}/>
        <Route path="/inventory" render={props => {return <Inventory props={props}/>}}/>
        <Route path="/inventory/:id" render={props => {return <Inventory props={props}/>}}/>
      </Switch>
  </BrowserRouter>
  );
}