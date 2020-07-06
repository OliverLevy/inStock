import React from 'react';
import InventoryList from './pages/InventoryList';
import InventoryDetail from './pages/InventoryDetail';
import LocationList from './pages/LocationList';
import LocationDetail from './pages/LocationDetail';
import './App.scss';

function App() {
  return (
    <div>
      <InventoryList />
      <InventoryDetail />
      <LocationList />
      <LocationDetail />
    </div>
  );
}

export default App;
