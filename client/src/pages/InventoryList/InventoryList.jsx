
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import InventoryCard from './components/InventoryCard';
import './InventoryList.scss';
import '../../components/Dropdown/Dropdown';
import Dropdown from '../../components/Dropdown/Dropdown';



export default class InventoryList extends Component {

  state = {
    inventory :[]
  }

  componentDidMount () {
   this.getInventory()
}

// handleRemove=(id)=>{
// axios.delete(`http://localhost:8080/inventory/${id}`)
// .then(res=>console.log(res.data))
// .then(this.getInventory())
// .catch(err=>(console.log("handle remove error")))

// }

getInventory=()=>{
  
  axios.get("http://localhost:8080/inventory")

        .then(res => {
          this.setState({inventory: res.data} )
        })
        .catch(err => {console.log("get inventory axios error")        
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
        <div className="inventoryCard__contain" key={item.id}>
        <Dropdown handleRemove={this.handleRemove(item.id)}/>

        <Link to={`/inventory/${item.id}`}>
        <InventoryCard
          inventory = {this.state.inventory} key = {item.id} name={item.name} description={item.description} 
          quantity={item.quantity} lastOrdered={item.lastOrdered} city={item.city} isInstock={item.isInstock}
          category={item.category} warehouseId={item.warehouseId}/>
        </Link>
        </div>
        )}
          
    </div>
  );
}}