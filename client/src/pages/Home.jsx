import React from 'react';
// import axios from 'axios';
import Header from '../components/Header/Header';
import WarehousesSearch from '../components/WarehousesSearch/WarehousesSearch';
import WarehousesDetails from '../components/WarehousesDetails/WarehousesDetails';
import '../App.scss';
import '../components/Header/Header.scss';
import WarehouseModal from '../components/WarehouseModal/WarehouseModal';

// let pulledWarehouse, pulledWidget = {};

export default function Home(routeProps) {

  return (
    <div className="home-container">
      <Header />
      <WarehouseModal />
      {routeProps.id !== undefined ? <WarehousesDetails id={routeProps.id} /> : <WarehousesSearch />}
    </div>
  )
}