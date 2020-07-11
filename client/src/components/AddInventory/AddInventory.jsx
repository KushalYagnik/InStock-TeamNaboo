import React, { useState } from 'react';
import './AddInventory.scss';
import Modal from 'react-modal';
import add from '../../assets/Icons/SVG/Icon-add.svg';
import { Switch } from 'react-router';

Modal.setAppElement('#root')

export default function AddInventory() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <div className="modalW__select--containter">
                <button className="modalW__select" onClick={() => setModalIsOpen(true)}><img className="modalW__select--img" src={add} /></button>
            </div>
            <div className="modalW">
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <form action="">
                        <div className="modalW__form modalW__form--container1">
                            <h2 className="modalW__title">Add New</h2>
                            <label className="modalW__form--label" htmlFor="Product">Product</label>
                            <input className="modalW__form--input" name="Product" placeholder="Item Name" />
                            <label className="modalW__form--label" htmlFor="LastOrdered">Last Ordered</label>
                            <input className="modalW__form--input" name="LastOrdered" placeholder="yyyy-mm-dd" />
                            <label className="modalW__form--label" htmlFor="City">City</label>
                            <input className="modalW__form--input" name="City" placeholder="City" />
                            <label className="modalW__form--label" htmlFor="Country">Country</label>
                            {/* Change the bottom code to a dropdown with a default value of Canada*/}
                            <input className="modalW__form--input" name="Country" placeholder="Country" /> 
                            <label className="modalW__form--label" htmlFor="Quantity">Quantity</label>
                            <input className="modalW__form--input" name="Quantity" placeholder="0" />
                            <label className="modalW__form--label" htmlFor="Status">Status</label>
                            <div>
                                <h4>In Stock / Out of Stock</h4>
                                <Switch></Switch>
                                {/* NEEDS TO BE WORKED */}
                            </div>
                            <label className="modalW__form--label" htmlFor="Description">Item Description</label>
                            <textarea className="modalW__form--textArea" name="Description" placeholder="(Optional)"></textarea>
                        </div>
                        <div className="modalW__form--containerButtons">
                            <button className="modalW__form--save">save</button>
                            <button className="modalW__form--cancel" onClick={() => setModalIsOpen(false)}>Cancel</button>
                        </div>
                    </form>
                </Modal>
            </div>
        </div>
    )
}
