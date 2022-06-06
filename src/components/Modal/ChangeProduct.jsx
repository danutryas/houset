import React, { useContext } from 'react'
import InputContext from '../Context/getInput'
import ModalContext from '../Context/ModalContext'
import ProductModalBuilder from './ProductModalBuilder'

function ChangeProduct() {
    const {modifyModal} = useContext(ModalContext)
    const {changeProduct} = useContext(InputContext)
    

    return (
    <aside className={`change modal ${modifyModal ? "active" : ""}`}>
      <h1>Modify Product</h1>
      <ProductModalBuilder />
      <button onClick={changeProduct}>Modify Product</button>
    </aside>
  )
}

export default ChangeProduct