import React, { Component } from "react";
import "./LocationList.scss";
import LocationCard from "../../components/LocationCard/LocationCard";
import axios from "axios";

export default class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warehouse: [],
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

  render() {
    return (
      <div className="locationList">
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
          <LocationCard
            key={item.id}
            warehouseName={item.name}
            street={item.address.street}
            location={item.address.location}
            contactName={item.contact.name}
            contactPosition={item.contact.position}
            contactEmail={item.contact.email}
            contactPhone={item.contact.phone}
            category={item.inventoryCategories}
          />
        ))}
      </div>
    );
  }
}
