import React, { Component } from "react";
import "./InventoryDetail.scss";
import Axios from "axios";
import { Link } from "react-router-dom";
import BackIcon from '../../assets/icons/Icon-back-arrow.svg'

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
    console.log(this.state.item);
    let product = this.state.item;

    const inStock = () => {
      if (product.isInstock === true) {
        return <h4>In Stock</h4>;
      } else {
        return <h4>Out of Stock</h4>
      }
    };

    return (
      <div>
        <Link to="/inventory">
          <img src={BackIcon} alt=""/>
          <h1>{product.name}</h1>
        </Link>
        {inStock()}
        <h5>item description</h5>
        <p>{product.description}</p>
        <h5>ordered by</h5>
        <p>missing ordered by info from server</p>
        <h5>last ordered</h5>
        <p>{product.lastOrdered}</p>
        <h5>location</h5>
        <p>
          {product.city}
          {product.country}product.country is showing ontario
        </p>
        <h5>quantity</h5>
        <p>{product.quantity}</p>
        <h5>categories</h5>
        <p>{product.categories}</p>
        <button><h3>EDIT</h3></button>
      </div>
    );
  }
}
