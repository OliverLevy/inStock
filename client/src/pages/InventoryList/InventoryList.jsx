
import React, { Component } from 'react';
import axios from 'axios';
import InventoryCard from './components/InventoryCard';
import './InventoryList.scss';



export default class InventoryList extends Component {

  state = {
    inventory :[]
  }

// abortController = new AbortController()

  componentDidMount () {

// const inventoryUrl = "http://localhost:8080/inventory";
     
    axios.get("http://localhost:8080/inventory" )

          .then(res => {
            this.setState({inventory: res.data} )
            console.log(this.state.inventory)
          })
          .catch(err => {         
          })
  }
  render() {
    return (

      <div>
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
        <InventoryCard/>
      </div>
    );
  }}