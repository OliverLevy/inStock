import React, { Component } from 'react';
import axios from 'axios';
import LocationDetailCard from "./components/LocationDetailCard/LocationDetailCard";
import "./LocationDetail.scss";

export default class LocationDetail extends Component {

  state = {
    locationInventory :[],
    location : []
  }

  
    componentDidMount () {
     
      axios.get("http://localhost:8080/inventory" )
    
            .then(res => {
              this.setState({locationInventory: res.data} )
              console.log(this.state.locationInventory)
              
            })
            .catch(err => {         
            })

            axios.get("http://localhost:8080/warehouses" )
    
            .then(res => {
              this.setState({location: res.data} )
              console.log(this.state.location)
            })
            .catch(err => {         
            })     
    }
    

  render() {
    

    return (


  
      <div className="locationDetail">
  
        <section className="locationDetail__header"> 
          <h1>Name of Warehouse</h1>
        </section>
        <section className="locationDetail__header locationDetail__subHeader">         
            <div className="locationDetail__header locationDetail__address" >
              <h5>ADRESS</h5>
              <p>123 Fake Street W</p>
              <p>Toronto, CAN</p>
              <p>M65GB7 CA</p>
            </div>
            <div className="locationDetail__header locationDetail__address" >
              <h5>CONTACT</h5>
              <p>Mara Weinberg</p>
              <p>Warehouse Manager</p>
              <p>+1 416 678 2345</p>
              <p>weinberg@instock.com</p>
            </div>
            

        </section>
  
          <section className="locationDetail__horizontal">
  
            <h5 className='locationCard__label-horizontal locationCard__lastOrder'>ITEM</h5>
            <h5 className='locationCard__label-horizontal locationCard__lastOrder'>LAST ORDERED</h5>
            <h5 className='locationCard__label-horizontal locationCard__lastOrder'>LOCATION</h5>
            <h5 className='locationCard__label-horizontal locationCard__lastOrder'>QUANTITY</h5>
            <h5 className='locationCard__label-horizontal locationCard__lastOrder'>STATUS</h5>
  
          </section>
      
          {this.state.locationInventory.map((item) => 
          <LocationDetailCard
            locationInventory = {this.state.locationInventory} key = {item.id} name={item.name} description={item.description} 
            quantity={item.quantity} lastOrdered={item.lastOrdered} city={item.city} isInstock={item.isInstock}
            category={item.category} warehouseId={item.warehouseId}/>
          )}    
      </div>
    );
  }
  }
