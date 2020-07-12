import React, { useState } from 'react';
import './AddInventory.scss';
import Modal from 'react-modal';
import add from '../../assets/Icons/SVG/Icon-add.svg';
import axios from 'axios';
import Toggle from '../Toggle/Toggle';
Modal.setAppElement('#root')


export default function AddInventory() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [lastOrdered, setlastOrdered] = useState("")
  const [city, setcity] = useState("")
  const [country, setcountry] = useState("")
  const [quantity, setquantity] = useState("")
  const [isInstock, setisInstock] = useState("")
  const [description, setdescription] = useState("")
  const sendUpload = () => {
    axios
      .post('http://localhost:8080/inventory', {
        "name": name,
        "lastOrdered": lastOrdered,
        "city": city,
        "country": country,
        "quantity": quantity,
        "isInstock": "In Stock",
        "description": description
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
              <input className="modalI__form--input" onChange={(e) => setName(e.target.value)}name="Product" placeholder="Item Name" />
              <label className="modalI__form--label" htmlFor="LastOrdered">Last Ordered</label>
              <input className="modalI__form--input" onChange={(e) => setlastOrdered(e.target.value)}name="LastOrdered" placeholder="yyyy-mm-dd" />
              <label className="modalI__form--label" htmlFor="City">City</label>
              <input className="modalI__form--input" onChange={(e) => setcity(e.target.value)}name="City" placeholder="City" />
              <label className="modalI__form--label" htmlFor="Country">Country</label>
              <select onChange={(e) => setcountry(e.target.value)}name="Country" id="modalI__form--drpdwn" className="modalI__form--input">
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
              </select>
              <label className="modalI__form--label" htmlFor="Quantity">Quantity</label>
              <input className="modalI__form--input" onChange={(e) => setquantity(e.target.value)}name="Quantity" placeholder="0" />
              <label className="modalI__form--label" htmlFor="Status">Status</label>
              <div className="modalI__form--toggle-wrapper">
                <h4 className="modalI__form--status">In Stock</h4>
                <Toggle onChange={(e) => setisInstock(e.target.value)} className="modalI__form--toggle"/>
              </div>
              <label className="modalI__form--label" htmlFor="Description">Item Description</label>
              <textarea onChange={(e) => setdescription(e.target.value)} className="modalI__form--textArea" name="Description" placeholder="(Optional)"></textarea>
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

