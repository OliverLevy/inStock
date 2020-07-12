import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LocationList.scss";
import LocationCard from "../../components/LocationCard/LocationCard";
import axios from "axios";
import LocationModal from '../../components/LocationModal/LocationModal';

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

  // submit form
  handleSubmit=(event)=>{
    event.preventDefault()
    console.log(event.target.locationName.value)
    const formData = new FormData(event.target);
    console.log(formData.get('locationName'), 'is location name')
    console.log(formData.get('locationAddress'), 'is location address')
    axios.post("http://localhost:8080/warehouses", {
      name: formData.get("locationName"),
      
      address:{
          street: formData.get("locationAddress"),
          location: formData.get("locationCountry")
      },
      contact:{
          name: formData.get("locationContactName"),
          position: formData.get("locationContactPosition"),
          phone: formData.get("locationContactPhone"),
          email: formData.get("locationContactEmail"),
      },
      inventoryCategories: formData.get("locationCategories")

    })
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })  }


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

        <LocationModal handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
