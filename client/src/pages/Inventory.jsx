import React from 'react';
import Header from '../components/Header/Header';
import '../App.scss';
import '../components/Header/Header.scss';
import InventorySearch from '../components/InventorySearch/InventorySearch';

export default function Inventory() {
  return (
    <div>
      <Header />
      <InventorySearch />
    </div>
  );
}
