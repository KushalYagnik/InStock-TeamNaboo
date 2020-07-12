import React from 'react';
import Header from '../components/Header/Header';
import LocationsSearch from '../components/LocationsSearch/LocationsSearch';
import LocationsDetails from '../components/LocationsDetails/LocationsDetails';
import '../App.scss';
import '../components/Header/Header.scss';
import WarehouseModal from '../components/WarehouseModal/WarehouseModal';

export default function Home(routeProps) {
  console.log('pr', routeProps.id)

  return (
    <div className="home-container">
      <Header />
      <WarehouseModal />
      {routeProps.id !== undefined ? <LocationsDetails id={routeProps.id} /> : <LocationsSearch />}
    </div>
  )
}
