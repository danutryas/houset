import React, { useContext } from 'react'
import InputContext from '../Context/getInput'
import ModalContext from '../Context/ModalContext'

function DeleteProduct() {
    const {closeModal,deleteModal} = useContext(ModalContext)
    const {deleteProductData} = useContext(InputContext)
    

  return (
    <aside className={`delete modal ${deleteModal ? "active":""}`}>
        <h1>Delete Product</h1>
        <p>Are you sure you want to delete this product?</p>
        <div className="cta">
            <button onClick={deleteProductData}>Yes</button>
            <button onClick={closeModal}>No</button>
        </div>
    </aside>
  )
}

export default DeleteProduct