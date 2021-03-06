import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import '../../App.scss';
import '../WarehousesSearch/WarehousesSearch.scss';
import RightArrow from "../../assets/Icons/SVG/Iconarrowright.svg";

class WarehousesSearch extends React.Component {
  state = { warehouses: [] }

  componentDidMount() {
    axios
    .get('http://localhost:8080/warehouses')
    .then(res => {
      const warehouses = res.data;
      this.setState({ warehouses })
    })
    .catch(err => console.log("Errors: ", err))
  }

  // componentDidUpdate() {
  //   axios
  //   .get('http://localhost:8080/warehouses')
  //   .then(res => {
  //     const warehouses = res.data;
  //     this.setState({ warehouses })

  //   })
  //   .catch(err => console.log("Errors: ", err))
  // }

render () {
    return (
        <section className="locations-container">
          <header className="locations-search">
            <div className="locations-search__title">Locations</div>
            <input type="textarea" className="locations-search__search" placeholder="Search"></input>
          </header>
          {this.state.warehouses.map((theWarehouse) =>  {
            return (                           
            <header className="warehouse-list" key={theWarehouse.id}>
              <Link className="warehouse-link" to={`/warehouses/${theWarehouse.id}`}>
                <img src={RightArrow} className="warehouse-list__right-arrow" alt="right arrow"/>
              </Link>   
              <div className="warehouse-list__warehouse">{theWarehouse.name}</div>
              <div className="warehouse-list__address">{theWarehouse.address.street}, {theWarehouse.address.location}</div>
              <div className="warehouse-list__wrapper">
                <div className="warehouse-list__contact">{theWarehouse.contact.name}</div>
                <div className="warehouse-list__position">{theWarehouse.contact.position}</div>
              
                <div className="warehouse-list__phone">{theWarehouse.contact.phone}</div>
                <div className="warehouse-list__email">{theWarehouse.contact.email}</div>

                <div className="warehouse-list__desc">{theWarehouse.inventoryCategories}</div>
              </div>
              
            </header>     
            )}  
          )}
        </section>
    );
  }
}

export default WarehousesSearch;