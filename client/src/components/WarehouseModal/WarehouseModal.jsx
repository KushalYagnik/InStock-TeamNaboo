import React, { useState } from 'react';
import './/WarehouseModal.scss';
import Modal from 'react-modal';
import axios from 'axios';
import add from '../../assets/Icons/SVG/Icon-add.svg';

Modal.setAppElement('#root')

export default function WarehouseModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  // Post added here so each separate piece can work individually
  const [nameId, setnameId] = useState("")
  const [address, setAddy] = useState("")
  const [location, setLocation] = useState("")
  const [contact, setContact] = useState("")
  const [position, setPosition] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [itemDesc, setDesc] = useState("")
  
//   const sendUpload = () => {
//   axios
//     .post('/locations.json', {
//       "nameId": nameId,
//       "address": address,
//       "location": location,
//       "contact": contact,
//       "position": position,
//       "phone": phone,
//       "email": email,
//       "itemDesc": itemDesc,
//     }, {headers: {'Content-Type': 'application/json'}})
//     .then(res => {res.data})
//     .catch(err => console.error(err))
//   }

  return (
      <div>
          <div className="modalW__select--containter">
          <button className="modalW__select" onClick={() => setModalIsOpen(true)}><img className="modalW__select--img" alt="modal" src={add} /></button>
          </div>
      <div className="modalW">
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}> 
              <form action="">
                  <div className="modalW__form modalW__form--container1">
              <h2 className="modalW__title">Add New</h2>
              <label className="modalW__form--label" htmlFor="Warehouse">Warehouse</label>
              <input className="modalW__form--input" name="Warehouse" placeholder="Name & ID"/>
              <label className="modalW__form--label" htmlFor="Address">Address</label>
              <input className="modalW__form--input" name="Address" placeholder="Enter Address"/>
              <label className="modalW__form--label" htmlFor="Location">Location</label>
              <input className="modalW__form--input" name="Location" placeholder="City, Country"/>
              <label className="modalW__form--label" htmlFor="Name">Contact Name</label>
              <input className="modalW__form--input" name="Name" placeholder="Enter Name"/>
              <label className="modalW__form--label" htmlFor="Position">Position</label>
              <input className="modalW__form--input" name="Position" placeholder="Enter Position"/>
              <label className="modalW__form--label" htmlFor="Phone">Phone Number</label>
              <input className="modalW__form--input" name="Phone" placeholder="(000) 000 0000"/>
              <label className="modalW__form--label" htmlFor="Email">Email</label>
              <input className="modalW__form--input" name="Email" placeholder="example@InStock.ca"/>
              </div>
              <div className="modalW__form">
              <label className="modalW__form--label" htmlFor="Item">Categories</label>
              </div>
              <textarea className="modalW__form--textArea" name="Item" placeholder="Use commas to separate each category"></textarea>
              <div className="modalW__form--containerButtons">
              {/* <button className="modalW__form--save" onClick={sendUpload}>Save</button> */}
              <button className="modalW__form--save">Save</button>
              <button className="modalW__form--cancel" onClick={() => setModalIsOpen(false)}>Cancel</button>
              </div>
              </form>
          </Modal>
      </div>
      </div>
  )
}
