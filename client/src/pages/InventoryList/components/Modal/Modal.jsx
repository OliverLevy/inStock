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
        >
          <h1>Create New</h1>
          <form>
            <div>
              <label>
                <h5>PRODUCT</h5>
                <input type="text" />
              </label>
              <label>
                <h5>LAST ORDERED</h5>
                <input type="text" />
              </label>
            </div>

            <div>
              <label>
                <h5>CITY</h5>
                <input type="text" />
              </label>
              <select>
                <h5>COUNTRY</h5>
                <option>Canada</option>
              </select>
            </div>

            <div>
              <label>
                <h5>QUANTITY</h5>
                <input type="text" />
              </label>
              <ToggleSwitch
                onChange={this.handleSwitch}
                checked={this.state.switchValue}
              />
            </div>

            <label>
              <h5>ITEM DESCRIPTION</h5>
              <textarea type="text" />
            </label>

            <div>
              <button>SAVE</button>
              <button onClick={this.toggleModal}>
                CANCEL
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default AddInventory;
