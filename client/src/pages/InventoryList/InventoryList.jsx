import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InventoryCard from "./components/InventoryCard";
import AddInventory from "./components/Modal";
import "./InventoryList.scss";
import "../../components/Dropdown/Dropdown";
import Dropdown from "../../components/Dropdown/Dropdown";

export default class InventoryList extends Component {
  state = {
    inventory: [],
    modelIsOpen: false,
    switchValue: false,
  };

  submitNewItem = (e) => {
    e.preventDefault();
    if (
      !e.target.name.value ||
      !e.target.city.value ||
      !e.target.country.value ||
      !e.target.quantity.value ||
      !e.target.lastOrdered.value
    ) {
      return console.error("Please fill out all form fields");
    } else {
      axios
        .post("http://localhost:8080/inventory", {
          name: e.target.name.value,
          description: e.target.description.value,
          quantity: e.target.quantity.value,
          lastOrdered: e.target.lastOrdered.value,
          city: e.target.city.value,
          country: e.target.country.value,
          isInstock: this.state.switchValue,
        })
        .then((suc) => {
          this.setState({
            inventory: suc.data,
            modelIsOpen: false
          });
        });
    }
  };

  toggleModal = () => {
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

  handleSwitch = () => {
    if (this.state.switchValue === false) {
      this.setState({
        switchValue: true,
      });
    } else {
      this.setState({
        switchValue: false,
      });
    }
  };

  componentDidMount() {
    this.getInventory();
  }

  handleRemove = (id) => {
    axios
      .delete(`http://localhost:8080/inventory/${id}`)
      .then((res) => this.setState({ inventory: res.data }))
      .catch((err) => console.log("handle remove error"));
  };

  getInventory = () => {
    axios
      .get("http://localhost:8080/inventory")
      .then((res) => {
        this.setState({ inventory: res.data });
      })
      .catch((err) => {
        console.log("get inventory axios error");
      });
  };

  render() {
    return (
      <>
        <AddInventory
          submitNewItem={this.submitNewItem}
          toggleModal={this.toggleModal}
          handleSwitch={this.handleSwitch}
          modelIsOpen={this.state.modelIsOpen}
          switchValue={this.state.switchValue}
        />
        <div className="inventoryList">
          <section className="inventoryList__header">
            <h1>Inventory</h1>
            <input
              type="text"
              placeholder="Search"
              className="inventoryList__searchBar"
            />
          </section>

          <section className="inventoryList__horizontal">
            <h5 className="inventoryCard__label-horizontal">ITEM</h5>
            <h5 className="inventoryCard__label-horizontal">LAST ORDERED</h5>
            <h5 className="inventoryCard__label-horizontal">LOCATION</h5>
            <h5 className="inventoryCard__label-horizontal">QUANTITY</h5>
            <h5 className="inventoryCard__label-horizontal">STATUS</h5>
          </section>

          {this.state.inventory.map((item) => {
            return (
              <div className="inventoryCard__contain" key={item.id}>
                <Link to={`/inventory/${item.id}`}>
                  <InventoryCard
                    inventory={this.state.inventory}
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    quantity={item.quantity}
                    lastOrdered={item.lastOrdered}
                    city={item.city}
                    isInstock={item.isInstock}
                    category={item.category}
                    warehouseId={item.warehouseId}
                  />
                </Link>
                <Dropdown
                  handleRemove={this.handleRemove}
                  inventoryId={item.id}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
