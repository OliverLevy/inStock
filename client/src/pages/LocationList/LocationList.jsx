import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LocationList.scss";
import LocationCard from "../../components/LocationCard/LocationCard";
import axios from "axios";
import LocationModal from "../../components/LocationModal/LocationModal";

export default class LocationList extends Component {
  state = {
    warehouse: [],
    modelIsOpen: false,
  };

  toggleModal = (e) => {
    if (this.state.modelIsOpen === false) {
      this.setState({
        modelIsOpen: true,
      });
    } else {
      this.setState({
        modelIsOpen: false,
      });
    }
  };

  addWarehouse = (e) => {
    e.preventDefault();
    // form validation
    if(e.target.locationName.value===''){
      return console.error('Please fill out name form fields')
    }
    if(e.target.locationAddress.value===''){
      return console.error('Please fill out address form fields')
    }
    if(e.target.locationCountry.value===''){
      return console.error('Please fill out country form fields')
    }
    if(e.target.locationContactName.value===''){
      return console.error('Please fill out contact name form fields')
    }
    if(e.target.locationContactPosition.value===''){
      return console.error('Please fill out position form fields')
    }
    if(e.target.locationContactPhone.value===''){
      return console.error('Please fill out phone form fields')
    }
    if(e.target.locationContactEmail.value===''){
      return console.error('Please fill out email form fields')
    }
    if(e.target.locationCategories.value===''){
      return console.error('Please fill out category form fields')
    }

    axios
      .post("http://localhost:8080/warehouses", {
        newWarehouse: {
          locationName: e.target.locationName.value,
          locationAddress: e.target.locationAddress.value,
          locationCountry: e.target.locationCountry.value,
          contact: {
            locationContactName: e.target.locationContactName.value,
            locationContactPosition: e.target.locationContactPosition.value,
            locationContactPhone: e.target.locationContactPhone.value,
            locationContactEmail: e.target.locationContactEmail.value,
          },
          locationCategories: e.target.locationCategories.value,
        },
      })
      .then(suc => {
        this.setState({
          warehouse: suc.data,
          modelIsOpen: false
        })
      })
      .catch(console.log);
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/warehouses`)
      .then((res) => {
        this.setState({ warehouse: res.data });
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
          <Link to={`warehouses/${item.id}`} key={item.id}>
            <LocationCard
              warehouseName={item.name}
              street={item.address.street}
              location={item.address.location}
              contactName={item.contact.name}
              contactPosition={item.contact.position}
              contactEmail={item.contact.email}
              contactPhone={item.contact.phone}
              category={item.inventoryCategories}
            />
          </Link>
        ))}

        <LocationModal
          addWarehouse={this.addWarehouse}
          toggleModal={this.toggleModal}
          modelIsOpen={this.state.modelIsOpen}
          test={this.test}
        />
      </div>
    );
  }
}
