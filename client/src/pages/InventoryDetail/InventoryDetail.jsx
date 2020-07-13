import React, { Component } from "react";
import "./InventoryDetail.scss";
import Axios from "axios";
import { Link } from "react-router-dom";
import BackIcon from "../../assets/icons/Icon-back-arrow.svg";

export default class InventoryDetail extends Component {
  state = {
    item: [],
  };

  componentDidMount() {
    Axios.get(`http://localhost:8080${this.props.match.url}`).then(
      (success) => {
        this.setState({
          item: success.data[0],
        });
      }
    );
  }

  render() {
    let product = this.state.item;
    const inStock = () => {
      if (product.isInstock === true) {
        return (
          <h4 className="inventory-detail__stock inventory-detail__stock--in-stock">
            In Stock
          </h4>
        );
      } else {
        return (
          <h4 className="inventory-detail__stock inventory-detail__stock--out-of-stock">
            Out of Stock
          </h4>
        );
      }
    };

    return (
      <div className="inventory-detail">
        <div className="inventory-detail__link-container">
          <Link to="/inventory" className="inventory-detail__link">
            <img
              className="inventory-detail__link-icon"
              src={BackIcon}
              alt="go back icon"
            />
            <h1 className="inventory-detail__link-title">{product.name}</h1>
          </Link>
          {inStock()}
        </div>
        <div className="inventory-detail__divider"></div>
        <div className="inventory-detail__detail-container">
          <div className="inventory-detail__description">
            <h5 className="inventory-detail__label">item description</h5>
            <p>{product.description}</p>
          </div>
          <div className="inventory-detail__info">
            <div className="inventory-detail__info-item">
              <h5 className="inventory-detail__label">ordered by</h5>
              <p>BrainStation</p>
            </div>
            <div className="inventory-detail__info-item">
              <h5 className="inventory-detail__label">reference number</h5>
              <p>{product.id}</p>
            </div>
            <div className="inventory-detail__info-item">
              <h5 className="inventory-detail__label">last ordered</h5>
              <p>{product.lastOrdered}</p>
            </div>
            <div className="inventory-detail__info-item">
              <h5 className="inventory-detail__label">location</h5>
              <p>
                {product.city}, {product.country}
              </p>
            </div>
            <div className="inventory-detail__info-item">
              <h5 className="inventory-detail__label">quantity</h5>
              <p>{product.quantity}</p>
            </div>
            <div className="inventory-detail__info-item inventory-detail__categories">
              <h5 className="inventory-detail__label">categories</h5>
              <p>{product.categories}</p>
            </div>
          </div>
        </div>
        <div className="inventory-detail__divider"></div>
        <button className="inventory-detail__edit-btn">
          <h3>EDIT</h3>
        </button>
      </div>
    );
  }
}
