import React, { Component } from "react";
import Modal from "react-modal";
import "./style.scss";

export default class LocationModal extends Component {
  state = {
    modelIsOpen: false,
  };
  toggleModal1 = () => {
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
  submitNewWarehouse = () => {};
  render() {
    return (
      <div className="locationModal">
        <button
          className="locationModal__button"
          onClick={this.toggleModal1}
        ></button>
        <Modal
          isOpen={this.state.modelIsOpen}
          className="locationModal__content"
          overlayClassName="locationModal__overlay"
        >
          <h2 className="locationModal__title">Add New</h2>
          {/* FORM */}
          <form className="locationModal__form">
            <section className="locationModal__form-group locationModal__form-group-warehouseName">
              <label
                htmlFor="locationName"
                className="locationModal__form-label"
              >
                WAREHOUSE
              </label>
              <input
                placeholder="Name &#38; ID"
                type="text"
                className="locationModal__form-input"
                id="locationName"
              />
            </section>

            <section className="locationModal__form-group">
              <label
                htmlFor="locationAddress"
                className="locationModal__form-label"
              >
                ADDRESS
              </label>
              <input
              placeholder='Enter Address'
                type="text"
                className="locationModal__form-input"
                id="locationAddressStreet"
              />
            </section>

            <section className="locationModal__form-group">
              <label
                htmlFor="locationCountry"
                className="locationModal__form-label"
              >
                LOCATION
              </label>
              <select name="locationCountry" id="locationCountry">
                <option value="Toronto, CAN">Toronto, CAN</option>
              </select>
            </section>


            {/* contact */}
            <section className="locationModal__form-group">
              <label
                htmlFor="locationContactName"
                className="locationModal__form-label"
              >
                Contact Name
              </label>
              <input
                placeholder="Enter Name"
                type="text"
                className="locationModal__form-input"
                id="locationContactName"
              />
            </section>

            <section className="locationModal__form-group">
              <label
                htmlFor="locationContactPosition"
                className="locationModal__form-label"
              >
                Position
              </label>
              <input
                placeholder="Enter Position"
                type="text"
                className="locationModal__form-input"
                id="locationContactPosition"
              />
            </section>

            <section className="locationModal__form-group">
              <label
                htmlFor="locationContactPhone"
                className="locationModal__form-label"
              >
                Phone number
              </label>
              <input
                placeholder="(000)000-0000"
                type="tel"
                className="locationModal__form-input"
                id="locationContactPhone"
              />
            </section>

            <section className="locationModal__form-group">
              <label
                htmlFor="locationContactEmail"
                className="locationModal__form-label"
              >
               Email
              </label>
              <input
                placeholder="email@instock.com"
                type="email"
                className="locationModal__form-input"
                id="locationContactEmail"
              />
            </section>
   

            <section className="locationModal__form-group locationModal__form-group-category">
              <label
                htmlFor="locationCategories"
                className="locationModal__form-label"
              >
                Categories
              </label>
              <textarea
                name="locationCategories"
                id="locationDeCategories"
                className="locationModal__form-textarea"
              >Use commas to separate each category</textarea>
            </section>
          </form>
          <div className="locationModal__buttons">
            <button
              className="locationModal__cancel"
              onClick={this.toggleModal1}
            >
              CANCEL
            </button>
            <button
              className="locationModal__save"
              onClick={this.submitNewWarehouse}
            >
              SAVE
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}
