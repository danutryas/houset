import React,{useContext} from 'react'
import ModalContext from './Context/ModalContext'
import AddProduct from './Modal/AddProduct'
import ChangeProduct from './Modal/ChangeProduct'
import DeleteProduct from './Modal/DeleteProduct'


function ModalComponent() {
  const {modal} = useContext(ModalContext)

  return (
    <div className={`modal-container-${modal ? "active":""}`}>
        <AddProduct />
        <ChangeProduct />
        <DeleteProduct />
    </div>
  )
}

export default ModalComponent