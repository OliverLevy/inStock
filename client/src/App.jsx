import React from 'react';
import InventoryList from './pages/InventoryList';
import './App.scss';

function App() {
  return (
    <div>
      <InventoryList />
      <InventoryItem />
      <LocationList />
      <LocationItem />
    </div>
  );
}

export default App;
