import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Kebab from '../InventoryKebabMenu/InventoryKebabMenu';
import axios from 'axios';
import './InventoryItems.scss'

export class InventoryItems extends Component {
    state = {
        productList: this.props.products[0],
    }

    removeHandler = (e) => {
        e.preventDefault();

        axios.delete('/inventory.json')
        .then(res =>{
            console.log(res);
        })
    }

    
    render() {
        const inventoryList = this.props.products[0].map(item => {
            return (
                <div key={item.id} className='inventory'>
                    <Link to={`/${item.id}`} className='inventory__unit'>
                        <div className='inventory__item'>
                            <div className='inventory__item-label lbl'>Item</div>
                            <div className="inventory__item-name">{item.name}</div>
                            <div className="inventory__item-description">{item.description}</div>
                        </div>
                        <div className="inventory__date">
                            <div className="inventory__date-label lbl">Last Ordered</div>
                            <div className="inventory__date-date">{item.lastOrdered}</div>
                        </div>
                        <div className="inventory__location">
                            <div className="inventory__location-label lbl">Location</div>
                            <div className="inventory__location-city">{item.city}</div>
                        </div>
                        <div className="inventory__quantity">
                            <div className="inventory__quantity-label lbl">Quantity</div>
                            <div className="inventory__quantity-amount">{item.quantity}</div>
                        </div>
                        <div className="inventory__status">
                            <div className="inventory__status-label lbl">Status</div>
                            <div className="inventory__status-status">{item.isInstock ? 'In Stock':'Out of Stock'}</div>
                        </div>
                    </Link>
                    <div className="inventory__kebab">
                        <Kebab removeHandler={this.removeHandler}/>
                    </div>
                </div>
            )
        })
        
        return (
            <>
                {inventoryList}
            </>
        )
    }
}

export default InventoryItems
