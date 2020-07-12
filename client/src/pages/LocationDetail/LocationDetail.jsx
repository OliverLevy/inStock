import React, { Component } from "react";
import axios from "axios";
import "./LocationDetail.scss";
import Checkitems from "./components/Checkitems";
import { Link } from "react-router-dom";
import BackIcon from "../../assets/icons/Icon-back-arrow.svg";


export default class LocationDetail extends Component {
  state = {
    currentWarehouseInventory: [],
    currentWarehouse: [],
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    axios
      .get(`http://localhost:8080/warehouses/${params.id}`)
      .then((res) => {
        this.setState({
          currentWarehouse: res.data.currentWarehouse[0],
          currentWarehouseInventory: res.data.currentWarehouseInventory,
        });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.currentWarehouse.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="locationDetail">
         
          <section className="locationDetail__header">
            <Link to="/warehouses" className="locationDetail__link">
              <img
                  className="locationDetail__linkIcon"
                  src={BackIcon}
                  alt="go back icon"
                />
            </Link>
            <h1>{this.state.currentWarehouse.name}</h1>
          </section>
          <section className="locationDetail__header locationDetail__subHeader">
            <div className="locationDetail__header locationDetail__address">
              <h5>ADRESS</h5>
              <p>{this.state.currentWarehouse.address.street}</p>
              <p>{this.state.currentWarehouse.address.location}</p>
            </div>
            <div className="locationDetail__header locationDetail__address">
              <h5>CONTACT</h5>
              <p>{this.state.currentWarehouse.contact.name}</p>
              <p>{this.state.currentWarehouse.contact.position}</p>
              <p>{this.state.currentWarehouse.contact.phone}</p>
              <p>{this.state.currentWarehouse.contact.email}</p>
            </div>
          </section>

          <section className="locationDetail__horizontal">
            <h5 className="locationCard__label-horizontal locationCard__lastOrder">
              ITEM
            </h5>
            <h5 className="locationCard__label-horizontal locationCard__lastOrder">
              LAST ORDERED
            </h5>
            <h5 className="locationCard__label-horizontal locationCard__lastOrder">
              LOCATION
            </h5>
            <h5 className="locationCard__label-horizontal locationCard__lastOrder">
              QUANTITY
            </h5>
            <h5 className="locationCard__label-horizontal locationCard__lastOrder">
              STATUS
            </h5>
          </section>
          <Checkitems warehouseItems={this.state.currentWarehouseInventory} />
        </div>
      );
    }
  }
}