
import React, { Component } from 'react';
import axios from 'axios';
import InventoryCard from './components/InventoryCard';
import './InventoryList.scss';



export default class InventoryList extends Component {

  state = {
    inventory :[]
  }

  addInventory = e => {
    const formData = new formData(e.target);
    e.preventDefault()

    for (let [key, value] of formData.entries())

    axios.post("http://localhost:8080/inventory", {
      "id": formData.get("id"),
      "name": formData.get("name"),
      "description": formData.get("description"),
      "quantity": formData.get("quantity"),
      "lastOrdered": formData.get("lastOrdered"),
      "city": formData.get("city"),
      "country": formData.get("country"),
      "isInstock": formData.get("isInstock"),
      "categories": formData.get("categories"),
      "warehouseId": formData.get("warehousId"),
    })  
  }

  componentDidMount () {
   
  axios.get("http://localhost:8080/inventory" )

        .then(res => {
          this.setState({inventory: res.data} )
        })
        .catch(err => {  
          console.log(err.message);       
        })
}

render() {

  return (

    <div className="inventoryList">

      <section className="inventoryList__header"> 
        <h1>Inventory</h1>
        <input type="text" placeholder='Search' className='inventoryList__searchBar'/>
      </section>

        <section className="inventoryList__horizontal">

          <h5 className='inventoryCard__label-horizontal'>ITEM</h5>
          <h5 className='inventoryCard__label-horizontal'>LAST ORDERED</h5>
          <h5 className='inventoryCard__label-horizontal'>LOCATION</h5>
          <h5 className='inventoryCard__label-horizontal'>QUANTITY</h5>
          <h5 className='inventoryCard__label-horizontal'>STATUS</h5>

        </section>

        {this.state.inventory.map((item) => 

        <InventoryCard
          inventory = {this.state.inventory} key = {item.id} name={item.name} description={item.description} 
          quantity={item.quantity} lastOrdered={item.lastOrdered} city={item.city} isInstock={item.isInstock}
          category={item.category} warehouseId={item.warehouseId}/>
        )}    
    </div>
  );
}}