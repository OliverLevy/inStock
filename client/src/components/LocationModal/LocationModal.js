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
            <section className="locationModal__form-group">
              <label
                htmlFor="locationName"
                className="locationModal__form-label"
              >
                NAME
              </label>
              <input
                placeholder="Warehouse Name"
                type="text"
                className="locationModal__form-input"
                id="locationName"
              />
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
                placeholder="Name"
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
                Contact Position
              </label>
              <input
                placeholder="Position"
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
                Contact Phone
              </label>
              <input
                placeholder="123-4567-8901"
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
                Contact Email
              </label>
              <input
                placeholder="example@domain.com"
                type="email"
                className="locationModal__form-input"
                id="locationContactEmail"
              />
            </section>

            <section className="locationModal__form-group">
              <label
                htmlFor="locationAddressStreet"
                className="locationModal__form-label"
              >
                Street
              </label>
              <input
                type="text"
                className="locationModal__form-input"
                id="locationAddressStreet"
              />
            </section>

            <section className="locationModal__form-group">
              <label
                htmlFor="locationAddressCity"
                className="locationModal__form-label"
              >
                City
              </label>
              <input
                placeholder="Toronto"
                type="text"
                className="locationModal__form-input"
                id="locationAddressCity"
              />
            </section>

            <section className="locationModal__form-group">
              <label
                htmlFor="locationCountry"
                className="locationModal__form-label"
              >
                Country
              </label>
              <select name="locationCountry" id="locationCountry">
                <option value="USA">USA</option>
                <option value="CAN">CAN</option>
              </select>
            </section>

            <section className="locationModal__form-group">
              <label
                htmlFor="locationCategories"
                className="locationModal__form-label"
              >
                INVENTORY CATEGORIES
              </label>
              <textarea
                name="locationCategories"
                id="locationDeCategories"
                className="locationModal__form-textarea"
              ></textarea>
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
