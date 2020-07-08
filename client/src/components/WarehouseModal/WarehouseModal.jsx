import React, { useState } from 'react'
import './warehouseModal.scss'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export default function WarehouseModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setModalIsOpen(true)}></button>
            <Modal isOpen={modalIsOpen} onRequestClose={setModalIsOpen(false)}> 
                <h2>Add New</h2>
                <form action="">
                <label htmlFor="Warehouse">Warehouse</label>
                <textarea name="Warehouse"></textarea>
                <label htmlFor="Address">Address</label>
                <textarea name="Address"></textarea>
                <label htmlFor="Location">Location</label>
                <textarea name="Location"></textarea>
                <label htmlFor="Name">Contact Name</label>
                <textarea name="Name"></textarea>
                <label htmlFor="Position">Position</label>
                <textarea name="Position"></textarea>
                <label htmlFor="Phone">Phone Number</label>
                <textarea name="Phone"></textarea>
                <label htmlFor="Email">Email</label>
                <textarea name="Email"></textarea>
                <label htmlFor="Item">Item Description</label>
                <textarea name="Item"></textarea>
                <div>
                <button>save</button>
                <h3 onClick={() => setModalIsOpen(false)}>Cancel</h3>
                </div>

                </form>
            </Modal>
        </div>
    )
}
