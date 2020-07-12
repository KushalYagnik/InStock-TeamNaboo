import React, { useState } from 'react';
import './AddInventory.scss';
import Modal from 'react-modal';
import add from '../../assets/Icons/SVG/Icon-add.svg';
import axios from 'axios';
import Toggle from '../Toggle/Toggle';
Modal.setAppElement('#root')


export default function AddInventory() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [productName, setproductName] = useState("")
  const [orderDate, setorderDate] = useState("")
  const [city, setcity] = useState("")
  const [country, setcountry] = useState("")
  const [quantity, setquantity] = useState("")
  const [status, setstatus] = useState("")
  const sendUpload = () => {
    axios
      .post('/inventory.json', {
        "productName": productName,
        "orderDate": orderDate,
        "city": city,
        "country": country,
        "quantity": quantity,
        "status": status,
      }, { headers: { 'Content-Type': 'application/json' } })
      .then(res => res.data)
      .catch(err => console.error(err))
  }
  return (
    <div>
      <div className="modalI__select--containter">
        <button className="modalI__select" onClick={() => setModalIsOpen(true)}><img className="modalI__select--img" src={add} /></button>
      </div>
      <div className="modalI">
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <form action="">
            <div className="modalI__form modalI__form--container1">
              <h2 className="modalI__title">Add New</h2>
              <label className="modalI__form--label" htmlFor="Product">Product</label>
              <input className="modalI__form--input" name="Product" placeholder="Item Name" />
              <label className="modalI__form--label" htmlFor="LastOrdered">Last Ordered</label>
              <input className="modalI__form--input" name="LastOrdered" placeholder="yyyy-mm-dd" />
              <label className="modalI__form--label" htmlFor="City">City</label>
              <input className="modalI__form--input" name="City" placeholder="City" />
              <label className="modalI__form--label" htmlFor="Country">Country</label>
              <select name="Country" id="modalI__form--drpdwn" className="modalI__form--input">
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
              </select>
              <label className="modalI__form--label" htmlFor="Quantity">Quantity</label>
              <input className="modalI__form--input" name="Quantity" placeholder="0" />
              <label className="modalI__form--label" htmlFor="Status">Status</label>
              <div className="modalI__form--toggle-wrapper">
                <h4 className="modalI__form--status">In Stock</h4>
                <Toggle className="modalI__form--toggle"/>
              </div>
              <label className="modalI__form--label" htmlFor="Description">Item Description</label>
              <textarea className="modalI__form--textArea" name="Description" placeholder="(Optional)"></textarea>
            </div>
            <div className="modalI__form--containerButtons">
              <button className="modalI__form--save" onClick={sendUpload}>save</button>
              <button className="modalI__form--cancel" onClick={() => setModalIsOpen(false)}>Cancel</button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  )
}

