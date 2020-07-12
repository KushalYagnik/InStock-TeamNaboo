import React from "react";
import { Link } from 'react-router-dom';
import backArrow from "../../assets/Icons/SVG/Icon-back-arrow.svg";
import axios from 'axios';
import Header from '../Header/Header';
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

  componentDidMount() {
    let inventoryId = this.props.match.params.inventoryid;
    let warehouseId = this.props.match.params.warehouseid;

    axios
      .get(`http://localhost:8080/inventory/${inventoryId}`)
      .then(res => {
        this.setState({
          product: res.data
        });
      });

    axios
      .get(`http://localhost:8080/warehouses/${warehouseId}`)
      .then(res => {
        this.setState({
          warehouse: res.data
        });
      });
  }

  render() {
    let productQuantity = this.state.product.quantity;

    return (
      <>
        <Header />
        <section className="product">
          <div className="product__header-container">
            <div className="product__header-container--top">
              <div className="product__header-container--title">
                <Link to="/inventory">
                <img
                  className="product__back-arrow"
                  src={backArrow}
                  alt="back arrow"
                />
                </Link>
                <h1 className="product__name">
                  {this.state.product.name}
                </h1>
              </div>
              <div
                className="product__stock--in"
                style={
                  productQuantity > 0 ? { display: "flex" } : { display: "none" }
                }
              >
                In Stock
            </div>
              <div
                className="product__stock--out"
                style={
                  productQuantity === 0
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
                Out of Stock
            </div>
            </div>
          </div>
          <div className="product__summary">
            <div className="product__item-description">
              <h4 className="product__data-label">Item Description</h4>
              <p className="product__data">{this.state.product.description}</p>
            </div>
            <div className="product__info-container--with-categories">
              <div className="product__info-container">
                <div className="product__info-container--row1">
                  <div className="product__data-container">
                    <h4 className="product__data-label">Ordered By</h4>
                    <p className="product__data">
                      {this.state.warehouse.contact.name}
                    </p>
                  </div>
                  <div className="product__data-container">
                    <h4 className="product__data-label">Reference Number</h4>
                    <p className="product__data">{this.state.product.id}</p>
                  </div>
                </div>
                <div className="product__info-container--row2">
                  <div className="product__data-container">
                    <h4 className="product__data-label">Last Ordered</h4>
                    <p className="product__data">
                      {this.state.product.lastOrdered}
                    </p>
                  </div>
                  <div className="product__data-container">
                    <h4 className="product__data-label">Location</h4>
                    <p className="product__data">
                      {this.state.warehouse.address.location}
                    </p>
                  </div>
                </div>
                <div className="product__info-container--row3">
                  <div className="product__data-container">
                    <h4 className="product__data-label">Quantity</h4>
                    <p className="product__data">{productQuantity}</p>
                  </div>
                </div>
              </div>
              <div className="product__categories">
                <h4 className="product__data-label">Categories</h4>
                <p className="product__data">
                  {this.state.product.categories}
                </p>
              </div>
            </div>
          </div>
          <div className="product__button-container">
            <button className="product__button--edit">
              Edit
          </button>
          </div>
        </section>
      </>
    );
  }
}
