import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Kebab from "../../assets/Icons/SVG/Icon-kebab-default.svg";
import '../../App.scss';
import '../WarehousesDetails/WarehousesDetails.scss';
import LeftArrow from "../../assets/Icons/SVG/Icon-back-arrow.svg";

export default class WarehousesDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      warehouse: {},
      widgets: []
    }
  }

  componentDidMount() {
    axios
    .get('/locations.json')
    .then(res => {
      const filteredWarehouse = res.data.find((item, i) => {
        return this.props.id === res.data[i].id
      })
      this.setState({ warehouse: filteredWarehouse })
    })
    .catch(err => console.log("Warehouse error: ", err))
  
    axios
      .get('/inventory.json')
      .then(res => { 
        const filteredWidgets = res.data.filter((_item, i) => {
          return (this.props.id === res.data[i].warehouseId)
        })
      this.setState({ widgets: filteredWidgets });
    })
    .catch(err => console.log("Widget error: ", err))
  }

render () {
    return (
      <div className="locations-details">
        {
          Object.keys(this.state.warehouse).length > 0 && this.state.warehouse.constructor === Object ?
            <section className="details__container" key={`warehouse-${this.state.warehouse.id}`}>
              <Link className="details__link" to="/">
                <img src={LeftArrow} className="details__left-arrow" alt="left arrow" />
              </Link>
              <div className="details__title">Warehouse Name</div>
              <div className="details__container--spacing">
              <div className="details__container--1">
              <div className="details__titles">ADDRESS</div>
              <div className="details__text">{this.state.warehouse.address.street}</div>
              <div className="details__text">{this.state.warehouse.address.location}</div>
              <div className="details__text">{this.state.warehouse.city}</div>
              <div className="details__text">{this.state.warehouse.postal}</div>
              </div>
              <div className="details__container--2">
              <div className="details__titles">CONTACT</div>
              <div className="details__text">{this.state.warehouse.contact.name}</div>
              <div className="details__text">{this.state.warehouse.contact.position}</div>
              <div className="details__phone">{this.state.warehouse.contact.phone}</div>
              <div className="details__text">{this.state.warehouse.contact.email}</div>
              </div>
              </div>
            </section> : null
        }
        {
          this.state.widgets.length > 0 ? 
            this.state.widgets.map(item => 
              <section className="items-container" key={`widget-${item.name}`}>
                <img src={Kebab} className="details__kebab" alt="kebab"/>
                <div>
                <div className="details__titles">ITEM</div>
                <div className="details__name">{item.name}</div>
                <div className="details__text">{item.description}</div>
                </div>
                <div>
                <div className="details__titles">LAST ORDERED</div>
                <div className="details__text">{item.lastOrdered}</div>
                </div>
                <div>
                <div className="details__titles">LOCATION</div>
                <div className="details__text">{item.city}, {item.country}</div>
                </div>
                <div>
                <div className="details__titles">QUANTITY</div>
                <div className="details__text">{item.quantity}</div>
                </div>
                <div>
                <div className="details__titles">STATUS</div>
                <div className="details__text">{item.isInstock}</div>
                </div>
              </section>
            ) : null
        }
      </div>  
    )
  }
}