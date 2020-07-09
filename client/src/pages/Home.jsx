import React from 'react';
import Header from '../components/Header/Header';
import LocationsSearch from '../components/LocationsSearch/LocationsSearch';
import '../App.scss';
import '../components/Header/Header.scss';
import WarehouseModal from '../components/WarehouseModal/WarehouseModal';

export default function Home() {
    return (
        <div className="home-container">
            <Header />
            <WarehouseModal />
            <LocationsSearch />
        </div>
    )
  }
