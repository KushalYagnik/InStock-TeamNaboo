import React from "react";
import { Link } from 'react-router-dom';
import backArrow from "../../assets/Icons/SVG/Icon-back-arrow.svg";
import axios from 'axios';
// import Header from '../Header/Header';
import './ProductSummary.scss';

export default class ProductSummary extends React.Component {
  state = {
    product: {
      "id": "JK2020FD7811201",
      "name": "Scotch Tape",
      "description": "A clear sticky on one side tape, for all your crafting needs",
      "quantity": "400",
      "lastOrdered": "12/01/2018",
      "city": "Toronto",
      "country": "Ontario",
      "isInstock": false,
      "categories": "Crafts, Office supplies, Paper",
      "warehouseId": "W0"
    },
    warehouse: {
      "id": "W0",
      "name": "Punder Mifflin",
      "address": {
        "street": "123 Fake Street W",
        "location": "Toronto, CAN"
      },
      "contact": {
        "name": "Dimity Durian",
        "position": "Regional Manager",
        "phone": "416 679 4324",
        "email": "DimoDurian@pundermifflin.com"
      },
      "inventoryCategories": "Paper, Crafts, Office supplies"
    }
  };

  // componentDidMount() {
  //   let inventoryId = this.props.match.params.id;

  //   axios
  //     .get(
  //       `http://localhost:8080/inventory/${inventoryId}`
  //     )
  //     .then(res => {
  //       this.setState({
  //         product: res.data
  //       });
  //     });
  // }
  render() {
    let productQuantity = this.state.product.quantity;

    return (
      <section className="product">
        <div className="product__header">
          <div className="product__top-container">
            <div className="product__title-container">
              {/* <Link to="/inventory"> */}
              <img
                className="product__back-arrow"
                src={backArrow}
                alt="back arrow"
              />
              {/* </Link> */}
              <h1 className="product__name">
                {this.state.product.name}
              </h1>
            </div>
            <div
              className="product__stock-in"
              style={
                productQuantity > 0 ? { display: "inline" } : { display: "none" }
              }
            >
              In Stock
            </div>
            <div
              className="product__stock-out"
              style={
                productQuantity === 0
                  ? { display: "inline" }
                  : { display: "none" }
              }
            >
              Out of Stock
            </div>
          </div>
        </div>
        <div className="product__summary">
          <div className="product__description">
            <h4 className="product__label">Item Description</h4>
            <h4 className="product__data">{this.state.product.description}</h4>
          </div>
          <div className="product__container">
            <div className="product__data-container__dual">
              <div className="product__data-container">
                <h4 className="product__label">Ordered By</h4>
                <h4 className="product__data">
                  {this.state.warehouse.contact.name}
                </h4>
              </div>
              <div className="product__data-container">
                <h4 className="product__label">Reference Number</h4>
                <h4 className="product__data">{this.state.product.id}</h4>
              </div>
            </div>
            <div className="product__data-container__dual">
              <div className="product__data-container">
                <h4 className="product__label">Last Ordered</h4>
                <h4 className="product__data">
                  {this.state.product.lastOrdered}
                </h4>
              </div>
              <div className="product__data-container">
                <h4 className="product__label">Location</h4>
                <h4 className="product__data">
                  {this.state.warehouse.address.location}
                </h4>
              </div>
            </div>
            <div className="product__data-container">
              <h4 className="product__label">Quantity</h4>
              <h4 className="product__data">{productQuantity}</h4>
            </div>
            <div className="product__data-container">
              <h4 className="product__label">Category</h4>
              <h4 className="product__data">
                {this.state.product.categories}
              </h4>
            </div>
          </div>
        </div>
        <div className="product__button-container">
          <button className="product__button-edit">
            Edit
          </button>
        </div>
      </section>
    );
  }
}
