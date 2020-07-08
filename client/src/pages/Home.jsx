import React from 'react';
import Header from '../components/Header/Header';
import LocationsSearch from '../components/LocationsSearch/LocationsSearch';
import '../App.scss';
import '../components/Header/Header.scss';

export default function Home() {
    return (
        <div className="home-container">
            <Header />
            <LocationsSearch />
        </div>
    )
  }
