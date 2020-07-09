import React, { Component } from 'react';
import axios from 'axios';
import LocationDetailCard from "./components/LocationDetailCard/LocationDetailCard";
import "./LocationDetail.scss";




export default class LocationDetail extends Component {
  
  state = {
    currentWarehouseInventory :[],
    currentWarehouse : []
  }
  
  
  componentDidMount () {
    
    const { match: { params } } = this.props;
    
     
            axios.get(`http://localhost:8080/warehouses/${params.id}`)
                .then((res) => {
                  
                 
                    this.setState({ currentWarehouse: res.data.currentWarehouse[0],
                                    currentWarehouseInventory: res.data.currentWarehouseInventory[0] });
                           
                  })
                  
                  .catch((error) => {
                    console.log(error)
                  });} 
                    
                  

  render() {
    

 
    return (


      <div className="locationDetail">
  
        <section className="locationDetail__header"> 
          <h1>{this.state.currentWarehouse.name}</h1>
        </section>
        <section className="locationDetail__header locationDetail__subHeader">         
            <div className="locationDetail__header locationDetail__address" >
              <h5>ADRESS</h5>
              <p>street</p>
              <p>location</p>
            </div>
            <div className="locationDetail__header locationDetail__address" >
              <h5>CONTACT</h5>
              <p></p>
              <p>name</p>
              <p>phone</p>
              <p>email</p>
            </div>
            

        </section>
  
          <section className="locationDetail__horizontal">
  
            <h5 className='locationCard__label-horizontal locationCard__lastOrder'>ITEM</h5>
            <h5 className='locationCard__label-horizontal locationCard__lastOrder'>LAST ORDERED</h5>
            <h5 className='locationCard__label-horizontal locationCard__lastOrder'>LOCATION</h5>
            <h5 className='locationCard__label-horizontal locationCard__lastOrder'>QUANTITY</h5>
            <h5 className='locationCard__label-horizontal locationCard__lastOrder'>STATUS</h5>
  
          </section>
      
           
          <LocationDetailCard inventory={this.state.currentWarehouseInventory} />
            
      </div>
    );
  }
  }

