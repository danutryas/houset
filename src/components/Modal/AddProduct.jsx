import React, { useContext } from 'react'
import InputContext from '../Context/getInput';
import ModalContext from '../Context/ModalContext';
import ProductModalBuilder from './ProductModalBuilder';

function AddProduct() {
  const {addProduct} = useContext(InputContext)
  const {addModal} = useContext(ModalContext)

  return (
    <aside className={`add modal ${addModal ? "active" : ""}`}>
      <h1>Add Product</h1>
      <ProductModalBuilder />
      <button onClick={addProduct}>Add Product</button>
    </aside>
  )
}

export default AddProduct;