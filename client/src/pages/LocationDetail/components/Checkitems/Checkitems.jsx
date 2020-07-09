import React from 'react';
import LocationDetailCard from '../LocationDetailCard';
import '../LocationDetailCard/LocationDetailCard.scss';

export default function CHeckitems({warehouseItems}) {
    if (warehouseItems.length===0){
        return (
          <h1>This warehouse is empty</h1>
        )    
      }
      else {
      return warehouseItems.map( item =>  <LocationDetailCard key={item.id} inventory={item} /> )
      }
    }
