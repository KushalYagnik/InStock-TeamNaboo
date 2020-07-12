import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Inventory from './pages/Inventory.jsx'
import ProductSummary from './components/ProductSummary/ProductSummary.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={routeProps => <Home id={routeProps.match.params.id} />} />
        <Route exact path="/inventory"><Inventory /></Route>
        <Route path="/inventory/:inventoryid" render={props => <ProductSummary props={props}/>}/>
        <Route path="/warehouses/:warehouseid" render={routeProps => {
          return <Home id={routeProps.match.params.id} />
        }} />
        <Route exact path="/warehouses" render={routeProps => {
          return <Home id={routeProps.match.params.id} />
        }} />
      </Switch>
  </BrowserRouter>
  );
}
