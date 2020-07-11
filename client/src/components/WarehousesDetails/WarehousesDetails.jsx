import React from 'react';
import axios from 'axios';
import '../../App.scss';
import '../WarehousesDetails/WarehousesDetails.scss';
import LeftArrow from "../../assets/Icons/SVG/Icon-back-arrow.svg";

class WarehousesDetails extends React.Component {
  state = { 
    warehouses: [],
    widgets: []
   }

  componentDidMount() {
    axios
    .get('/locations.json')
    .then(res => {
      const warehouses = res.data;
      this.setState({ warehouses })
    })
    .catch(err => console.log("Errors: ", err))

    axios
    .get('/inventory.json')
    .then(res => {
      const widgets = res.data;
      this.setState({ widgets })
    })
    .catch(err => console.log("Errors: ", err))
  }

  render () {
    return (
      <div className="locations-details">
        <section className="details-container">
          <img src={LeftArrow} className="details__left-arrow" alt="left arrow"/>
          <div className="details__title">Warehouse Name</div>
          <div className="details__address-title">ADDRESS</div>
          <div className="details__address">{theWarehouse.address.street}</div>
          <div className="details__address2">{theWarehouse.address.location}</div>
          <div className="details__city">{theWarehouse.city}</div>
          <div className="details__postal">{theWarehouse.postal}</div>
          <div className="details__contact-title">CONTACT</div>
          <div className="details__contact">{theWarehouse.contact}</div>
          <div className="details__position">{theWarehouse.position}</div>
          <div className="details__phone">{theWarehouse.phone}</div>
          <div className="details__email">{theWarehouse.email}</div>
        </section>
        <section className="items-container">
            <div className="items__title">ITEM</div>
            <div className="items__name">{theItems.name}</div>
            <div className="items__description">{theItems.description}</div>
            <div className="items__last-ordered-title">LAST ORDERED</div>
            <div className="items__last-ordered-date">{theItems.lastOrdered}</div>
            <div className="items__location-title">LOCATION</div>
            <div className="items__city">{theItems.city}, {theItems.country}</div>
            <div className="items__quantity-title">QUANTITY</div>
            <div className="items__quantity">{theItems.quantity}</div>
            <div className="items__status-title">STATUS</div>
            <div className="items__status">{theItems.isInstock}</div>
        </section>
        </div>
    )
  }
}

export default WarehousesDetails;