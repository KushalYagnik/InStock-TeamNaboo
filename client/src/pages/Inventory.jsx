import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header/Header'
import Products from '../components/InventoryItems/InventoryItems'
import './Inventory.scss'

export class Inventory extends Component {
    state = {
        products: [],
    }

    componentDidMount() {
        axios.get('/inventory.json')
            .then(res => {
                this.setState(
                    { products: [res.data] }
                )
            });
    }

    render() {
        if (this.state.products.length >= 1) {
                return (
                    <>
                        <Header />
                        <div className="inventory__header">
                            <h1 className="inventory__header-title">Inventory</h1>
                            <input className="inventory__header-searchbox" type="text" placeholder="Search"/>
                        </div>
                        <Products products={this.state.products}/>
                    </>
                )
        }
        else {
            return (
                <h1>Loading...</h1>
            )
        }
    }
}

export default Inventory
