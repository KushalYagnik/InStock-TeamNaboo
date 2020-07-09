import React, { useState } from 'react'
import './warehouseModal.scss'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export default function WarehouseModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="modalW">
            <button className="modalW__select" onClick={() => setModalIsOpen(true)}></button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}> 
                <h2 className="modalW__title">Add New</h2>
                <form className="modalW__form" action="">
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
                <label className="modalW__form--label" htmlFor="Item">Item Description</label>
                <textarea className="modalW__form--textArea" name="Item" placeholder="Use commas to separate each category"></textarea>
                <div>
                <button className="modalW__form--save">save</button>
                <button className="modalW__form--cancel" onClick={() => setModalIsOpen(false)}>Cancel</button>
                </div>

                </form>
            </Modal>
        </div>
    )
}
