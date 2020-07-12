import React from "react";
import { Link } from 'react-router-dom';
import backArrow from "../../assets/Icons/SVG/Icon-back-arrow.svg";
import axios from 'axios';
import Header from '../Header/Header';
import './ProductSummary.scss';

export default class ProductSummary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: []
    }
  }

  componentDidMount() {
    axios
      .get(`/inventory.json`)
      .then(res => {
        const filteredWidget = res.data.find((item, i) => {
          return this.props.id === res.data[i].id
        })
        this.setState({ product: filteredWidget })
      })
      .catch(err => console.log("Errors: ", err))
  }

  render() {
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
                style={this.state.product.quantity > 0 ? { display: "flex" } : { display: "none" }}
              >
                In Stock
            </div>
              <div
                className="product__stock--out"
                style={
                  this.state.product.quantity === 0
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
                    <p className="product__data">{this.state.product.quantity}</p>
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
