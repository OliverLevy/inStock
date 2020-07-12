import React, { Component } from "react";
import Modal from "react-modal";
import "./style.scss";
import axios from 'axios';

Modal.setAppElement('#root')

export default class LocationModal extends Component {
  state = {
    modelIsOpen: false
    

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


  
  handleSubmit=(e)=>{
    e.preventDefault();
  }
  addWarehouse = e => {
    const formData = new formData(e.target);
    e.preventDefault()

    for (let [key, value] of formData.entries())

    axios.post("http://localhost:8080/inventory", {
      "id": formData.get("id"),
      "name": formData.get("name"),
      "description": formData.get("description"),
      "quantity": formData.get("quantity"),
      "lastOrdered": formData.get("lastOrdered"),
      "city": formData.get("city"),
      "country": formData.get("country"),
      "isInstock": formData.get("isInstock"),
      "categories": formData.get("categories"),
      "warehouseId": formData.get("warehousId"),
    })  
  }

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
          <form className="locationModal__form" onSubmit={this.props.handleSubmit}>
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
                name='locationName'
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
              name='locationAddress'
              placeholder='Enter Address'
                type="text"
                className="locationModal__form-input"
                id="locationAddress"
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
              name='locationContactName'
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
                name="locationContactPosition"

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
                name="locationContactPhone"

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
                name="locationContactEmail"

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
                defaultValue='Use commas to separate each category'
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
            type='submit'
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
