import React from 'react';
import axios from 'axios';
import '../../App.scss';
import '../InventorySearch/InventorySearch.scss';
import kebab from "../../assets/Icons/SVG/Icon-kebab-default.svg"

export default class InventorySearch extends React.Component {
  state = { 
    widgets: []
   }

  componentDidMount() {
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
        <section className="inventory-container">
          <header className="inventory-search">
            <div className="inventory-search__title">Inventory</div>
            <input type="textarea" className="inventory-search__search" placeholder="Search"></input>
          </header>
          {this.state.widgets.map((theWidget) => 
           <main className="items__wrap">
            <img src={kebab} className="items__kebab"/>
            <div className="items__titles">ITEM</div>
            <div className="items__name">{theWidget.name}</div>
            <div className="items__text">{theWidget.description}</div>
            <div className="items__titles">LAST ORDERED</div>
            <div className="items__text">{theWidget.lastOrdered}</div>
            <div className="items__titles">LOCATION</div>
            <div className="items__text">{theWidget.city}, {theWidget.country}</div>
            <div className="items__titles">QUANTITY</div>
            <div className="items__text">{theWidget.quantity}</div>
            <div className="items__titles">STATUS</div>
            <div className="items__text">{theWidget.isInstock ? "In Stock" : "Out of Stock"}</div>         
           </main> 
          )}
          </section>
    )     
  }
}