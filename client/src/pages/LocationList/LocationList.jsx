import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LocationList.scss";
import LocationCard from "../../components/LocationCard/LocationCard";
import axios from "axios";
import Modal from 'react-modal'
import OliModal from '../../components/OliModal/OliModal'

export default class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warehouse: [],
      modelIsOpen: false
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8080/warehouses`)
      .then((res) => {
        this.setState({ warehouse: res.data });
      console.log(this.state.warehouse[0].address.street)

      })
      .catch((error) => {
        console.log("Warehouses Axios error");
      });
  }

  toggleModal = () => {
    if (this.state.modelIsOpen === false){
      return (
        this.setState({
          modelIsOpen: true
        })
      )
    }
  }



  render() {
    return (
      <div className="locationList">
        <OliModal></OliModal>
        <button onClick={this.toggleModal}>open modal</button>
        <Modal isOpen={this.state.modelIsOpen}>
          <h2>this is a modal</h2>
          <p>wow i made a modal</p>
        </Modal>
        <section className="locationList__header">
          <h1>Locations</h1>
          <input
            type="text"
            placeholder="Search"
            className="locationList__searchBar"
          />
        </section>

        <section className="locationList__labels">
          <h5 className="locationCard__labels-horizontal">WAREHOUSE</h5>
          <h5 className="locationCard__labels-horizontal">CONTACT</h5>
          <h5 className="locationCard__labels-horizontal">
            CONTACT INFORMATION
          </h5>
          <h5 className="locationCard__labels-horizontal">CATEGORIES</h5>
        </section>
        {this.state.warehouse.map((item) => (
         <Link  to={`warehouses/${item.id}`} key={item.id}><LocationCard
            warehouseName={item.name}
            street={item.address.street}
            location={item.address.location}
            contactName={item.contact.name}
            contactPosition={item.contact.position}
            contactEmail={item.contact.email}
            contactPhone={item.contact.phone}
            category={item.inventoryCategories}
          /></Link> 
        ))}
      </div>
    );
  }
}
