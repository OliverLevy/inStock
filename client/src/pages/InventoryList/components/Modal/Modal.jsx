import React, { Component, useState } from "react";
import Modal from "react-modal";
import { default as ToggleSwitch } from "react-switch";
import "./Modal.scss";
import addIcon from "../../../../assets/icons/Icon-add.svg";

Modal.setAppElement("#root");

class AddInventory extends React.Component {
  state = {
    modelIsOpen: true,
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

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>Open Model</button>
        <Modal
          isOpen={this.state.modelIsOpen}
          className="add-item__modal"
          overlayClassName="add-item__modal-overlay"
          // bodyOpenClassName="add-item__document-body"
          htmlOpenClassName="add-item__document-body"
        >
          <h1>Create New</h1>
          <form className="add-item__form">
            <label>
              <h5 className="add-item__label">PRODUCT</h5>
              <input type="text" className="add-item__input" />
            </label>
            <label>
              <h5 className="add-item__label">LAST ORDERED</h5>
              <input type="date" className="add-item__input" />
            </label>

            <label>
              <h5 className="add-item__label">CITY</h5>
              <input type="text" className="add-item__input" />
            </label>
            <label>
              <h5 className="add-item__label">COUNTRY</h5>
              <select className="add-item__input">
                <option>Canada</option>
              </select>
            </label>

            <label>
              <h5 className="add-item__label">QUANTITY</h5>
              <input type="number" className="add-item__input" />
            </label>
            <div>
              <h5 className="add-item__label">status</h5>
              <div className='add-item__in-stock-container'>
                <p>In Stock</p>
                <ToggleSwitch
                  onChange={this.handleSwitch}
                  checked={this.state.switchValue}
                />
              </div>
            </div>

            <label>
              <h5 className="add-item__label">ITEM DESCRIPTION</h5>
              <textarea type="text" className="add-item__text-area" />
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
