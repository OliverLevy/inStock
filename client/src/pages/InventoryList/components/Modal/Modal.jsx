import React, { Component, useState } from "react";
import Modal from "react-modal";
import { default as ToggleSwitch } from "react-switch";
import "./Modal.scss";
import addIcon from "../../../../assets/icons/Icon-add.svg";

Modal.setAppElement("#root");

class AddInventory extends React.Component {
  state = {
    modelIsOpen: false,
    switchValue: false,
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

  switchDisplayValue = () => {
    if(this.state.switchValue === true){
      return(
        <p>In Stock</p>
      )
    } else {
      return (
        <p>Out of Stock</p>
      )
    }
  }

  render() {
    
    return (
      <div>
        <button onClick={this.toggleModal} className="add-item__open">
          <img src={addIcon} alt="add item button" className="add-item__icon" />
        </button>
        <Modal
          isOpen={this.state.modelIsOpen}
          className="add-item__modal"
          overlayClassName="add-item__modal-overlay"
          bodyOpenClassName="add-item__document-body"
          htmlOpenClassName="add-item__document-body"
        >
          <h1>Create New</h1>
          <form className="add-item__form">
            <div className="add-item__container">
              <label className="add-item__input-container">
                <h5 className="add-item__label">PRODUCT</h5>
                <input
                  type="text"
                  className="add-item__input"
                  placeholder="Item Name"
                />
              </label>
              <label className="add-item__input-container">
                <h5 className="add-item__label">LAST ORDERED</h5>
                <input type="date" className="add-item__input" />
              </label>

              <label className="add-item__input-container">
                <h5 className="add-item__label">CITY</h5>
                <input
                  type="text"
                  className="add-item__input"
                  placeholder="City"
                />
              </label>
              <label className="add-item__input-container">
                <h5 className="add-item__label">COUNTRY</h5>
                <select className="add-item__input">
                  <option>Canada</option>
                </select>
              </label>

              <label className="add-item__input-container">
                <h5 className="add-item__label">QUANTITY</h5>
                <input
                  type="number"
                  className="add-item__input"
                  placeholder="0"
                />
              </label>
              <div className="add-item__input-container">
                <h5 className="add-item__label">status</h5>
                <div className="add-item__in-stock-container">
                  {this.switchDisplayValue()}
                  <ToggleSwitch
                    onChange={this.handleSwitch}
                    checked={this.state.switchValue}
                  />
                </div>
              </div>
            </div>

            <label className="">
              <h5 className="add-item__label">ITEM DESCRIPTION</h5>
              <textarea
                type="text"
                className="add-item__text-area"
                placeholder="(Optional)"
              />
            </label>

            <div className="add-item__btn-container">
              <button className="cta-btn">
                <h4>SAVE</h4>
              </button>
              <button
                onClick={this.toggleModal}
                className="cta-btn cta-btn--cancel"
              >
                <h4>CANCEL</h4>
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default AddInventory;
