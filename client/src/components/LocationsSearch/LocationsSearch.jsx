import React from 'react';
import axios from 'axios';
import '../../App.scss';
import '../LocationsSearch/LocationsSearch.scss';
import RightArrow from "../../assets/Icons/SVG/Iconarrowright.svg";

class LocationsSearch extends React.Component {
  state = { warehouses: [] }

  componentDidMount() {
    axios
    .get('/locations.json')
    .then(res => {
      const warehouses = res.data;
      this.setState({ warehouses })
    })
    .catch(err => console.log("Errors: ", err))
  }

  render () {
    return (
        <section className="locations-container">
          <header className="locations-search">
            <div className="locations-search__title">Locations</div>
            <input type="textarea" className="locations-search__search" placeholder="Search"></input>
          </header>
          {this.state.warehouses.map((theWarehouse) => 
            <header className="warehouse-list" key={theWarehouse.id}>
              <img src={RightArrow} className="warehouse-list__right-arrow" alt="right arrow"/>
                <div className="warehouse-list__warehouse">{theWarehouse.name}</div>
                <div className="warehouse-list__address">{theWarehouse.address.street}, {theWarehouse.address.location}</div>
              <div className="warehouse-list__contact">{theWarehouse.contact.name}</div>
                <div className="warehouse-list__position">{theWarehouse.contact.position}</div>
                <div className="warehouse-list__phone">{theWarehouse.contact.phone}</div>
                <div className="warehouse-list__email">{theWarehouse.contact.email}</div>
                <div className="warehouse-list__desc">{theWarehouse.inventoryCategories}</div>
            </header>  
          )}
        </section>
    )}
}
            


export default LocationsSearch;