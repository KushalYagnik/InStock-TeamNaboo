import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Inventory from './pages/Inventory.jsx'
import ProductSummary from './components/ProductSummary/ProductSummary'


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route path="/" exact render={routeProps => <Home id={routeProps.match.params.id} />} />
        <Route exact path="/inventory"><Inventory /></Route>
        <Route path="/inventory/:inventoryid" render={props => <ProductSummary props={props}/>}/>
        <Route path="/warehouses/:warehouseid" render={routeProps => {
          return <Home id={routeProps.match.params.id} />
        }} />
        <Route exact path="/warehouses" render={routeProps => {
          return <Home id={routeProps.match.params.id} />
        }} />
=======
        <Route path="/" exact render={props => {return <Home props={props}/>}}/>
        <Route path="/locations" render={props => {return <Home props={props}/>}}/>
        <Route path="/locations/:id" render={props => {return <Home props={props}/>}}/>
        <Route path="/inventory" render={props => {return <Inventory props={props}/>}}/>
        <Route path="/inventory/:id" render={props => {return <Inventory props={props}/>}}/>
>>>>>>> d6c04aa58b3cfae5b42f43249effea65792437e5
      </Switch>
  </BrowserRouter>
  );
}